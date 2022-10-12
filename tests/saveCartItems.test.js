const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');
const cartItem = 'ID: MLB1937076326 | TITLE: Pc Computador Cpu Core I5 650 + Ssd 240gb, 8gb Memória Ram | PRICE: $1050';
describe('3 - Teste a função saveCartItems', () => {
  it('should use localStorage.setItem when called with a cartItem argument', () => {
    saveCartItems(cartItem);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('should call localStorage.setItems(cartItems, the value used as argument for saveCartItems)', () => {
    saveCartItems(cartItem);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem', cartItem)
  })
});
