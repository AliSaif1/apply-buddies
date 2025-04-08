import nodemailer from 'nodemailer';

const sendResetEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    });

    const mailOptions = {
        from: process.env.USER_EMAIL, 
        to: email, 
        subject: 'Password Reset OTP',
        html: `
            <p>Hi,</p>
            <p>You requested a password reset. Use the OTP below to verify your identity:</p>
            <h2>${otp}</h2>
            <p>The OTP is valid for 10 minutes. If you did not request a password reset, please ignore this email.</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('OTP sent successfully');
        return otp;  
    } catch (error) {
        console.error('Error sending OTP email:', error);
        throw new Error('Error sending OTP email');
    }
};

export default sendResetEmail;
