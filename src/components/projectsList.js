import * as style from './common.module.css';
export default function createProjectsList(projects){
    let list = [
        {id:1, title: "test1"},
        {id:2, title: "test2"},
        {id:3, title: "test3"}
    ];
    let project_list_div = document.createElement("div");
    project_list_div.id = "projects_list";

    list.forEach( (item) => {
        let el = document.createElement('p');
        el.classList.add(style.clickable,style.project_in_list);
        el.addEventListener('click',test);
        // let el = document.createElement('a');
        // el.setAttribute("href","");
        el.setAttribute("data-id", item.id);
        el.innerHTML = item.title;
        // para.appendChild(el);
        project_list_div.appendChild(el);
    });

    function test(){
        console.log("It happens");
    }

    return project_list_div;
        
} 