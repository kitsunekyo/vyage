<?php 
include('./lib/partials/head.php');
$creatorID = $_SESSION["userId"];
$pathName = $_SERVER['REQUEST_URI'];
?>

<div class="dashboard">
    <?php include('./lib/partials/sidebar.php') ?>
    <div class="main">
        <secion class="search">
            <input type="text" class="form-control category-search" placeholder="Search Posts">
        </secion>
        <section class="category-filter">
            <h3 class="category-title">Travel categories</h3>
            <nav class="category-nav">
                <!-- render category nav here -->
            </nav>
            <button class="button category-nav__clear">Clear Filter</button>
        </section>
        <section class="posts">
            <div id="posts-grid"></div>
        </section>
    </div>
</div>
<div class="overlay"></div>
<div class="modal" data-modal="create-post" style="padding: 1rem;">
    <h2>Create new Post</h2>
    <form id="createPostForm">
        <input type="hidden" name="creatorID" value="<?= $creatorID ?>">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" name="title">
        </div>
        <div class="form-group">
            <label for="country">Country</label>
            <select name="country" class="form-control">
                <option value disabled selected>Select country</option>
            </select>
        </div>
        <div class="form-group">
            <label for="categoryID">Category</label>
            <select name="categoryID" class="form-control">
                <option value disabled selected>Select category</option>
            </select>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" class="form-control"></textarea>
        </div>
        <input type="file" name="coverImg">
        <input type="file" name="images[]" multiple>
        <div class="form-group" style="margin-top: 2rem;">
            <input type="submit" value="Send" class="button">
        </div>
    </form>
</div>

<script src="/js/dashboard.js" type="module"></script>
<?php include('./lib/partials/footer.php');