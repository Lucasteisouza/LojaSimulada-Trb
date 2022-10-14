const getSavedCartItems = () => {
  const localRescued = localStorage.getItem('cartItems');
  const parsed = JSON.parse(localRescued);
  return parsed;
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
