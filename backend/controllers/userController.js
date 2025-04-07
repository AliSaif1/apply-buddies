import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { userValidationSchema } from '../models/user.js';

class UserController {
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

    //   static async forgotPassword(req, res) {
    //     try {
    //       const { email } = req.body;
    //       const admin = await Admin.findOne({ email });
    //       if (!admin) {
    //         return res.status(404).json({ message: 'Admin not found' });
    //       }

    //       const resetToken = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    //         expiresIn: '15m',
    //       });

    //       await sendResetEmail(email, resetToken);
    //       return res.status(200).json({ message: 'Password reset email sent' });
    //     } catch (error) {
    //       console.error('Error in forgotPassword:', error);
    //       return res.status(500).json({ message: 'Server error' });
    //     }
    //   }
}

export default UserController;
