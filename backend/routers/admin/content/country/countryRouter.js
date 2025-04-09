import { Router } from "express";
import CountryController from "../../../../controllers/adminControllers/countryController.js";
import verifyToken from "../../../../middleware/verifyToken.js";

const countryRouter = Router();

countryRouter.post('/addCountry', verifyToken, CountryController.addCountry);
countryRouter.patch('/updateCountry/:id', verifyToken, CountryController.updateCountry);
countryRouter.delete('/deleteCountry/:id', verifyToken, CountryController.deleteCountry);

export default countryRouter;
