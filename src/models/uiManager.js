import '../styles/style.css'
import * as taskCardStyle from '../components/taskcard.module.css';

import getSideBar from '../components/sidebar.js'
import CreateProjectsList from '../components/projectsList.js';
import generateTaskCards from '../components/generateTaskCards.js';
import TaskEditor from "../components/taskEditor.js";
import NewTaskMaker from "../components/newTaskMaker.js";

export default class UIManager{
    constructor(){
        this.identifier = "The UI Manager";
        this.container = document.createElement("div");
        this.container.id = "container";

        this.side_bar = getSideBar();
        this.side_bar.id = "sidebar";
        let addTaskButton = this.side_bar.querySelector("#addTaskButton");
        addTaskButton.addEventListener("click", ()=>{
            this.renderNewTaskWindow();
        });

        this.main_content_div = document.createElement("div");
        this.main_content_div.id = "main-content";

        this.overlay_div = document.createElement("div");
        this.overlay_div.id = "focused_overlay";
        this.overlay_div.classList.add('collapsed');

        this.notification_div = document.createElement("div");
        this.notification_div.innerHTML = "I am the notification bar";
        this.notification_div.id = "notification-div";


        this.container.append(
            this.side_bar,
            this.main_content_div,
            this.overlay_div,
            this.notification_div
        );



        var observer = new MutationObserver((mutationRecords) => {
            mutationRecords.forEach(mutationRecord => {
                let target_id = mutationRecord.target.id;
                let removed_nodes = mutationRecord.removedNodes.length;
                if (target_id === 'focused_overlay' && removed_nodes !== 0){
                    this.overlay_div.classList.remove("visible");
                    this.overlay_div.classList.add("collapsed");
                }
            });
        });

        observer.observe(this.overlay_div, {childList:true});

        
    }

    
    renderEditWindow(task){
        this.overlay_div.classList.remove('collapsed');
        this.overlay_div.classList.add('visible');

        let taskEditor = new TaskEditor(task);
        taskEditor.setSaveCallback(this.taskSaveCallback);
        this.overlay_div.appendChild(taskEditor.getDOM());
    }

    onDeleteFunction = () => {
        console.log("deleting");
    }

    onSaveTask = () => {
        console.log("saving...");
        console.log("saved");
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
        let task_cards = generateTaskCards(project, this.onEditFunction, this.onDeleteFunction);
        this.main_content_div.append(task_cards);
    }

    loadProjects(projectsList){
        this.side_bar.appendChild(CreateProjectsList(projectsList));
    }

    getProjectsListDOM(){

 
    }

    renderNewTaskWindow(){
        this.overlay_div.classList.remove('collapsed');
        this.overlay_div.classList.add('visible');
        let taskEditor = new NewTaskMaker();
        this.overlay_div.appendChild(taskEditor.getDOM());
    }
}