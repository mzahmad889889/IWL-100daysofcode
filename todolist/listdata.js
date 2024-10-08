const devShow = document.querySelector(".listData");
const submitForm = document.querySelector(".submit");
const popup2 = document.getElementById('popup');
const overlay2 = document.querySelector('.overlay');

function displayStoredTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    devShow.innerHTML = '';

    storedTasks.forEach((task, index) => {
        const newTask = document.createElement('div');
        newTask.classList.add('data');
        const countDiv = document.createElement('div');
        countDiv.classList.add('count');
        const countValue = document.createElement('p');
        countValue.classList.add('countValue');
        countValue.textContent = task.count;
        countDiv.appendChild(countValue);
        const titleElement = document.createElement('h3');
        titleElement.textContent = task.title;
        const descriptionElement = document.createElement('h4');
        descriptionElement.textContent = task.description;
        const image = document.createElement('img');
        image.src = task.img;
        image.width = 30;
        image.height = 30;
        image.style.cursor = "pointer";

        newTask.appendChild(countDiv);
        newTask.appendChild(titleElement);
        newTask.appendChild(descriptionElement);
        newTask.appendChild(image);

        devShow.appendChild(newTask);

        image.addEventListener('click', function () {
            deleteTask(index);
        });
    });
}

// Function to delete a task by index
function deleteTask(index) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    storedTasks.splice(index, 1);

    localStorage.setItem('tasks', JSON.stringify(storedTasks));

    displayStoredTasks();
}

// Event listener for form submission
submitForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('titleValue').value;
    const description = document.getElementById('textareaValue').value;

    if (!title) {
        alert('Please add a title');
        return;
    }

    if (!description) {
        alert('Please add a description');
        return;
    }

    let count = devShow.children.length + 1;
    const img = "assets/delete.png";

    let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    storedTasks.push({
        title: title,
        description: description,
        count: count,
        img: img
    });

    localStorage.setItem('tasks', JSON.stringify(storedTasks));


    displayStoredTasks();

    submitForm.reset();

    popup2.classList.remove('active');
    overlay2.classList.remove('active');

    devShow.classList.add('active');
});


window.addEventListener('load', displayStoredTasks);
