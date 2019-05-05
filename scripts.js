const input = document.querySelector('.todo__form-input');
const form = document.querySelector('.todo__form');
const btn = document.querySelector('.todo__form-btn');
const list = document.querySelector('.todo__list');
//const remove = docume.querySelector('.todo__list-remove');


function addTask (e){
    e.preventDefault();
    let task = input.value;
    if(task !==''){
        
        task = input.value;
        displayTask(task);
        clearInput();
    }
    
};

function clearInput(){
    input.value='';
}
function displayTask(task){
    list.insertAdjacentHTML('beforeend',`<li class="todo__list-item">${task}<span class="todo__list-remove">X</span></li>`);
}
function removeItem(e){
    if(e.target && e.target.nodeName == "SPAN") {
        e.target.closest('.todo__list-item').remove();
    }
}

form.addEventListener('submit',addTask);
list.addEventListener('click',removeItem);


