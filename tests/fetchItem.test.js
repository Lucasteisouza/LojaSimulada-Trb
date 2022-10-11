require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('should be a function',() => {
    expect(typeof fetchItem).toBe('function');
  });
  it('should call fetch when called with MLB1615760527 argument', () =>{
    expect.assertions(1);
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('should fetch specific endPoint when called with argument MLB1615760527', () => {
    expect.assertions(1);
    fetchItem('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('should return object similar to mock', async () => {
    expect.assertions(1);
    const expected = await fetchItem('MLB1615760527');
    expect(expected).toEqual(item);
  });
  it('should return an error when called without arguments', async () => {
    expect.assertions(1);
    try{
      await fetchItem();
    } catch(error) {
      expect(error.message).toMatch('You must provide an url');
    }
  })
});
