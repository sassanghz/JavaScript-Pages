const express = require('express');
const app = express();

const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.get('/api', function(req, res) {
    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }

    try {
        // Read the JSON file asynchronously
        fs.readFile('count.json', 'utf-8', (err, json) => {
            if (err) throw err;

            const obj = JSON.parse(json);

            obj.pageviews++;

            if (req.query.type === 'visit-pageview') {
                obj.visits++;
            }

            const newJSON = JSON.stringify(obj);

            // Write the updated JSON file asynchronously
            fs.writeFile('count.json', newJSON, 'utf-8', (err) => {
                if (err) throw err;
                res.send(newJSON);
            });
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error processing request');
    }
});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});
