<?php
require_once('./../../app/db/db.php');
session_start();
header('Content-Type: application/json');

$method = $_SERVER["REQUEST_METHOD"];

switch($method) {
    case 'GET':
        $db = getDb();
        echo json_encode($db["users"]);
        break;
}