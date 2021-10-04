const express = require("express");
const app = express();
const cors = require("cors");
const csv = require('csvtojson');
const csvFilePath = './products.csv';
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
const port = 5000;


const parseDataFromFile = () => {
    return csv()
        .fromFile(csvFilePath);
}


app.get('/api/products', (req, res) => {
    const key = req.query.title;
    const gender = req.query.gender;
    const onSale = req.query.onSale;
    console.log(gender)
    if (key.length < 3) {
        res.send({ status: "OK", data: [] });
    }
    parseDataFromFile().then((jsonObj) => {
        const filteredProducts = jsonObj.filter((item) => item.title.toLowerCase().includes(key.toLowerCase()) &&
            (gender.length > 0 ? item.gender === gender.toLowerCase() : true) &&
            (onSale ? item.sale_price < item.price : true));
        res.send({ status: "OK", data: filteredProducts });
    })
})

app.get('/api/product/:productId', (req, res) => {
    const productId = req.params.productId;
    console.log(productId)
    parseDataFromFile().then((jsonObj) => {
        const productItem = jsonObj.find((item) => item.gtin === productId);
        console.log(productItem);
        res.send({ status: "OK", product: productItem });
    })
})


// app.get("/api/products", (req, res) => {
//     setTimeout(() => {
//         csv()
//             .fromFile(csvFilePath)
//             .then((jsonObj) => {
//                 console.log(jsonObj);
//                 res.send({ status: "OK", data: jsonObj });
//             })


//     }, 250);
// });

app.get("/api", (req, res) => {
    res.send({ status: "OK", message: `Project is runn'n on port=${port}` });
});


app.listen(port, () =>
    console.log(`Project ICE server listening on port ${port}!`)
);