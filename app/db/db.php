<?php
$file = dirname(__FILE__) . "/db.json";

function getDb() {
    try {
        global $file;
        $data = file_get_contents($file);
        $json = json_decode($data, true);
        return $json;
    } catch (Exception $e) {
        return ["users" => [], "posts" => []];
    }
}

function writeDb($db) {
    global $file;
    file_put_contents($file, json_encode($db, JSON_PRETTY_PRINT));
}