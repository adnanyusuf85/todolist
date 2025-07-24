export default class ToDoAppManager{
    
    #activeProject = null;
    test = 'test';
    constructor(dataManager, uiManager)
    {
        this.dataManager = dataManager;
        this.uiManager = uiManager;
        this.uiManager.onEditFunction = (task) => {
            uiManager.renderEditWindow(task);
            //let projectsList = this.dataManager.getProjectsList();
        }
        this.uiManager.taskSaveCallback = (task) => {
            this.dataManager.saveTask(task);
            this.uiManager.loadTasksForProject(this.#activeProject);
        }
        
    }
    
    init(){
        this.uiManager.renderPage();
        this.projectsList = this.dataManager.getProjectsList();
        this.defaultProject = this.projectsList.find(project => project.title === 'Default');
        if (this.defaultProject == null){
            console.log("No default project found");
            return;
        }
        this.loadProjects(this.projectsList);
        this.setActiveProject(this.defaultProject);
    }

    setActiveProject(project){
        let previousActiveProject = this.#activeProject;
        this.#activeProject = project;
        this.uiManager.setActiveProject(this.#activeProject, previousActiveProject); 
    }

    createNewProject(project){
        this.dataManager.createNewProject(project);
        this.setActiveProject(project.id);
    }

    deleteProject(projectid){
        this.dataManager.deleteProject(projectid);
        this.uiManager.setActiveProject(this.defaultProject);
    }

    loadProjects(projectsList){
        this.uiManager.loadProjects(projectsList);
        let projectsListDOM = this.uiManager.side_bar.querySelectorAll('[id^="projects_list_item"]')
        projectsListDOM.forEach(projectListing => {
            
            projectListing.addEventListener("click", () =>{
                let projectID = projectListing.dataset.id;
                let selectedProject = this.dataManager.getProjectById(projectID);
                this.setActiveProject(selectedProject);
            });
        });
    }

    


}