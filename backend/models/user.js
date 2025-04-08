import mongoose from 'mongoose';
import Joi from 'joi';

// Joi validation schema for user fields
export const userValidationSchema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(), // Minimum length of 6 characters for password
    type: Joi.string().valid('admin', 'user').required(),
    profile_photo: Joi.string().optional(),
    otp: Joi.number().optional(), 
    otpExpiration: Joi.date().optional(), 
});

// User schema definition
const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, unique: true },
        type: { type: String, required: true, default: 'admin' },
        password: { type: String, required: true },
        profile_photo: { type: String },
        otp: { type: Number },
        otpExpiration: { type: Date },
    },
    { timestamps: true }
);

// Pre-save hook for validation
UserSchema.pre('save', async function (next) {
    const user = this.toObject();
    
    // Remove system fields (_id, createdAt, updatedAt, __v) before validation
    const { _id, createdAt, updatedAt, __v, ...userData } = user;

    console.log('User Data before Validation:', userData);

    const { error } = userValidationSchema.validate(userData);
    if (error) {
        console.log('Validation Error:', error.details);
        return next(new Error(error.details[0].message));
    }

    next();
});

export default mongoose.model('User', UserSchema);
