window.addEventListener('load', ()=>{
    // Selecting Elements
    const form=document.querySelector("#add");
    const input=document.querySelector("#newtaskinput");
    const listElements= document.querySelector("#tasks");

// Adding Event for form submission

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const newTask=input.value;

// Just checking if the add button works


    if(!newTask){
        alert("Please Enter Something");
        return;
    }

// Creating a new Task as new div with input and delete button

    const taskElement=document.createElement("div");
    taskElement.classList.add("task");

    const taskContent=document.createElement("div");
    taskContent.classList.add("content")

    taskElement.appendChild(taskContent);

    const taskInput=document.createElement('input');
    taskInput.classList.add('tasktext');
    taskInput.type='text'; 
    taskInput.value=newTask;
    taskInput.setAttribute("readonly", "true");

    taskContent.appendChild(taskInput);

    const action=document.createElement("div");
    action.classList.add("actions");

    const deleteButton=document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML="Delete";

    action.appendChild(deleteButton);

    taskElement.appendChild(action);

    listElements.appendChild(taskElement);

    input.value="";

// working of Delete button

    deleteButton.addEventListener('click', ()=> {
        listElements.removeChild(taskElement);
    });

    //Increasing the font size

taskInput.style.fontSize="1.1rem"

    // Strikethrough Completed Task

    const completedTask=taskInput;
    completedTask.addEventListener('click', ()=>{
        taskInput.style.textDecoration="line-through";
        taskInput.style.textDecorationThickness="2px"
    }
    
        
    )

    completedTask.addEventListener('dblclick', ()=>{
        taskInput.style.textDecoration="none";
    })

// DELETE ALL BUTTON
    const deleteAll=document.querySelector(".deleteAll");
    deleteAll.addEventListener('click', ()=>
    {
        location.reload();
    })








    });


    } );
  
      





