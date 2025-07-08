export default class ToDoAppManager{
    
    #activeProject = null;
    
    constructor(dataManager, uiManager)
    {
        this.dataManager = dataManager;
        this.uiManager = uiManager;
        
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
    }


}