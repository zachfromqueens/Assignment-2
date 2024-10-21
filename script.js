// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let firstRow=document.querySelector("table");
let firstColumn=document.querySelector("tr");



// Add a row
function addR() {
    let newRow=document.createElement("tr");
   firstRow.appendChild(newRow);
  
  if(numCols==0){
    numCols++;
  }
  for(let i=0;i<numCols;i++){
        let newBox3=document.createElement("td");
        newRow.appendChild(newBox3);
   }
   numRows++;

}

// Add a column
function addC() {
    if(numRows==0){  
        let newBox2=document.createElement("td");
        firstColumn.appendChild(newBox2);
        numRows++;
    }
    else {
        let currentRows=document.querySelectorAll("tr");
        currentRows.forEach((x)=>{
            let newBox5=document.createElement("td");
            x.appendChild(newBox5);
            
        })
                
    }
    numCols++;
}

// Remove a row
function removeR() {
    let removeRow=document.querySelector("table");
    let lastRow=removeRow.lastChild;
    removeRow.removeChild(lastRow);
    numRows--;
    if(numRows==0){
        numCols=0;
    }

    if(numRows<0){
        numRows=0;
    }
}

// Remove a column
function removeC() {
    let removeCols=document.querySelectorAll("tr");
    removeCols.forEach((y)=>{
        let lastBox=y.lastChild;
        y.removeChild(lastBox);
    })
    numCols--;

    if(numCols==0){
    numRows=0;
    }
    
    if(numCols<0){
        numCols=0;
    }
}
   


// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU(){
    let table=document.getElementById('grid');
    let boxes=table.querySelectorAll("td");
    let color=colorSelected;
    boxes.forEach((x)=>{
        let baseColor=x.style.backgroundColor;
        if(baseColor='white'){
          x.style.backgroundColor=color;
        }
    })
}

// Fill all cells
function fillAll(){
    let table=document.getElementById('grid');
    let boxes=table.querySelectorAll("td");
    let color=colorSelected;
    boxes.forEach((x)=>{
        x.style.backgroundColor=color;
    })
}

// Clear all cells
function clearAll(){
    let table=document.getElementById('grid');
    let rows=table.querySelectorAll("td");
    rows.forEach((x)=>{
        x.style.backgroundColor="white";
    })
}

// Color a cell

const theGrid=document.getElementById('grid');
theGrid.addEventListener("click", changeColor);  

function changeColor(event){
    let ele=event.target;
    let currentColor=document.getElementById('selectedColorId').value;
    ele.style.backgroundColor="white";
    let boxColor=ele.style.backgroundColor;
    alert(boxColor);
   // alert(boxColor);
/*    
    if(boxColor === undefined || boxColor == "white"){
        ele.style.backgroundColor=currentColor;
   }
   else()=> {
       
       ele.style.backgroundColor='white';
   }  
       */
       

   if (ele.style.backgroundColor = "white"){
    ele.style.backgroundColor=currentColor;
    alert(currentColor);
   }
   
   else {
    ele.style.backgroundColor='white';
    alert('white');
   }
    

}    
    

// Make cell blank
function clearCell(){
    document.getElementById('box').style.backgroundColor="white";
}







