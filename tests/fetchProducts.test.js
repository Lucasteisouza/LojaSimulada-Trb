require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it ('should be a function', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });
  it ('call fetch when called with \'computer\' parameter', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it ('should use specific endpoint when called with computer parameter', async () =>{
    expect.assertions(1);
    await fetchProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toBeCalledWith(url);
  });
  it('should return object like the mock computadorSearch', async () => {
    expect.assertions(1);
    const result = await fetchProducts('computador')
    expect(result).toEqual(computadorSearch);
  });
  it('should return erro \'You must provide an url\'', async () => {
    expect.assertions(1);
    try {
      await fetchProducts();
    } catch(error) {
      expect(error.message).toMatch('You must provide an url')
    }
  });
});
 