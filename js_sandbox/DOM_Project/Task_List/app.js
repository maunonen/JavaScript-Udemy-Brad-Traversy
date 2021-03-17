// Define UI Vars

const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

/* Load all evevnt listeners */

 loadEventListeners(); 
function  loadEventListeners(){
  /* DOM load event  */
  document.addEventListener('DOMContentLoaded', getTasks); 
  
  /* Add task Event */
  form.addEventListener('submit', addTask ); 

  /* Using delegation of listner  */
  taskList.addEventListener('click', removeTask); 

  /* clear task event  */
  clearBtn.addEventListener('click', clearTasks); 

  /* Filter Task event  */  
  filter.addEventListener('keyup', filterTasks); 

} 

function getTasks() {
  let tasks; 
  if (localStorage.getItem('tasks') === null ) {
    tasks = []; 
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    const li = document.createElement('li'); 
    li.className = 'collection-item';  
    /* Create text Node */
  
    li.appendChild(document.createTextNode(task))
  
    /* Create new element  */
    const link = document.createElement('a'); 
    link.className = 'delete-item secondary-content'; 
    
    /* Add icon html */
    link.innerHTML = '<i class="fa fa-remove"></i>'; 
    
    /* Append the Link */
    li.appendChild(link)
    console.log(li); 
    
    /* Append li to ul  */
    taskList.appendChild(li);
  })

}

function filterTasks(e){
  const text = e.target.value.toLowerCase(); 
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent; 
      if (item.toLocaleLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  ); 
}

function clearTasks (e){
   /* taskList.innerHTML = ''; */

   /* Faster  */

   while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild); 
   }

   clearTaskFromLoaclStrage(); 
}

function clearTaskFromLoaclStrage() {
  localStorage.clear(); 
}

function removeTask (e){
   
  /* targeting a element in ul list */
  if (e.target.parentElement.classList.contains('delete-item')){
    if (confirm('Are you suree')){
      e.target.parentElement.parentElement.remove();

      /* Remove from LS  */
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);

    }
  }
  e.preventDefault();  
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks; 
  if (localStorage.getItem('tasks') === null ) {
    tasks = []; 
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1); 
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask (e){
  if (taskInput.value === ''){
    alert('Add a task')
  }


  const li = document.createElement('li'); 
  li.className = 'collection-item';  
  /* Create text Node */

  li.appendChild(document.createTextNode(taskInput.value))

  /* Create new element  */
  const link = document.createElement('a'); 
  link.className = 'delete-item secondary-content'; 
  
  /* Add icon html */
  link.innerHTML = '<i class="fa fa-remove"></i>'; 
  
  /* Append the Link */
  li.appendChild(link)
  console.log(li); 
  
  /* Append li to ul  */
  taskList.appendChild(li);
  
  /* Store list to  locale storage  */
  storeTaskInLocalStorage(taskInput.value); 
  /* Clear input  */
  taskInput.value = '';
  e.preventDefault()
}

/* Store task  */

function storeTaskInLocalStorage(task) {
  let tasks; 
  if (localStorage.getItem('tasks') === null ) {
    tasks = []; 
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task); 
  localStorage.setItem('tasks', JSON.stringify(tasks)); 
}