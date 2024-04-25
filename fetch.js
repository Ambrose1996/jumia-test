
//working code set
/* url ='https://api.fakestorejson.com/api/v1/public/products';

function getData() {
  const response = fetch(url)
  console.log(response);
  
}
getData()*/

url = 'https://fakestoreapi.com/products';

fetch(url)
.then(res =>{
  return res.json();
})
.then(function (products) {
  let placeholder = document.querySelector("#pro");
  let out = "";
  for(let product of products){
    out +=`
    <div id="pro">
        <div id="star"><img src="/asset/yellow star.png" alt="" width="18"> <img src="/asset/yellow star.png" alt="" width="18"> <img src="/asset/yellow star.png" alt="" width="18"> <img src="/asset/yellow star.png" alt="" width="18"></div>
        <div id="main-product-content>
        <div id="title"> ${product.title} </div><br>
        <div id="cate"> ${product.category} </div>
        <div id="price"> £${product.price} </div><br>
        <button>View product</button>
        </div>
        <hr>
    </div>`
  }
  placeholder.innerHTML = out;
})
.catch(error => console.log(error));

fetch("https://fakestoreapi.com/products")
.then((data) =>{
  return data.json();
})
.then((data) =>{
  console.log(data)
  console.log(data[6].image);
  console.log(data[6].rating.count);
  console.log(data[6].description);
   document.getElementById('main-image').innerHTML = `<img src="${data[6].image}" width="300">`
   
   document.getElementById('pt').innerHTML += data[6].title;
   document.getElementById('pprice').innerHTML += "£" + "" + "" + data[6].price;
   document.getElementById('description').innerHTML += data[6].description;

})/* 
  document.querySelector('#main-image').innerHTML = '<img src="data.image">'; */





