let productName = document.querySelector("#productName");
let productCategory = document.querySelector("#productCategory");
let productPrice = document.querySelector("#productPrice");
let productAmount = document.querySelector("#productAmount");
let productDis = document.querySelector("#productDiscription");

let search = document.querySelector("#search");
let update = document.querySelector("#update");
let clearBtn = document.querySelector("#clear_b");

let tbody = document.querySelector("#tbody");

if (localStorage.getItem("products") == null) {
    var products = [];
}else{
    var products = JSON.parse(localStorage.getItem("products"));
    display_product();
}

function addProduct() {
    let product ={
        name: productName.value,
        category:productCategory.value,
        price:productPrice.value,
        amount:productAmount.value,
        discription:productDis.value
    }
    products.push(product)
    console.log(products);
    localStorage.setItem("products", JSON.stringify(products))
    display_product();
    clear_fields();
}

function clear_fields() {
    productName.value = "";
    productCategory.value = "";
    productPrice.value = "";
    productAmount.value = "";
    productDis.value = "";
}

function display_product() {
    products = JSON.parse(localStorage.getItem("products"));
    let container = "";
    for (let i = 0; i < products.length; i++) {
        container += `<tr>
                        <td>${i + 1}</td>
                        <td class="pname">${products[i].name}</td>
                        <td>${products[i].category}</td>
                        <td>${products[i].price}$</td>
                        <td>${products[i].amount}</td>
                        <td>${products[i].discription}</td>
                        <td><button class="btn btn-warning" onclick ="update_product(${i})">Update</button></td>
                        <td><button class="btn btn-danger" onclick ="delete_product(${i})">Delete</button></td>
                    </tr>`;
    }
    tbody.innerHTML = container;
}

function update_product(k) {
    productName.value = products[k].name;
    productCategory.value = products[k].category;
    productPrice.value = products[k].price;
    productAmount.value = products[k].amount;
    productDis.value = products[k].discription;
    update.textContent = "update product";
    update.classList.add('bg-success','text-white');
    update.onclick = function(){
        products[k].name = productName.value;
        products[k].category = productCategory.value;
        products[k].price = productPrice.value;
        products[k].amount = productAmount.value;
        products[k].discription = productDis.value;

        localStorage.setItem("products", JSON.stringify(products))
        update.textContent = "Add product";
        update.classList.remove('bg-success','text-white');
        update.onclick = () => {addProduct()}
        clear_fields()
        display_product()
    }
}

function delete_product(d) {
    products.splice(d,1)
    localStorage.setItem("products", JSON.stringify(products))
    display_product()
}

//version 1
// search.addEventListener("keyup",()=>{
//     let text = document.querySelectorAll("#tbody .pname");
//     let filter = search.value.toUpperCase();
//     if(filter === ""){
//         text.forEach(e => {
//             e.innerHTML = e.textContent
//         });
//         return;
//     }
//     else{
//         text.forEach(p => {
//             let textv = p.textContent;
//             if (textv.toUpperCase().includes(filter) ) {
//                 p.innerHTML = `<span>${p.textContent}</span>`;
//                 p.innerHTML = `${p.textContent.slice(p.textContent.indexOf(filter[0]),p.textContent.indexOf(filter[-1]))} <span>${p.textContent}</span>`;
//             }else{
//                 p.innerHTML = textv
//             }
//         });
//     }
// });

//version 2
// search.addEventListener("keyup",()=>{
//     let text = document.querySelectorAll("#tbody .pname");
//     let filter = search.value;
//     if(filter === ""){
//         text.forEach(e => {
//             e.innerHTML = e.textContent
//         });
//     }
//     else{
//         text.forEach(p => {
//             let textv = p.textContent;
//             if (textv.includes(filter) ) {
//                 p.innerHTML = p.textContent.replace(filter,`<span>${filter}</span>`)
                
//             }else{
//                 // p.innerHTML = textv
//             }
//         });
//     }
// });

// version 3
search.addEventListener("keyup", () => {
    let filter = search.value;
    let text = "";
    for(let i = 0; i < products.length; i++){
        if(products[i].name.includes(filter)){
            text += `<tr>
                        <td>${i+1}</td>
                        <td>${products[i].name.replace(filter,`<span>${filter}</span>`)}</td>
                        <td>${products[i].category}</td>
                        <td>${products[i].price}</td>
                        <td>${products[i].amount}</td>
                        <td>${products[i].discription}</td>
                        <td><button class="btn btn-warning" onclick ="update_product(${i})">Update</button></td>
                        <td><button class="btn btn-danger" onclick ="delete_product(${i})">Delete</button></td>
                    </tr>`;
        }
    }
    tbody.innerHTML = text;
});

clearBtn.addEventListener("click", clear_fields);