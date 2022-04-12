const ProductService = require('../product_service.js');
const StubProductClient = require('.stub_product_client.js');

describe('ProductService - stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it ('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expext(items.length).toBe(1);
    expext(items).toEqual([{ item: 'milk', available: true }])
  })
})