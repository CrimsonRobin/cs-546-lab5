/*Here, you can export the data functions
to get the comapnies, people, getCompanyByID, getPersonById.  You will import these functions into your routing files and call the relevant function depending on the route. 
*/
import axios from "axios";
import * as helpers from "../helpers.js";

const getPeople = async () => {
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json');
    return data; // this will be the array of people objects
};

const getCompanies = async () => {
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/90b56a2abf10cfd88b2310b4a0ae3381/raw/f43962e103672e15f8ec2d5e19106e9d134e33c6/companies.json');
    return data; // this will be the array of company objects
};

const getCompanyById = async (id) => {
    let cid = helpers.checkId(id);

    const data = await getCompanies();
    const companyObject = data.find(({id}) => id === cid);

    if(companyObject === undefined) {
        throw new Error("Company Not Found!");
    }

    return companyObject;
};

const getPersonById = async (id) => {
    let pid = helpers.checkId(id);

    const data = await getPeople();
    const personObject = data.find(({id}) => id === pid);

    if(personObject === undefined) {
        throw new Error("Person Not Found!");
    }

    return personObject;
};

export {getCompanies, getPeople, getCompanyById, getPersonById}