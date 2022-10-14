const saveCartItems = (cartItem) => {
  const itemArr = [];
  cartItem.forEach((element) => {
    itemArr.push(element.innerText);
  });
  const stringed = JSON.stringify(itemArr);
  localStorage.setItem('cartItems', stringed);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
