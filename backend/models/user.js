import mongoose from 'mongoose';
import Joi from 'joi';

// Joi validation schema for user fields
export const userValidationSchema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    type: Joi.string().valid('admin', 'user', 'consultant').required(),
    profile_photo: Joi.string().optional(),
    otp: Joi.number().optional(),
    otpExpiration: Joi.date().optional(),
});

// User schema definition
const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, unique: true },
        type: {
            type: String,
            enum: ['admin', 'user', 'consultant'],
            default: 'user',
            required: true,
        },
        password: { type: String, required: true },
        profile_photo: { type: String },
        otp: { type: Number },
        otpExpiration: { type: Date },
    },
    { timestamps: true }
);

// Pre-save hook for validation
UserSchema.pre('save', async function (next) {
    try {
        const userData = {
            name: this.name,
            email: this.email,
            password: this.password,
            type: this.type,
            profile_photo: this.profile_photo,
            otp: this.otp,
            otpExpiration: this.otpExpiration,
        };

        const { error } = userValidationSchema.validate(userData);
        if (error) {
            return next(new Error(error.details[0].message));
        }

        next();
    } catch (err) {
        return next(err);
    }
});

export default mongoose.model('User', UserSchema);
