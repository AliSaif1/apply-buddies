import University from '../../models/contentModels/university.js';

class UniversityController {
    static async addUniversity(req, res) {
        try {
            const { name, image, country_id, ranking, programs, admission_req,
                deadline, tuition_fee, faculty, accommodation, intakes, websites,
                research_opportunities, location, accreditation, student_population, alumni_network } = req.body;

            // Validate required fields
            if (!name || !image || !country_id || !ranking || !admission_req || !deadline || !tuition_fee) {
                return res.status(400).json({ message: 'All required fields must be filled!' });
            }

            // Create new university document
            const newUniversity = new University({
                name, image, country_id, ranking, programs,
                admission_req, deadline, tuition_fee, faculty,
                accommodation, intakes, websites, research_opportunities,
                location, accreditation, student_population, alumni_network,
            });

            // Save the university to the database
            await newUniversity.save();

            // Return success response
            return res.status(200).json({ message: 'University added successfully', university: newUniversity });
        } catch (error) {
            console.error('Error adding university:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    static async updateUniversity(req, res) {
        try {
            const universityId = req.params.id;
            const updateData = req.body;
    
            // Check if updateData is not empty
            if (!updateData || Object.keys(updateData).length === 0) {
                return res.status(400).json({ message: 'No update data provided' });
            }
    
            const university = await University.findById(universityId);
    
            if (!university) {
                return res.status(404).json({ message: 'University not found' });
            }
    
            // Check if the user is the owner (authorization)
            if (university.userId && university.userId.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to update this university' });
            }
    
            const updatedUniversity = await University.findByIdAndUpdate(universityId, updateData, {
                new: true,
                runValidators: true,
            });
    
            return res.status(200).json({ message: 'University updated successfully', university: updatedUniversity });
        } catch (error) {
            console.error('Error updating university:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
    
    static async deleteUniversity(req, res) {
        try {
            const universityId = req.params.id;
    
            const university = await University.findById(universityId);
    
            if (!university) {
                return res.status(404).json({ message: 'University not found' });
            }
    
            // Check if the user is the owner (authorization)
            if (university.userId && university.userId.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to delete this university' });
            }
    
            await University.findByIdAndDelete(universityId);
    
            return res.status(200).json({ message: 'University deleted successfully' });
        } catch (error) {
            console.error('Error deleting university:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }    
}

export default UniversityController;
