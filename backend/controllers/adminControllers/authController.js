import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User, { userValidationSchema } from '../../models/user.js';
import sendResetEmail from '../../utils/sendResetEmail.js';

class authController {
    static async registerAdmin(req, res) {
        try {
            const { email, password, name, type, profile_photo } = req.body;

            // Ensure required fields are provided
            if (!email || !password || !name || !type) {
                return res.status(400).json({ message: 'All fields are required' });
            }

            // Validate password length before hashing it
            const { error } = userValidationSchema.validate({ email, password, name, type, profile_photo });
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }

            const admin = await User.findOne({ email });
            if (admin) {
                return res.status(404).json({ message: 'Admin with the given email already exists' });
            }

            // Hash the password only after validation
            const hashedPassword = await bcrypt.hash(password, 10);

            const newAdmin = new User({
                name,
                email,
                password: hashedPassword,
                type,
                profile_photo,
            });

            await newAdmin.save();
            return res.status(201).json({ message: 'Admin registered successfully' });
        } catch (error) {
            console.error('Error in registerAdmin:', error);
            return res.status(500).json({ message: error.message || 'Server error' });
        }
    }

    static async adminLogin(req, res) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: 'Email and password are required' });
            }

            const admin = await User.findOne({ email });
            if (!admin) {
                return res.status(404).json({ message: 'Admin not found' });
            }

            const isPasswordValid = await bcrypt.compare(password, admin.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign(
                { id: admin._id, type: admin.type },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            );

            // Send token in HTTP-only cookie (simple for development)
            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            const { password: _, ...adminData } = admin._doc;

            return res.status(200).json({
                message: 'Login successful',
                admin: adminData,
            });
        } catch (error) {
            console.error('Error in adminLogin:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    static async forgotPassword(req, res) {
        try {
            const { email } = req.body;
            const admin = await User.findOne({ email });
            if (!admin) {
                return res.status(404).json({ message: 'Admin not found' });
            }

            const otp = Math.floor(100000 + Math.random() * 900000);

            await sendResetEmail(email, otp);

            admin.otp = otp;
            admin.otpExpiration = Date.now() + 10 * 60 * 1000;
            await admin.save();

            return res.status(200).json({ message: 'OTP sent to your email' });
        } catch (error) {
            console.error('Error in forgotPassword:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    static async verifyOTP(req, res) {
        try {
            const { email, otp } = req.body;
    
            const admin = await User.findOne({ email });
            if (!admin) {
                return res.status(404).json({ message: 'Admin not found' });
            }
    
            // Check if OTP exists and is still valid
            if (admin.otp !== parseInt(otp)) {
                return res.status(400).json({ message: 'Invalid OTP' });
            }
    
            // Check if OTP has expired
            if (Date.now() > admin.otpExpiration) {
                return res.status(400).json({ message: 'OTP has expired' });
            }
    
            // After successful verification, delete the OTP and its expiration time
            admin.otp = undefined;
            admin.otpExpiration = undefined;
            await admin.save();
    
            // Generate reset token (valid for 10 minutes)
            const resetToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '10m' });
    
            return res.status(200).json({
                message: 'OTP verified successfully',
                resetToken
            });
    
        } catch (error) {
            console.error('Error in verifyOTP:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
    
    static async resetPassword(req, res) {
        try {
            const { resetToken, newPassword } = req.body;
    
            if (!resetToken || !newPassword) {
                return res.status(400).json({ message: 'Reset token and new password are required' });
            }
    
            // Verify reset token
            const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
    
            const admin = await User.findOne({ email: decoded.email });
            if (!admin) {
                return res.status(404).json({ message: 'Admin not found' });
            }
    
            // Hash the new password before saving
            const hashedPassword = await bcrypt.hash(newPassword, 10);
    
            // Update the password
            admin.password = hashedPassword;
            await admin.save();
    
            return res.status(200).json({ message: 'Password reset successfully' });
    
        } catch (error) {
            console.error('Error resetting password:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }    
}

export default authController;
