<?php

require_once 'db_connect.php';


switch($_SERVER['REQUEST_METHOD'])
{
    case 'GET':{
        $sql = "select * from todos";
        $prep = $pdo->prepare($sql);
        $prep->execute();

        $results = $prep->fetchAll();
        break;
    }
    case 'POST':{
        try{
            $request_body = file_get_contents('php://input');
            $data = json_decode($request_body);

            $sql = 'insert into `todos` (`title`, `desc`) values (:title, :desc)';
            $prep = $pdo->prepare($sql);
            $prep->bindParam(':title', $data->title);
            $prep->bindParam(':desc', $data->desc);
            $prep->execute();
            $results = 1;
        }
        catch(\Exception $e)
        {
            $results = $e->getMessage();
        }
        break;
    }
    default: {
        $results = "NO METHOD WTF";
    }
}

echo json_encode($results);
