const viewProducts = (req, res) => {
    const db = req.app.get('db');
    db.viewProducts().then(products => {
        res.status(200).json(products);
    }).catch(console.log);
}

const viewProduct = (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');
    db.viewProduct(id).then(product => {
        res.status(200).json(product);
    }).catch(console.log);
}

const addProduct = (req, res) => {
    let { image_url, product_name, price } = req.body;
    price = price*1;
    const db = req.app.get('db');
    db.addProduct([image_url, product_name, price]).then(products => {
        res.status(200).json(products);
    }).catch(console.log);
}

const editProduct = (req, res) => {
    const { id } = req.params;
    const { image_url, product_name, price } = req.body[0];
    console.log(req.body);
    const db = req.app.get('db');
    db.editProduct([id, image_url, product_name, price]).then(() => {
        res.sendStatus(200);
    }).catch(console.log);
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');
    db.deleteProduct(id).then(() => {
        res.sendStatus(200);
    }).catch(console.log);
}

module.exports = {
    viewProducts,
    viewProduct,
    addProduct,
    editProduct,
    deleteProduct
}