
const taskDOM = document.querySelector('.tasks');
const loadingDOM = document.querySelector('.loading-text');
const formDOM = document.querySelector('.task-form');
const formAlertDOM = document.querySelector('.form-alert')
const taskInputDOM = document.querySelector('.task-input');

const showTasks = async() => {
    loadingDOM.style.visibility = 'visible';
    try{
        loadingDOM.innerHTML=`<h1>searching</h1>`;
        const {
            data :{tasks},
        } = await axios.get('/api/v1/tasks')
        loadingDOM.innerHTML=`<h1>searched</h1>`;
        
        if(tasks.length<1){
            taskDOM.innerHTML= '<h5 class="empty list">NO TASKS FOUND</h5>'
            loadingDOM.style.visibility='hidden';
            return;
        } 
        const allTasks = tasks.map((task)=>{
            const{completed, _id: taskID, name} = task;
            return `<div class="single-task" ${completed && 'task-completed'}"> 
            <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
            <div class="task-links">
            <a href="task.html?id=${taskID} class="edit-link">
            <i class="fas fa-edit"></i>
            </a>
            <button type="button" class="delete-btn" data-id="${taskID}">
            <i class="fas fa-trash"></i>
            </button>
            </div>
            </div>
            `
        }).join('')
        taskDOM.innerHTML= allTasks;
    }catch(err){
        taskDOM.innerHTML=`<h5 class="empty-list">THERE WAS AN ERROR</h5>`
    }
    loadingDOM.style.visibility='hidden';
}

taskDOM.addEventListener('click', async(e)=>{
    const el = e.target;
    if(el.parentElement.classList.contains('delete-btn')){
        loadingDOM.style.visibility='visible';
        const id = el.parentElement.dataset.id;
        try{
            await axios.delete(`/api/v1/tasks/${id}`);
            showTasks();
        }catch(err){
            console.log(err);
        }
    }
    loadingDOM.style.visibility='hidden';
})


formDOM.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const name = taskInputDOM.value;
    try{
        await axios.post(`/api/v1/tasks`, {name});
        taskInputDOM.value = '';
        showTasks();
        formAlertDOM.style="block";
        formAlertDOM.value="SUCCESS";
        formAlertDOM.classList.add('text-success');
    }catch(err){
        console.log(err);
        formAlertDOM.style="block";
        formAlertDOM.value="ERROR";
    }
    setTimeout(()=>{
        formAlertDOM.style.display="none";
        formAlertDOM.classList.remove('text-success');
    }, 3000)
})
  showTasks();

