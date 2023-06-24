var produnct_Name=document.getElementById("productname");
var produnct_price=document.getElementById("productprice");
var produnct_Category=document.getElementById("productcategory");
var add_button=document.getElementById("ADD")
var update_button=document.getElementById("update")
//
var array_product
var data=document.getElementById("data")
if(localStorage.getItem('products')!=null){
    array_product=JSON.parse(localStorage.getItem('products'))
    displayproduct(array_product)
}
else{
    array_product=[];
}
//
function onclick_add(){
    if(produnct_Name.value=="" || produnct_price.value=="" || produnct_Category.value=="" ){
        alert("Erro enter a all  inputs")
    }
    else{
    var product={
        Name:produnct_Name.value,
        Price:produnct_price.value,
        categorty:produnct_Category.value
    };
    array_product.push(product)
    localStorage.setItem('products',JSON.stringify(array_product))
    displayproduct(array_product)

}
}
function displayproduct(array_product){
    var size=array_product.length
    var values=``
    for(i=0;i<size;i++){
    values+=`
    <tr>
    <td> ${i}</td>
    <td> ${array_product[i].Name}</td>
    <td> ${array_product[i].Price}</td>
    <td> ${array_product[i].categorty}</td>
    <td>         <button type="submit" onclick="onclick_update(${i});" class="up">update</button> </td>
    <td>         <button type="submit" onclick="onclick_delete(${i});" class="del">delete</button> </td>
    </tr>
    `
    }
    data.innerHTML=values
}

function onclick_update(index){
    produnct_Name.value=array_product[index].Name
    produnct_price.value=array_product[index].Price
    produnct_Category.value=array_product[index].categorty
    array_product.splice(index,1)
    localStorage.setItem('products',JSON.stringify(array_product))
    add_button.style.display='none'
    update_button.style.display='inline-block'
}
function update_data(){
    onclick_add();
}
function onclick_delete(index){
    array_product.splice(index,1)
    localStorage.setItem('products',JSON.stringify(array_product))
    data.innerHTML=""
    displayproduct(array_product)   
}
function onclick_reset(){
    produnct_Name.value=""
    produnct_price.value=""
    produnct_Category.value=""
}