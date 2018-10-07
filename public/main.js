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
                        </tr>
                    `;
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
            listTodos();
        })
        .catch((error) => {
            console.log(error);
            alert("Trying nasty stuff, huh ?");
        });

}

function completeTodo(id){
    console.log(id);
    alert('aaa');
}