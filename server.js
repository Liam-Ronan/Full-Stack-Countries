import express from 'express';
// Importing axios to retrieve data from REST countries API
import axios from 'axios';
import cors  from 'cors'

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
    "Republic Of Ireland",
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
// 
app.use(cors())
// Handle encoded data - spaces, special chars etc.
app.use(express.urlencoded({ extended: true }))

// GET request to ensure server is running on port 3000
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
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
       /* Extracting data from HTTP response
        - React components can consistently
        - expect data structure to be the same
        - ease of mapping an array of objects */
        return response.data[0];
    } 
    catch(err) {
        console.log(`Error fetching data for ${countryName}`);
    }
}

/* Using async/await to ensure express server stays
   responsive - doesn't block the event loop,
   maintaining scalability of server */
app.get('/countries', async (req, res) => {
    try {
        /* - for each country in array
           - getCountryData is called for each country in the list */
           const countryData = countriesList
            .filter((countryName) => countryName)
            .map((countryName) => getCountryData(countryName));
        
        // Wait for promises to resolve
        const countryDataList = await Promise.all(countryData)

        // Filter out countries where data could not be retrieved
        const validCountryData = countryDataList.filter((data) => data !== null);

        //Sends countries data as JSON to client
        res.json(validCountryData)
        
    } 
    catch(err) {
        console.log(`Error retrieving data:`, err);
        res.status(500).json( {error: 'Server Error'})
    }
})

app.get('/countries/:countryName', async (req, res) => {
    try {
        const countryName = req.params.countryName;

        const countryData = await getCountryData(countryName)

            if(countryData) {
                res.json(countryData)
            }
            else {
                res.status(404).json({ error: 'Country not found'})
            }
        
    } 
    catch(error) {
        console.log('Error retrieving data', error);
        res.status(500).json({ error: 'Server error'})
    }

})


app.listen(PORT, () => {
    console.log(`Your Server is running on Port: ${PORT}`);
})