// cart calculation
// function cal(){
//     let priceelement=document.getElementById('price');
//     let quantityelement=document.getElementById('quantity');
//     let totalelement=document.getElementById('amount');

//     let price=priceelement.innerText,
//     quantity=quantityelement.value;
    
//      total=(price*quantity);
//      totalelement.innerText=total;
// }

// let triggerelement=document.getElementById('trigger');
// triggerelement.addEventListener('click',cal);

function calculation(){

    let price,quantity,amount,

    rowelement=this.parentNode.parentNode,

    priceelement=rowelement.getElementsByClassName("price")[0],
    quantityelement=rowelement.getElementsByClassName("quantity")[0],
    amountelement=rowelement.getElementsByClassName("amount")[0];

    price=priceelement.innerText;
    quantity=quantityelement.value;
    price=parseInt(price);

    amount=(price*quantity);
    amountelement.innerHTML=amount;
}

let triggerelement=document.getElementsByClassName('trigger');
console.log(triggerelement);

for(i=0;i<triggerelement.length;i++){
    triggerelement[i].addEventListener('click',calculation);
    console.log(triggerelement[i]);
}