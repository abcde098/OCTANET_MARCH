var inputbox = document.getElementById("input");
var listitems = document.querySelector(".additems");

function add() {
    var text = inputbox.value;
    if (text === '') {
        alert("Please Enter the text");
    } else {
        var list = document.createElement("li");
        list.innerHTML = text + "<button class= and onclick='deletes(event)'>X</button> <hr>";
        listitems.appendChild(list);
        inputbox.value = ''; 
        saveData();
        
    }
}
function deletes(event)
{
    event.target.parentElement.remove();
    saveData();
}
function saveData()
{
    localStorage.setItem("data", listitems.innerHTML);
}
function showtask(){
    listitems.innerHTML = localStorage.getItem("data");
}


showtask();