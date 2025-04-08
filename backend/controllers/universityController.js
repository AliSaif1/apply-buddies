import University from '../models/university.js';

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
}

export default UniversityController;
