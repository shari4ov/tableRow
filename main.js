let inputFirm =document.querySelector('#firm');
let inputModel =document.querySelector('#model');
let inputColor = document.querySelector('#color');
const tbodyEl = document.querySelector('tbody');
const formEl = document.querySelector('form');
const tableEl = document.querySelector('table');
let products = [
       {firm:"Apple",model:"Iphone 8",color:'red'},
       {firm:'Samsung',model:"S21",color:'black'},
       {firm:"Nokia",model:"E33",color:"yellow"},
       {firm:"Honda",model:"Civic",color:"Green"}
]
function resetField(){
       document.querySelector('tbody').innerHTML = '';
};
function showProductsTable(products){
       resetField();
       products.map((product,index)=>{
              let rmvBtn;
              let row = document.createElement('tr');
              row.classList.add('products');
              row.innerHTML = `<td>${index}</td>`
              for([key,value] of Object.entries(product)){  
                     let td = document.createElement('td');
                     rmvBtn =document.createElement('td');
                     td.innerHTML = value;
                     rmvBtn.innerHTML=`<button class='remove-btn' data-id='${index}'>Remove</button>`
                     row.appendChild(td);
              } 
              row.appendChild(rmvBtn)
              document.querySelector('tbody').appendChild(row);
       })
}
showProductsTable(products);
formEl.addEventListener('submit',function(e){
       e.preventDefault();
       let productsArr ={firm: inputFirm.value,model:inputModel.value,color:inputColor.value};
       products.push(productsArr);
       resetField();
       showProductsTable(products);
});
tableEl.addEventListener('click',function(e){
       if(!e.target.classList.contains('remove-btn')){
              return;
       }
       const btn = e.target;
       console.log(btn)
       let id = Number(btn.dataset.id);
       products=products.filter(product => products.indexOf(product)!==id); 
       btn.closest('tr').remove();
       showProductsTable(products);
})

