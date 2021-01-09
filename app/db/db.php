<?php

function db() {
    $file = dirname(__FILE__) . "/db.json"; 

    try {
        $data = file_get_contents($file);
        $json = json_decode($data, true);
        return $json;
    } catch (Exception $e) {
        return ["users" => [], "posts" => []];
    }
}

