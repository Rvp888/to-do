
let todoArray = [];
todoArray = JSON.parse(localStorage.getItem("todo")) || [];
displayTodo();


/*======================= To Add To-do-items ===============================================================================================*/


document.getElementById("add-Btn").addEventListener("click", () => {

    todoArray.push({
        id: new Date(),
        text: document.getElementById("to-do-input").value
    })

    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();

    document.getElementById("to-do-input").value = "";
  
})



/*======================= To Display To-do-items ===============================================================================================*/

function displayTodo(){
    document.getElementById("to-do-list").innerHTML = "";
    todoArray.forEach((todo) => {
        document.getElementById("to-do-list").innerHTML += `<li id="${todo.id}">${todo.text}<button id="remove-Btn">Remove</button></li>`;
    })
}


/*======================= To Delete To-do-item ===============================================================================================*/

document.getElementById("to-do-list").addEventListener("click", (e) => {
    if(e.target.id == "remove-Btn"){
        let item = e.target.parentElement;
        item.remove();
        todoArray.forEach((todo,index)=>{
            if(todo.id == item.id){
                todoArray.splice(index,1);
            }
        })
    }
    localStorage.setItem("todo", JSON.stringify(todoArray));
})

