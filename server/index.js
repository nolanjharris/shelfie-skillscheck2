require('dotenv').config();
const massive = require('massive');
const express = require('express');
const app = express();
const controller = require('./controller');

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected B-)');
}).catch(console.log);

app.get('/api/products', controller.viewProducts);
app.get('/api/products/:id', controller.viewProduct);
app.put('/api/products/:id', controller.editProduct);
app.post('/api/products', controller.addProduct);
app.delete('/api/products/:id', controller.deleteProduct);

app.listen(process.env.SERVER_PORT, () => console.log('Listening on port ' + process.env.SERVER_PORT));