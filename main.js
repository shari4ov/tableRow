// let arr=[2,5,7,9,15];
// let sum = 17;

// for(let i=0;i<arr.length;i++){
//        let ferq=sum-arr[i];
//        if(arr.includes(ferq)){
//               console.log(i,arr.indexOf(ferq));
//        };
// }

let products = document.querySelector('tbody');
let add = document.querySelector('.add');
let idNum = Number(document.querySelector('.moves').textContent);
let inputFirm =document.querySelector('#firm');
let inputModel =document.querySelector('#model');
let inputColor = document.querySelector('#color');

idNum=2;

const addingModel = function(){      
       // creates a table row
       let row = document.createElement("tr");
       row.classList.add('products'); 
       // create a cell of row
       for (var j = 0; j < 4; j++) {
       
       let cell = document.createElement("td");
       let firmName = document.createTextNode(inputFirm.value);
       let modelName = document.createTextNode(inputModel.value);
       let colorName = document.createTextNode(inputColor.value);
       let rows = [String(idNum).padStart(2,'0'),firmName,modelName,colorName];
       
       // insert data into cells
       cell.append(rows[j]);
       row.appendChild(cell);
       
    
  }
       resetField();
       idNum++;
  
  // add the row to the end of the table body
       products.appendChild(row);


       products.appendChild(products);

};
function resetField(){
       inputFirm.value='';
       inputModel.value='';
       inputColor.value='';
};

add.addEventListener('click',function(){
       if(inputFirm.value!=='' && inputModel.value!=='' && inputColor!==''){
       addingModel();}
}
);
