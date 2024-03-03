//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/routes
import express from "express";
import {getPeople, getPersonById} from "../data/data.js";
import * as helpers from "../helpers.js";

//You can import your getPeople() function in the /data/data.js file to return the list of people.  You can also import your getPersonById(id) function and call it in the :/id route.
const router = express.Router();

// Implement GET Request Method and send a JSON response  See lecture code!
router.route('/')
.get(async (req, res) => {
    try {
        const peopleList = await getPeople();
        return res.join(peopleList);
    } catch (error) {
        return res.status(500).send(error);
    }
})
.post(async (req, res) => {
    return res.send('POST request to http://localhost:3000/people');
});

// Implement GET Request Method and send a JSON response See lecture code!
router.route('/:id')
.get(async (req, res) => {
    try {
      req.params.id = helpers.checkId(req.params.id);
    } catch (e) {
      return res.status(400).json({error: e});
    }
    try {
      const person = await getPersonById(req.params.id);
      return res.json(person);
    } catch (e) {
      return res.status(404).json(e);
    }
})
.post(async (req, res) => {
    return res.send(`POST request to http://localhost:3000/people/${req.params.id}`);
});

export default router;
