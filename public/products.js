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
  " class="card-img-top">
   class="card-img-top">
  <div class="card-body">
  <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr>
                  <td><img src="${product.image}"</img></td>
                  <td><img src="${product.thumbnail}"</img></td>
                    <td>${product.sku}</td>
                    <td>${product.name} </td>
                    <td> R${product.price}</td>
                    <td> ${product.descriptions}</td>
                    <td>${product.category}</td>
                    <td>${product.create_date}</td>
                    <td>  ${product.stock}</td>
                
                  </tr>
                </tbody>
              </table>
 
   
  
  
   
   
 
 
    `;
  });
}