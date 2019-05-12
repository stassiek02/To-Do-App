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
       // clearInput();
    }
    e.target.reset();
    
};


function displayTask(task){
    list.insertAdjacentHTML('beforeend',`<li class="todo__list-item">${task}<span class="todo__list-remove">X</span></li>`);
}
function removeItem(e){
    if(e.target && e.target.nodeName == "SPAN") {
        e.target.closest('.todo__list-item').remove();
    }
}
function done(e){
    if(e.target && e.target.nodeName == 'LI'){
        e.target.classList.contains('done') ? e.target.classList.remove('done') : e.target.classList.add('done');
        
    
    }
}


function updateLocalStorage(){
   
}
updateLocalStorage();
console.log(list);

form.addEventListener('submit',addTask);
list.addEventListener('click',removeItem);
list.addEventListener('click',done);


