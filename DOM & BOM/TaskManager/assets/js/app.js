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
filter.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase();
    const listItems = taskList.getElementsByTagName('li');
    Array.from(listItems).forEach((listItem) => {
        const listItemTextContext = listItem.textContent;
        if (listItemTextContext.toLowerCase().indexOf(searchInput) != -1) {
            listItem.style.display = 'block';
        } else listItem.style.display = 'none';
    })
});

// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

// Sorting
sortA.addEventListener('click', sortAscending)
sortD.addEventListener('click', sortDescending)

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
    const date = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    date.className = "date"
    date.innerHTML = new Date()
    // Append link to li
    li.appendChild(link);
    li.appendChild(date)
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

function sortAscending() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("c");
    switching = true;
    while (switching) {
        switching = false;
        b = list.getElementsByTagName("LI");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;

            if (b[i].lastChild.textContent.toLowerCase() > b[i + 1].lastChild.textContent.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}

function sortDescending() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("c");
    switching = true;
    while (switching) {
        switching = false;
        b = list.getElementsByTagName("LI");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;

            if (b[i].lastChild.textContent.toLowerCase() < b[i + 1].lastChild.textContent.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
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