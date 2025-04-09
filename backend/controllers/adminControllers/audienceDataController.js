import User from "../../models/user.js";

class AudienceDataController {
    static async getTotalUsers(req, res) {
        try {
            const users = await User.find({ type: "user" });

            return res.status(200).json({
                message: "Users fetched successfully",
                totalUsers: users.length,
                users,
            });
        } catch (error) {
            console.error("Error fetching users:", error);
            return res.status(500).json({ message: "Server error" });
        }
    }

    static async getTotalProfessionals(req, res) {
        try {
            const users = await User.find({ type: "consultant" });

            return res.status(200).json({
                message: "Professionals fetched successfully",
                totalUsers: users.length,
                users,
            });
        } catch (error) {
            console.error("Error fetching users:", error);
            return res.status(500).json({ message: "Server error" });
        }
    }
}

export default AudienceDataController;
