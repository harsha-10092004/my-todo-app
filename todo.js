let obj = [];

function todo() { 
    let input = document.querySelector(".input1").value.trim();
    let input1 = document.querySelector(".input2").value;

    if (input === "") {
        alert("Please enter a task name");
        return;
    }

    obj.push({ name: input, date: input1 });
    document.querySelector(".input1").value = '';
    document.querySelector(".input2").value = '';
    display();
}

function display() {
    let list = '';
    obj.forEach(function(task, i) {
        let html = `
            <div class="task-name">${task.name}</div>
            <div class="task-date">${task.date || '-'}</div>
            <button onclick="deleted(${i})">Delete</button>
        `;
        list += html;
    });
    document.querySelector(".tododiv").innerHTML = list;
}

function deleted(i) {
    obj.splice(i, 1);
    display();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        todo();
    }
});
