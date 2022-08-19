let products = [];
const productContainer = document.getElementById("products-data");
fetch("https://connnection-test.herokuapp.com/products")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    console.log(data);
    showproducts(data);
  });
function showproducts(products) {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    productContainer.innerHTML += `
    <div class="col-md-3">
      <div class="card" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top">
  <div class="card-body">
    <p class="card-text">${product.sku}</p>
    <p class="card-text">${product.name}</p>
    <p class="card-text">R${product.price}</p>
    <p class="card-text">${product.weight}</p>
    <p class="card-text">${product.descriptions}</p>
    <p class="card-text">${product.thumbnail}</p>
    <p class="card-text">${product.category}</p>
    <p class="card-text">${product.create_date}</p>
    <p class="card-text">${product.stock}</p>
  </div>
</div>
</div>
    `;
  });
}