var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var mainBtn = document.getElementById("mainBtn");
var productList;



if (localStorage.getItem("myProduct") == null) {
    productList = [];
} else {
    productList = JSON.parse(localStorage.getItem("myProduct"));
    displayProduct();
}

function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    };

    productList.push(product);
    localStorage.setItem("myProduct", JSON.stringify(productList));
    displayProduct();
    clearProduct();
//console.log(productList);

}

function clearProduct() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}

function displayProduct() {
    var x = ``;
    for (var i = 0; i < productList.length; i++) {
        x += `<tr>
    <td>${ [i]}</td>
    <td>${productList[i].name } </td>
     <td>${productList[i].price } </td>
     <td>${productList[i].category } </td>
    <td>${productList[i].desc } </td>
    <td><button onclick="updateProduct(${i});"class="btn btn-outline-info">update</button></td>
    <td><button onclick="deleteProduct(${i});"class="btn btn-outline-danger ">delete</button></td> 
    </tr>`
    }
    document.getElementById("rows").innerHTML = x;
}

function deleteProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem("myProduct", JSON.stringify(productList));
    displayProduct();
}

function searchProduct(index) {
    var x = ``;
    for (var i = 0; i < productList.length; i++) {

        if (productList[i].name.toLowerCase().includes(index.toLowerCase()) == true) {
            x += `<tr>
    <td>${[i]}</td>
    <td>${productList[i].name} </td>
     <td>${productList[i].price} </td>
     <td>${productList[i].category} </td>
    <td>${productList[i].desc} </td>
    <td><button onclick="updateProduct(${i});" class="btn btn-outline-info">update</button></td>
    <td><button onclick="deleteProduct(${i});"class="btn btn-outline-danger ">delete</button></td> 
    </tr>`
        }

    }
    document.getElementById("rows").innerHTML = x;
}




function updateProduct(productIndex) {
  
    productNameInput.value = productList[productIndex].name;
    productPriceInput.value = productList[productIndex].price;
    productCategoryInput.value = productList[productIndex].category;
    productDescInput.value = productList[productIndex].desc;

    mainBtn.innerHTML = "update";

    mainBtn.onclick = function () {
        productList[productIndex].name = productNameInput.value;
        productList[productIndex].price = productPriceInput.value;
        productList[productIndex].category = productCategoryInput.value;
        productList[productIndex].desc = productDescInput.value;

        localStorage.setItem("myProduct", JSON.stringify(productList));
        displayProduct();
        mainBtn.innerHTML = "add product";
        clearProduct();
        mainBtn.onclick=addProduct;
    };
    
   
}

