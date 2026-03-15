// Pistas para crear la lista de productos e id
let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
}

function addProduct(name, price) {
    if (!name || price === undefined) {
        throw new Error('Name and price must be defined');
    }

    const productExists = products.find(product => product.name === name);
    if (productExists) {
        throw new Error('Product already exists');
    }

    id++;
    const newProduct = {
        id: id,
        name: name,
        price: price
    };
    products.push(newProduct);
    return newProduct;
}

function removeProduct(id) {
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        throw new Error('Product not found');
    }
    products.splice(productIndex, 1);
}

function getProducts() {
    return products;
}

function getProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
}

function updateProduct(id, name, price) {
    const product = products.find(p => p.id === id);
    if (!product) {
        throw new Error('Product not found');
    }

    if (name) {
        product.name = name;
    }

    if (price !== undefined) {
        product.price = price;
    }

    return product;
}

// Exportamos las funciones necesarias
module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
};
