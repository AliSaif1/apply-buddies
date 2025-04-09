import Scholarship from "../../models/contentModels/scholarship.js";

class ScholarshipController {
    static async addScholarship(req, res) {
        try {
            const countryData = req.body;

            const newProgram = new Scholarship(countryData);
            const savedProgram = await newProgram.save();

            res.status(201).json({
                success: true,
                message: "Program added successfully",
                data: savedProgram,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to add program",
                error: error.message,
            });
        }
    }

    static async updateScholarship(req, res) {
        try {
            const scholarshipId = req.params.id;
            const updateData = req.body;
    
            // Check if updateData is not empty
            if (!updateData || Object.keys(updateData).length === 0) {
                return res.status(400).json({ message: 'No update data provided' });
            }
    
            const scholarship = await Scholarship.findById(scholarshipId);
    
            if (!scholarship) {
                return res.status(404).json({ message: 'Scholarship not found' });
            }
    
            // Check if the user is the owner (authorization) - assuming userId field exists
            if (scholarship.userId && scholarship.userId.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to update this scholarship' });
            }
    
            const updatedScholarship = await Scholarship.findByIdAndUpdate(scholarshipId, updateData, {
                new: true,
                runValidators: true,
            });
    
            return res.status(200).json({ message: 'Scholarship updated successfully', scholarship: updatedScholarship });
        } catch (error) {
            console.error('Error updating scholarship:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
    
    static async deleteScholarship(req, res) {
        try {
            const scholarshipId = req.params.id;
    
            const scholarship = await Scholarship.findById(scholarshipId);
    
            if (!scholarship) {
                return res.status(404).json({ message: 'Scholarship not found' });
            }
    
            // Check if the user is the owner (authorization) - assuming userId field exists
            if (scholarship.userId && scholarship.userId.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to delete this scholarship' });
            }
    
            await Scholarship.findByIdAndDelete(scholarshipId);
    
            return res.status(200).json({ message: 'Scholarship deleted successfully' });
        } catch (error) {
            console.error('Error deleting scholarship:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }    
}

export default ScholarshipController;
