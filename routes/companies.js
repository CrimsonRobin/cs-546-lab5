//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/routes
import express from "express";
import {getCompanies, getCompanyById} from "../data/data.js";
import * as helpers from "../helpers.js";
//You can import your getComapnies() function in the /data/data.js file 3 to return the list of comapnies and call it in the /companies route.  You can also import your getComapny(id) function and call it in the :/id route.

const router = express.Router();

// Implement GET Request Method and send a JSON response See lecture code!
router.route('/')
.get(async (req, res) => {
    try {
        const companyList = await getCompanies();
        return res.join(companyList);
    } catch (error) {
        return res.status(500).send(error);
    }
})
.post(async (req, res) => {
    return res.send('POST request to http://localhost:3000/companies');
});

//Implement GET Request Method and send a JSON response See lecture code!
router.route('/:id')
.get(async (req, res) => {
    try {
      req.params.id = helpers.checkId(req.params.id);
    } catch (e) {
      return res.status(400).json({error: e});
    }
    try {
      const company = await getCompanyById(req.params.id);
      return res.json(company);
    } catch (e) {
      return res.status(404).json(e);
    }
})
.post(async (req, res) => {
    return res.send(`POST request to http://localhost:3000/companies/${req.params.id}`);
});

export default router;
