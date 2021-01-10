<?php include('./lib/partials/head.php'); ?>

<div class="bg-landing"></div>
<header class="header">
    <a class="logo" href="/">V</a>
    <nav class="nav">
        <a href="" class="nav__link">About</a>

        <?php if (!isset($_SESSION["userId"])) : ?>
            <button class="button" data-modal-open="login">Login / Join</button>
        <?php else : ?>
            <button class="button" id="logout">Logout</button>
        <?php endif; ?>
    </nav>
</header>
<main class="main">
    <h1 class="hero-title">Collect your <em>travels</em> to inspire and be <em>inspired</em></h1>
    <section>
        <div class="polaroid-grid" id="landingpage-polaroid-grid">
            <!-- render polaroid grid here via JS -->
        </div>
    </section>
</main>
<div class="overlay"></div>
<div class="modal" data-modal="login">
    <div class="tabs">
        <div class="tabs__header">
            <a href="#" class="tab__header-link" data-tab-link="login">Login</a>
            <a href="#" class="tab__header-link" data-tab-link="join">Join</a>
        </div>
        <div class="tabs__container">
            <div class="tab login" data-tab="login">
                <h2>Welcome to <em>Voyage</em></h2>
                <form id="loginForm" action="/auth/login.php" method="POST">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" required placeholder="Username" class="form-control" value="mandy1">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" required placeholder="Password" class="form-control" value="1234">
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Login" class="button">
                    </div>
                </form>
            </div>
            <div class="tab" style="display: none;" data-tab="join">
                signup
            </div>
        </div>
    </div>
</div>

<script src="js/landingpage.js" type="module"></script>
<?php include('./lib/partials/footer.php');
