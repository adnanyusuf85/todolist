function getEmptyProjectView(){
    let container = document.createElement("div");
    let message = document.createElement("p");
    message.innerText = "No tasks in this project";
    container.appendChild(message);
    return container;
}