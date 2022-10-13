const cartItems = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');
const emptyBtn = document.querySelector('.empty-cart');
const loading = document.getElementsByClassName('loading');
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

const cartItemClickListener = (event) => {
  const oldTotal = parseInt(totalPrice.innerText, 10);
  const itemPrice = parseInt(event.target.id, 10);
  totalPrice.innerText = oldTotal - itemPrice;
  event.target.remove();
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
 const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  li.id = price;
  return li;
};

 const addToCart = async (id) => {
  const product = await fetchItem(id);
  cartItems.appendChild(createCartItemElement(product));
  const { price } = product;
  totalPrice.innerText = parseInt(totalPrice.innerText, 10) + price;
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', (event) => {
    const { target } = event;
    const firstSib = target.parentNode.firstChild.innerText;
    addToCart(firstSib);
  });
  section.appendChild(button);

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const appendAPI = async () => {
  const items = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const { results } = data;
  results.forEach((product) => {
    items.appendChild(createProductItemElement(product));
  });
};

const emptyCart = () => {
  const cartItemList = document.querySelectorAll('.cart__item');
  cartItemList.forEach((element) => element.remove());
};

emptyBtn.addEventListener('click', emptyCart);

const loader = () => {
  setTimeout(() => {
    loading[0].remove();
  }, 1500);
};

window.onload = () => {
  loader();
  appendAPI();
};
