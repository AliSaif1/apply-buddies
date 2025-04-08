import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Bearer <token>

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    // Verify token using JWT_SECRET
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        req.user = decoded; // You can use the decoded token to identify the user
        next();
    });
};

export default verifyToken;
