const url = `http://localhost:3001`;

const headers = {
  Authorization: 'auth'
};

export const getCategories = () =>
  fetch(`${url}/categories`, { headers }).then(res => res.json()).then(object => object.categories);