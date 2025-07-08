import '../styles/style.css'
import getSideBar from '../components/sidebar.js'
import CreateProjectsList from '../components/projectsList.js';

export default class UIManager{
    constructor(){
        this.container = document.createElement("div");
        this.container.id = "container";

        let side_bar = getSideBar();
        side_bar.id = "sidebar";

        let main_content_div = document.createElement("div");
        main_content_div.innerHTML = "I am the main content area";
        main_content_div.id = "main-content";

        let overlay_div = document.createElement("div");
        overlay_div.innerHTML = "I am the overlay div";
        overlay_div.id = "overlay-div";

        let notification_div = document.createElement("div");
        notification_div.innerHTML = "I am the notification bar";
        notification_div.id = "notification-div";


        this.container.append(
            side_bar,
            main_content_div,
            overlay_div,
            notification_div
        );

        
    }

    renderPage(){
        document.body.appendChild(this.container);
    }
    renderSideBar(){

    }

    renderMainContent(content){

    }

    unsetActiveProject(project){
        let projectsDOMList = document.getElementById('projects-list');
        let projectItemInSideBar = projectsDOMList.getElementById('projects_list_item_' + project.id);
        if (projectItemInSideBar === null){
            return;
        }
        projectItemInSideBar.classList.Remove('active'); 
    }

    setActiveProject(activeProject, lastActiveProject){
        if (lastActiveProject != null){
            this.unsetActiveProject(lastActiveProject);
        }
        let projectsDOMList = document.getElementById('projects_list');
        let idOfActiveProject = '#projects_list_item_' + activeProject.id;
        let projectItemInSideBar = projectsDOMList.querySelector(idOfActiveProject);
        projectItemInSideBar.classList.add('active');
        this.loadTasksForProject(activeProject);
    }

    loadTasksForProject(project){
        return null;       
    }

    loadProjects(projectsList){
        let projects_list = CreateProjectsList(projectsList);
        let sidebar = this.container.querySelector('#sidebar');
        sidebar.appendChild(projects_list);
    }
}