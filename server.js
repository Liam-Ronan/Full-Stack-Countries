import express from 'express';
// Importing axios to retrieve data from REST countries API
import axios from 'axios';

const app = express()
const PORT = process.env.PORT || 3000;

// List of countries to retrieve data for
const countriesList = [
    "Albania",
    "Andorra",
    "Australia",
   "Brazil",
    "Belgium",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Ireland",
    "Italy",
    "Japan",
    "Kenya",
    "Luxembourg",
    "Mexico",
    "New Zealand",
    "Nigeria",
    "Portugal",
    "Russia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Thailand",
    "United Kingdom",
    "United States of America",
    "Vietnam",
    "Zambia",
];

// Adding middleware to parse through the JSON data/URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    try {
        res.send(`Express server running on Port: ${PORT}`)   
    } 
    catch(err) {
        res.status(500).send(err)
    }
})

//Async function to retrieve data only for specified countries above
async function getCountryData(countryName) {
    try {
        // Retrieving data for specified country from the API
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
       /* Extracting data from HTTP response
        - React components can consistently
        - expect data structure to be the same
        - ease of mapping an array of objects */
        return response.data[0];
    } 
    catch(err) {
        
    }
}

/* Using async/await to ensure express server stays
responsive - doesn't block the event loop,
maintaining scalability of server */
app.get('/countries', async (req, res) => {
    try {
        //Getting all countries from the URL - returns a promise
        const response = await axios.get('https://restcountries.com/v3.1/all')
        
        //Response data stored in countries variable
        const countries = response.data;

        //Sends countries data as JSON to client
        res.json(countries)
    } 
    catch(err) {
        console.log(`Error retrieving data: ${err}`);
        res.status(500).json( {error: 'Server Error'})
    }
})

app.listen(PORT, () => {
    console.log(`Your Server is running on Port: ${PORT}`);
})