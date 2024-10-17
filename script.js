// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let firstRow=document.querySelector("table");



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
   numRows+=1;
}

// Add a column
function addC() {
    if(numRows==0){
    let firstColumn=document.querySelector("table");
    let newBox2=document.createElement("td");
    firstColumn.appendChild(newBox2);
    numCols+=1;
    }
    else {
        let newBox5=document.createElement("td");
        let currentRows=document.querySelectorAll("tr");
        currentRows.forEach((x)=>{
            x.appendChild(newBox5);
        })
        /*alert(currentRows.length);
        for (let i=0; i<currentRows.length; i++){
            let x= currentRows[i];
            x.appendChild(newBox5);

        }
        currentRows.appendChild(newBox5);
        alert(numRows);*/
     numCols++;   
    }
    
}

// Functionn to remove a row
function removeR() {
    let removeRow=document.querySelector("table");
    let lastRow=removeRow.lastChild;
    removeRow.removeChild(lastRow);
    numRows-=1;
}

// Remove a column
function removeC() {
   numCols-=1;
   alert(numCols);
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    document.getElementById('box').style.backgroundColor="white";
}

// Color a cell

function changeColor(){
    let currentColor=document.getElementById('selectedColorId').value;
    let boxColor=document.getElementById('box').style.backgroundColor;
    alert(boxColor);
    if(boxColor =null || boxColor == "white"){
         document.getElementById('box').style.backgroundColor=currentColor;
    }
    else()=> {
        document.getElementById('box').style.backgroundColor="white";
    }
    
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

//FIX CLEAR CELL FUNCTION AND HOW IT WORKS WITH CHANGE COLOR FUNCTION