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

function changeColor(){
    let currentColor=document.getElementById('selectedColorId').value;
    alert(currentColor);
    //let boxColor=box.style.backgroundColor;
    boxToColor.style.backgroundColor=currentColor;


    //let boxColor=document.getElementById('box').style.backgroundColor;
    
   /* if(boxColor == null || boxColor == "white"){
         //document.getElementsByTagName('td').style.backgroundColor=currentColor;
         box.style.backgroundColor=currentColor;
    }
    else()=> {
        //document.getElementsByTagName('td').style.backgroundColor="white";
        box.style.backgroundColor='white';
    }  
    */
    
    //if(boxColor!="white"){
   // document.ge
    //document.getEementById('box').style.backgroundColor=colorChoice;
    
//    let boxColor=getElementById('box').style.backgroundColor;
 //   alert(boxColor);
//} else()=>{
//    clearCell();
//}
}


// Make cell blank
function clearCell(){
    document.getElementById('box').style.backgroundColor="white";
}


//Function to make color change occur on clicking a box
/*document.getElementsByTagName("td").addEventListener("click", (x) => {
    alert("TEST");
    changeColor(x);
    
  });
*/
document.addEventListener("click", changeColor());  


//FIX CLEAR CELL FUNCTION AND HOW IT WORKS WITH CHANGE COLOR FUNCTION