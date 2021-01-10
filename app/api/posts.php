<?php
require_once('./../db/db.php');
session_start();
header('Content-Type: application/json');

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case 'GET':
        $db = db();

        $posts = array_map(function ($post) use ($db) {
            $mappedPost = [
                "postID" => $post["postID"],
                "creatorID" => $post["creatorID"],
                "title" => $post["title"],
                "coverImg" => $post["coverImg"],
                "images" => $post["images"],
                "albumID" => $post["albumID"],
                "country" => $post["country"],
                "categoryID" => $post["categoryID"],
                "description" => $post["description"],
                "user" => null
            ];

            $user = null;
            foreach ($db["users"] as $u) {
                if ($u["id"] == $post["creatorID"]) {
                    $user = $u;
                    break;
                }
            }

            if ($user) {
                $mappedPost["user"] = [
                    "username" => $user["username"],
                    "email" => $user["email"],
                    "profilePic" => $user["profilePic"]
                ];
            }
            return $mappedPost;
        }, $db["posts"]);

        echo json_encode($posts);
        break;
}
