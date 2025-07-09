import '../styles/style.css'
import getSideBar from '../components/sidebar.js'
import CreateProjectsList from '../components/projectsList.js';
import generateTaskList from '../components/generateTaskList.js';

export default class UIManager{
    constructor(){
        this.container = document.createElement("div");
        this.container.id = "container";

        this.side_bar = getSideBar();
        this.side_bar.id = "sidebar";

        this.main_content_div = document.createElement("div");
        this.main_content_div.id = "main-content";

        this.overlay_div = document.createElement("div");
        this.overlay_div.innerHTML = "I am the overlay div";
        this.overlay_div.id = "overlay-div";

        this.notification_div = document.createElement("div");
        this.notification_div.innerHTML = "I am the notification bar";
        this.notification_div.id = "notification-div";


        this.container.append(
            this.side_bar,
            this.main_content_div,
            this.overlay_div,
            this.notification_div
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
        let projectsDOMList = document.getElementById('projects_list');
        let projectItemInSideBar = projectsDOMList.querySelector('#projects_list_item_' + project.id);
        if (projectItemInSideBar === null){
            return;
        }
        projectItemInSideBar.classList.remove('active'); 
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
        this.main_content_div.innerHTML = "";
        this.main_content_div.append(generateTaskList(project));
    }

    loadProjects(projectsList){
        this.side_bar.appendChild(CreateProjectsList(projectsList));
    }

    getProjectsListDOM(){

    }
}