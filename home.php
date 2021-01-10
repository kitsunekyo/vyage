<?php 
include('./lib/partials/head.php');
$pathName = $_SERVER['REQUEST_URI'];
?>

<div class="dashboard">
    <?php include('./lib/partials/sidebar.php') ?>
    <div class="main">
        <secion class="search">
            <input type="text" class="form-control" placeholder="Search Posts">
        </secion>
        <section class="category-filter">
            <h3 class="category-title">Travel categories</h3>
            <nav class="category-nav">
                <!-- render category nav here -->
            </nav>
        </section>
        <section class="posts">
            <div id="posts-grid"></div>
        </section>
    </div>
</div>
<div class="overlay"></div>
<div class="modal" data-modal="create-post">
    create post
</div>

<script src="/js/dashboard.js" type="module"></script>
<?php include('./lib/partials/footer.php');