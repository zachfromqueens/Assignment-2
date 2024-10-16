// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 



// Add a row
function addR() {
   if(numRows=0){
    var table=document.createElement("TABLE");
   } 
   numRows+=1;
}

// Add a column
function addC() {
    numCols+=1;
    alert(numCols);
}

// Remove a row
function removeR() {
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