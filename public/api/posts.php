<?php
require_once('./../../app/db/db.php');

session_start();
header('Content-Type: application/json');
$method = $_SERVER["REQUEST_METHOD"];
$uploadDir = '/uploads/';

switch ($method) {
    // get posts endpoint
    case 'GET':
        $db = getDb();

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
    
    // create post endpoint
    case 'POST': 
        if(!isCreateNewPostRequestValid(["post" => $_POST, "files" => $_FILES])) {
            http_response_code(400);
            break;
        }

        $post = [
            "postID" => uniqid(),
            "creatorID" => intval($_POST["creatorID"]),
            "title" => $_POST["title"],
            "country" => $_POST["country"],
            "categoryID" => intval($_POST["categoryID"]),
            "description" => $_POST["description"],
        ];

        $coverImg = uploadFile($_FILES["coverImg"], $uploadDir);
        if (!$coverImg) {
            http_response_code(400);
            echo json_encode(["error" => "coverImg size too large"]);
            break;
        }
        $post["coverImg"] = $coverImg;

        $db = getDb();
        array_push($db["posts"], $post);
        writeDb($db);

        http_response_code(201);
        echo json_encode($post);

        break;
}

/**
 * uploads file and gets upload path
 * returns false on error
 */
function uploadFile($file, $uploadDir) {
    $max_file_size_kb = 1000000;
    $allowed_file_types = ["image/png", "image/jpeg", "image/gif", "image/bmp"];

    if ($file["size"] > $max_file_size_kb) return false;
    if (!in_array($file["type"], $allowed_file_types)) return false;

    $name = uniqid() . '.' . pathinfo($file["name"], PATHINFO_EXTENSION);
    $relativePath = $uploadDir . $name;
    $rootPath = dirname(__FILE__, 2);
    $path = $rootPath . $relativePath;
    move_uploaded_file($file["tmp_name"], $path);

    return $relativePath;
}

function isCreateNewPostRequestValid($request) {
    if (!$request["post"]["title"]) return false;
    if (!$request["post"]["description"]) return false;
    if (!$request["post"]["creatorID"]) return false;
    if (!$request["files"]["coverImg"]) return false;

    return true;
}
