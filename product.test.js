const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('Adding Products', () => {
    test('should add a product', () => {
        const product = addProduct('Manzana', 1.5);
        expect(product).toEqual({ id: 1, name: 'Manzana', price: 1.5 });
        expect(getProducts()).toContainEqual(product);
    });

    test('should increment the id by 1 each time a product is added', () => {
        addProduct('Pera', 2.0);
        const secondProduct = addProduct('Plátano', 1.2);
        expect(secondProduct.id).toBe(2);
    });

    test('should fail when adding a product with no name', () => {
        expect(() => addProduct(undefined, 10)).toThrow();
    });

    test('should fail when adding a product with no price', () => {
        expect(() => addProduct('Melón', undefined)).toThrow();
    });

    test('should fail when adding a repeated product', () => {
        addProduct('Limón', 1.0);
        expect(() => addProduct('Limón', 1.0)).toThrow();
    });
});

describe('Removing Products', () => {
    test('should remove a product', () => {
        addProduct('Uva', 3.0);
        removeProduct(1);
        expect(getProducts().length).toBe(0);
    });

    test('should fail when removing a product that does not exist', () => {
        expect(() => removeProduct(999)).toThrow();
    });
});

describe('Getting a single product', () => {
    test('should get a product', () => {
        addProduct('Mango', 2.5);
        const product = getProduct(1);
        expect(product.name).toBe('Mango');
    });

    test('should fail when getting a product that does not exist', () => {
        expect(() => getProduct(999)).toThrow();
    });
});

describe('Updating Products', () => {
    test('should update a product', () => {
        addProduct('Piña', 4.0);
        const updated = updateProduct(1, 'Piña Madura', 4.5);
        expect(updated.name).toBe('Piña Madura');
        expect(updated.price).toBe(4.5);
    });

    test('should fail when updating a product that does not exist', () => {
        expect(() => updateProduct(999, 'Nada', 0)).toThrow();
    });

    test('should only update the price', () => {
        addProduct('Sandía', 5.0);
        const updated = updateProduct(1, undefined, 5.5);
        expect(updated.name).toBe('Sandía');
        expect(updated.price).toBe(5.5);
    });

    test('should only update the name', () => {
        addProduct('Cereza', 0.5);
        const updated = updateProduct(1, 'Cereza Roja', undefined);
        expect(updated.name).toBe('Cereza Roja');
        expect(updated.price).toBe(0.5);
    });
});
