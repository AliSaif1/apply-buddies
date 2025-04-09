import Country from "../../models/contentModels/country.js";

class CountryController {
    static async addCountry(req, res) {
        try {
            const countryData = req.body;

            const newProgram = new Country(countryData);
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

    static async updateCountry(req, res) {
        try {
            const countryId = req.params.id;
            const updateData = req.body;
    
            // Check if updateData is not empty
            if (!updateData || Object.keys(updateData).length === 0) {
                return res.status(400).json({ message: 'No update data provided' });
            }
    
            const country = await Country.findById(countryId);
    
            if (!country) {
                return res.status(404).json({ message: 'Country not found' });
            }
    
            // Check if the user is the owner (authorization) - assuming userId field exists
            if (country.userId && country.userId.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to update this country' });
            }
    
            const updatedCountry = await Country.findByIdAndUpdate(countryId, updateData, {
                new: true,
                runValidators: true,
            });
    
            return res.status(200).json({ message: 'Country updated successfully', country: updatedCountry });
        } catch (error) {
            console.error('Error updating country:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
    
    static async deleteCountry(req, res) {
        try {
            const countryId = req.params.id;
    
            const country = await Country.findById(countryId);
    
            if (!country) {
                return res.status(404).json({ message: 'Country not found' });
            }
    
            // Check if the user is the owner (authorization) - assuming userId field exists
            if (country.userId && country.userId.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to delete this country' });
            }
    
            await Country.findByIdAndDelete(countryId);
    
            return res.status(200).json({ message: 'Country deleted successfully' });
        } catch (error) {
            console.error('Error deleting country:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }    
}

export default CountryController;
