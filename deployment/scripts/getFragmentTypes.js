const fetch = require('node-fetch');
const fs = require('fs');

const GRAPHQL_URL = `http://localhost:5050/graphql`;

const RETRIES = 200; // This will retry for 10 mins

const query = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: `
            {
                __schema {
                    types {
                        kind
                        name
                        possibleTypes {
                            name
                        }
                    }
                }
            }
        `,
    }),
};

const saveToFile = (result) => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(type => type.possibleTypes !== null);
    result.data.__schema.types = filteredData;
    fs.writeFile('./src/fragmentTypes.json', JSON.stringify(result.data), (err) => {
        if (err) console.error('Error writing fragmentTypes file', err);
        console.log('Fragment types successfully extracted!');
    });
};

const fetchFragmentTypes = (attempt = 0) => {
    if (attempt >= RETRIES) {
        console.error('Can\'t connect to twig-graph, aborting.');
        return process.exit(1);
    }

    fetch(GRAPHQL_URL, query)
        .then(result => result.json())
        .then(saveToFile)
        .catch(() => {
            console.log('Can\'t connect to twig-graph. Retrying...');
            setTimeout(() => fetchFragmentTypes(attempt + 1), 3000);
        });

    return true;
};

fetchFragmentTypes();
