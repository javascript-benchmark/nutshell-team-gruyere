const tasksDomPrinter = {
    // method that puts an array of task objects and prints to dom
    printTasksToDom: arrayOfTasks => {

        //loop array of tasks
        document.querySelector("#task-output-container").innerHTML = "";

        arrayOfTasks.forEach(singleTask => {

            document.querySelector("#task-output-container")
            .innerHTML += `<div class="task-card" id="task-card-${singleTask.id}">
            <p>${singleTask.date}</p>
            <p>${singleTask.name}</p>
            <button id="edit-each-${singleTask.id}">Edit</button/>
            <button id= "delete-each-${singleTask.id}">Completed</button>
            </div>`
        });
},
    printTaskEditForm: taskEditObject => {
    document.querySelector(`#task-card-${taskEditObject.id}`).innerHTML =
    `<div>
        <input type="date" id="edit-date-input-${taskEditObject.id}" value="${taskEditObject.date}">
        <input type="text" id="edit-input-${taskEditObject.id}" value="${taskEditObject.name}">

      <button id="submit-edit-${taskEditObject.id}">Save</button>
    </div>`
    }
};
export default tasksDomPrinter;