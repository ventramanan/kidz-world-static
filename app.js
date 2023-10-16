var bt=document.querySelectorAll(".button")
var cart=document.getElementById("cart")
var value= document.getElementById("cart-value")
var product=document.querySelectorAll("h3")
var p=document.querySelectorAll("div p")
var data=[];
var bill=0
var total=0
function showItems(e){
    let name = product[e].textContent
    let cost = parseFloat(p[e].textContent.replace("$",""))
    let present = data.find((item) => item.name === name)
    if(present){
        present.quantity += 1
    }
    else{
        data.push({name,cost,quantity:1})
    }
    bill += cost
    total += 1
    value.innerHTML = total

}

cart.onclick = () =>{
    for (let i = 0; i < data.length; i++){
        console.log("Item name",data[i].name,"Quantity",data[i].quantity)
    }

    let dollar = Math.floor(bill)
    console.log(`The total bill amount is ${dollar} dollars`)
}