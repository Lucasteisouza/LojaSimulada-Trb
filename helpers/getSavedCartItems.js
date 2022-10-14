const getSavedCartItems = () => {
  const localRescued = localStorage.getItem('cartItems');
  if (localRescued !== undefined) { 
    const parsed = JSON.parse(localRescued);
    return parsed;
  } return '';
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
