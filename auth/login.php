<?php
require_once('./../lib/db/db.php');
session_start();

$method = $_SERVER["REQUEST_METHOD"];

switch($method) {
    case 'POST':
        if (!isRequestValid(($_POST))) {
            header("Location: /?error=1");
        }

        $db = db();

        $user = array_filter($db["users"], function ($v, $k) {
            return $v["username"] == $_POST["username"] && $v["password"] == $_POST["password"];
        }, ARRAY_FILTER_USE_BOTH);

        if (!$user[0]) {
            header("Location: /?error=2");
        }

        $_SESSION["username"] = $user[0]["username"];
        $_SESSION["userId"] = $user[0]["id"];
        header("Location: /home.php");

        break;
    default:
        header("Location: /");
        break;
}



function isRequestValid($req) {
    if (!isset($req["username"]) || !isset($req["password"])) {
        return false;
    }
    return true;
}