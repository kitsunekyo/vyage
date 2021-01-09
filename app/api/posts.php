<?php
require_once('./../db/db.php');
session_start();
header('Content-Type: application/json');

$method = $_SERVER["REQUEST_METHOD"];

switch($method) {
    case 'GET':
        $db = db();
        echo json_encode($db["posts"]);
        break;
}