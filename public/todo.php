<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Default Page</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <link href="main.css?v=<? echo time() ?>" rel="stylesheet">

</head>
<body>
<br>
<br>
<br>

<div class="my-wrapper-container-todo my-wrapper-container-todo-add">
    <form>
        <h1>ToDos</h1>
        <br>
        <br>
        <br>
        <label for="title">Title</label>
        <input id="title">
        <br>

        <label for="desc">Description</label>
        <input id="desc">
        <br>
        <button onclick="addTodo()" class="my-button" type="button" id="submit_form">Add !</button>
    </form>

</div>
<div class="my-wrapper-container-todo my-wrapper-container-table ">
    <div class="table" id="todos_table">
    </div>
</div>
<script src="/main.js?v=<? echo time() ?>"></script>
</body>
</html>
