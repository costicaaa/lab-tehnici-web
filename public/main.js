window.onload = () => {
    listTodos();
};

window.FETCH_URL = 'requests.php';

function listTodos() {
    fetch(FETCH_URL)
        .then((response) => response.json()) // Transform the data into json
        .then((data) => {
            let table_contents = '';
            for (let todo of data) {
                table_contents +=
                    `
                        <tr>
                            <td>${todo.id}</td>
                            <td>${todo.title}</td>
                            <td>${todo.desc}</td>
                    `;
                if(todo.status === 1)
                {
                    table_contents += `<td><i  class="fas fa-award"></i></td>`
                }
                else
                {
                    table_contents += `<td><i onclick="completeTodo(${todo.id})" class="fas fa-angry"></i></td>`;
                }

                table_contents += `<td><i onclick="deleteTodo(${todo.id})"  class="fas fa-times"></i></td>`;
                table_contents +=  `</tr>`;
            }
            setTableData("todos_table", table_contents);
        })
        .catch((error) => {
            console.log(error);
            alert("Trying nasty stuff, huh ?");
        });
}

function setTableData(element_id, content) {
    let $TABLE_HEADER = `<table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>`;

    let $TABLE_FOOTER = `</tbody>
        </table>
    </div>`;

    document.getElementById(element_id).innerHTML = $TABLE_HEADER + content + $TABLE_FOOTER;
}

function addTodo(){
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    if(title.trim() === "")
    {
        alert("Title is required");
        return;
    }

    let data = {
        title: title,
        desc: desc
    };

    fetch(FETCH_URL, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

    })
        .then((response) => response.json()) // Transform the data into json
        .then((data) => {
            alert("Todo saved! ");
            listTodos();
        })
        .catch((error) => {
            console.log(error);
            alert("Trying nasty stuff, huh ?");
        });

}

function completeTodo(id){
    let data = {
        todo_id: id,
    };

    fetch(FETCH_URL, {
        method: "put",
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

    })
        .then((response) => response.json()) // Transform the data into json
        .then((data) => {
            alert("Status updated ! ");
            listTodos();
        })
        .catch((error) => {
            console.log(error);
            alert("Trying nasty stuff, huh ?");
        });
}

function deleteTodo(id){
    let data = {
        todo_id: id,
    };

    fetch(FETCH_URL, {
        method: "DELETE", // fun stuff, works with DELETE but not delete !
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

    })
        .then((response) => response.json()) // Transform the data into json
        .then((data) => {
            alert("Todo Deleted ! ");
            listTodos();
        })
        .catch((error) => {
            console.log(error);
            alert("Trying nasty stuff, huh ?");
        });
}