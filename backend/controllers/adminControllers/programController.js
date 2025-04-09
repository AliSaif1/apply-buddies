import Program from "../../models/contentModels/programs.js";

class ProgramController {
    static async addPrograms(req, res) {
        try {
            const programData = req.body;

            const newProgram = new Program(programData);
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

    static async updateProgram(req, res) {
        try {
            const programId = req.params.id;
            const updateData = req.body;
    
            // Check if updateData is not empty
            if (!updateData || Object.keys(updateData).length === 0) {
                return res.status(400).json({ message: 'No update data provided' });
            }
    
            const program = await Program.findById(programId);
    
            if (!program) {
                return res.status(404).json({ message: 'Program not found' });
            }
    
            // Check if the user is the owner (authorization)
            if (program.userId && program.userId.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to update this program' });
            }
    
            const updatedProgram = await Program.findByIdAndUpdate(programId, updateData, {
                new: true,
                runValidators: true,
            });
    
            return res.status(200).json({ message: 'Program updated successfully', program: updatedProgram });
        } catch (error) {
            console.error('Error updating program:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
    
    static async deleteProgram(req, res) {
        try {
            const programId = req.params.id;
    
            const program = await Program.findById(programId);
    
            if (!program) {
                return res.status(404).json({ message: 'Program not found' });
            }
    
            // Check if the user is the owner (authorization)
            if (program.userId && program.userId.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to delete this program' });
            }
    
            await Program.findByIdAndDelete(programId);
    
            return res.status(200).json({ message: 'Program deleted successfully' });
        } catch (error) {
            console.error('Error deleting program:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }    
}

export default ProgramController;
