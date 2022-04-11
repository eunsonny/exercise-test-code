const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
// product_client는 실제 함수가 아닌 mock 함수로 대체한다. 
// 왜냐면 ProductService를 테스트 하는 과정에서, ProductService가 ProductClient를 
// 사용하고 있어, ProductClient의 성공여부의 따라 테스트 결과가 달라질 수 있으므로 의존성을 제거하는 것 
jest.mock('../product_client');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'milk', available: true },
    { item: 'banana', available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'banana', available: false }])
  });
  
});
