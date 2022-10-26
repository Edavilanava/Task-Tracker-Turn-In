const inputVal = document.getElementsByClassName('inputVal')[0]; //declaring and naming the variables

const addTaskBtn = document.getElementsByClassName('btn')[0];


addTaskBtn.addEventListener('click', function (){

if(inputVal.value.trim()!=0){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
        taskList = []

    }else{
        taskList = localItems;
    }
    taskList.push(inputVal.value)
    localStorage.setItem('localItem', JSON.stringify(taskList)); //Where the user's input will be stored (local storage)
}

showItem()
})

function showItem(){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
        taskList = []

    }else{
        taskList = localItems;
    }


let html = '';
let itemShow = document.querySelector('.todoLists');
taskList.forEach((data, index )=> {


html += `
    <div class="todoList">
    <p class="pText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">x</button>
    </div>
    `
})
itemShow.innerHTML = html; //Returns HTML markup from within the JS
}
showItem()

function deleteItem(index){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}

function clearTask(){

localStorage.clear()
showItem()
}
// let inputVal = document.getElementsByClassName('inputVal')[0]
// let addTaskBtn = document.getElementsByClassName('btn')[0]

// addTaskBtn.addEventListener('click', () => {
//     if(inputVal.value.trim() != 0){
//         let localItems = JSON.parse(localStorage.getItem('localItem'))
//         if(localItems === null){
//             taskList = []
//         } else {
//             taskList = localItems;
//         }
//         taskList.push(inputVal.value)
//         localStorage.setItem('localItem', JSON.stringify(taskList))
//     }

//     showlist()
// })

// function showlist(){

//     let outPut = '';
//     let taskListShow = document.querySelector('.todoListItem')
//     let localItems = JSON.parse(localStorage.getItem('localItem'))
//     if(localItems === null){
//         taskList = []
//     } else {
//         taskList = localItems;
//     }
//     taskList.forEach((data, index) => {
//         outPut += `
//         <div class="todolist">
//         <p class="pText">${data}</p>
//         <button class="deleteTask" onClick="deleteItem(${index})">x</button>
//         </div>
//         `
//     });
//     taskListShow.innerHTML = outPut;
// }
// showlist()

// function deleteItem(index){
//     let localItems = JSON.parse(localStorage.getItem('localItem'))
//     taskList.splice(index, 1)
//     localStorage.setItem('localItem', JSON.stringify(taskList))
//     showlist()
// }

// function clearTask(){
//     localStorage.clear()
//     showlist()
// }