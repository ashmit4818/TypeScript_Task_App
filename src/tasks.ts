const  taskForm = document.querySelector<HTMLFormElement>('.form');

const formInput = document.querySelector<HTMLInputElement>('.form-input');

const tasklistelement = document.querySelector<HTMLUListElement>('.list');

//type assertion for Task Object
type Task = {
    description : string;
    isCompleted: boolean;
}

//load already saved tasks from localstorage in tasks []
function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

//without saved session in localStorage
//const tasks: Task[] = [];
//use local storage to save tasks 
const tasks: Task[] = loadTasks();

//render already saved tasks on localStorage
tasks.forEach(renderTask);

//submitEvent is an webAPI interface
function createTask(event: SubmitEvent){

    event.preventDefault();
    const taskdescription = formInput?.value;

    //if some description exist
    if(taskdescription){

        const task: Task = {
            description: taskdescription,
            isCompleted: false,
        };

        addTask(task);

        renderTask(task);

        updateStorage()

        formInput.value = "";
        return;

    }
    //else
    alert('Please enter a task')
}

function addTask(task: Task): void {
    tasks.push(task);
}

function renderTask(task: Task): void {
    // Create a list item for the task
    const taskElement = document.createElement('li');
    taskElement.classList.add('task-item'); // Add a class for styling

    // Create a span for the task description (for styling control)
    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    taskDescription.classList.add('task-desc');

    // Create checkbox
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.isCompleted;

    // Handle task completion toggle
    taskCheckbox.addEventListener('change', () => {
        task.isCompleted = !task.isCompleted;
        updateStorage();
    });

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deletebtn');

    // Handle delete button click
    deleteButton.addEventListener('click', () => {
        deleteTask(task, taskElement);
    });

    // Append description, checkbox, and delete button to the task element
    taskElement.appendChild(taskDescription);
    taskElement.appendChild(taskCheckbox);
    taskElement.appendChild(deleteButton);

    tasklistelement?.appendChild(taskElement);



    // //add task description
    // const taskElement = document.createElement('li');
    // taskElement.textContent = task.description;
    
    // //add checkbox
    // const taskCheckbox = document.createElement('input');
    // taskCheckbox.type = 'checkbox';
    // taskCheckbox.checked = task.isCompleted;
    
    // //toggle checkbox
    // taskCheckbox.addEventListener('change', () => {
    //     task.isCompleted = !task.isCompleted;
    //     updateStorage();
    // });

    // // Create delete button
    // const deleteButton = document.createElement('button');
    // deleteButton.textContent = 'Delete';
    // deleteButton.style.border = 'none';
    // deleteButton.style.padding = '0.2rem 0.6rem';
    // deleteButton.style.cursor = 'pointer';
    // deleteButton.classList.add('deletebtn');

    // // Handle delete button click
    // deleteButton.addEventListener('click', () => {
    //     deleteTask(task, taskElement);
    // });

    
    // taskElement.appendChild(taskCheckbox);
    // taskElement.appendChild(deleteButton);

    // tasklistelement?.appendChild(taskElement);
}

function deleteTask(task: Task, taskElement: HTMLLIElement): void {
    // Remove the task from the array
    const taskIndex = tasks.indexOf(task);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
    }

    // Remove the task from the DOM
    taskElement.remove();

    // Update localStorage
    updateStorage();
}

function updateStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// can use if statement on taskform to check existence
taskForm?.addEventListener('submit', createTask )
