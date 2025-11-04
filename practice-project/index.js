const express = require('express');
const app = express();
const PORT = 8090;

app.use(express.json());

app.listen(PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'adidas',
        size: 'L'
    })
});

app.post('/tshirt/:id', (req, res) => {

    const id = req.params;
    const logo = req.body;

    //console.log(`ID: ${id}`);

    if (!logo) {
        res.status(418).send({message:'We need a logo!'});
    }

    res.send({
        tshirt: `Tshirt with your and ID of`
    });
});