// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

const sortA = document.querySelector("#asc")
const sortD = document.querySelector("#des")

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

// sortA.addEventListener('click', sortAscending)
// sortD.addEventListener('click', sortDescending)



// function sortAscending() {
//     var collection = Array.from( document.querySelectorAll('.collection-item'))
//     collection.sort()
//     collection.forEach((member) => console.log(member.textContent))
//     // console.log(collection.sort())
// }

// function sortDescending() {

// }


// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);

    taskInput.value = ''

}

// Clear Task Function definition 
function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';

    //  Second Wy 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}


// Filter tasks function definition 
function filterTasks(e) {

    var searchInput = document.getElementById('filter').value
    // console.log(searchInput)
    var collection = document.querySelectorAll('.collection-item')
    var collectionLength = document.querySelectorAll('.collection-item').length

    let collectionArray = []

    for (const [index, item] of collection.entries()) {
        // console.log(index, item.textContent)
        collectionArray[index] = item.textContent
    }

    // for (let i = 0; i < collectionLength; i++) {
    //     if (collectionArray[i] == searchInput) {
    //         // console.log("Found")
    //         collection[i].style.display = 'block'
    //         collection[i].style.transition = "all .3s ease-in-out"
    //         collection[i].style.background = '#b4b4b4'
    //         setTimeout(() => collection[i].style.background = 'white', 1000)
    //         return
    //     }
    // }

    var index = 0
    while (index < collectionLength) {
        // console.log(collection[index].textContent)
        if (searchInput == '') {
            collection[index].display = 'block'
        } else if (searchInput != collection[index].textContent) {
            console.log(`Not found on index ${index}`)
            collection[index].style.display = 'none'
        } else console.log(`Found on index ${index}`)
        index++
    }
}

// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}