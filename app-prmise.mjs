import https from 'node:https';
//SRP

const getDefinition = (word) => {
    return new Promise((resolve) => {
        console.log(word)
        const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

        https.get(URL, response => {
            let data = [];

            response.on('data', chunk => data.push(chunk));


            response.on('end', () => {
                let buffer = Buffer.concat(data);
                let json_string = buffer.toString();
                let reqData = JSON.parse(json_string);
                resolve(reqData);
                //console.log(reqData)
                //HW?
                // callback - arg
                //promise async/await-----return
                // promise -----solve, reject
            })

            response.on('error', err => console.error(err));

        })
    })
}

const data = await getDefinition('persuade');
console.log(data);
