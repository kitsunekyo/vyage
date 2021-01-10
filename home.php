<?php 
include('./app/partials/head.php');
$pathName = $_SERVER['REQUEST_URI'];
?>

<div class="dashboard">
    <?php include('./app/partials/sidebar.php') ?>
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

<script src="/js/dashboard.js" type="module"></script>
<?php include('./app/partials/footer.php');