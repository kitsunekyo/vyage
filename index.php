<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Dancing+Script:wght@700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/site.css">
    <title>Voyage</title>
</head>

<body>
    <div class="bg-landing"></div>
    <header class="header">
        <a class="logo" href="/">V</a>
        <nav class="nav">
            <a href="" class="nav__link">About</a>
            <button class="button" data-modal-open="login">Login / Join</button>
        </nav>
    </header>
    <main class="main">
        <h1 class="hero-title">Collect your <em>travels</em> to inspire and be <em>inspired</em></h1>
        <section>
            <div class="polaroid-grid" id="landingpage-polaroid-grid">
                <!-- render polaroid grid here via JS -->


                <div class="polaroid">
                    <div class="polaroid__image">
                        <img src="/img/stock/travel_1.jpg" alt="travel pic">
                    </div>
                    <div class="polaroid__meta">
                        <div class="polaroid__user">
                            <div class="polaroid__avatar">
                                <img src="/img/avatar/person_1.jpg" alt="user-avatar">
                            </div>
                            <div class="polaroid__username">person_1</div>
                        </div>
                        <div class="polaroid__details">
                            <h3>Indonesia</h3>
                            <p>Some Post Title</p>
                        </div>
                    </div>
                </div>


                
                <div class="polaroid">
                    <div class="polaroid__image">
                        <img src="/img/stock/travel_1.jpg" alt="travel pic">
                    </div>
                    <div class="polaroid__meta">
                        <div class="polaroid__user">
                            <div class="polaroid__avatar">
                                <img src="/img/avatar/person_1.jpg" alt="user-avatar">
                            </div>
                            <div class="polaroid__username">person_1</div>
                        </div>
                        <div class="polaroid__details">
                            <h3>Indonesia</h3>
                            <p>Some Post Title</p>
                        </div>
                    </div>
                </div>
                <div class="polaroid">
                    <div class="polaroid__image">
                        <img src="/img/stock/travel_1.jpg" alt="travel pic">
                    </div>
                    <div class="polaroid__meta">
                        <div class="polaroid__user">
                            <div class="polaroid__avatar">
                                <img src="/img/avatar/person_1.jpg" alt="user-avatar">
                            </div>
                            <div class="polaroid__username">person_1</div>
                        </div>
                        <div class="polaroid__details">
                            <h3>Indonesia</h3>
                            <p>Some Post Title</p>
                        </div>
                    </div>
                </div>
                <div class="polaroid">
                    <div class="polaroid__image">
                        <img src="/img/stock/travel_1.jpg" alt="travel pic">
                    </div>
                    <div class="polaroid__meta">
                        <div class="polaroid__user">
                            <div class="polaroid__avatar">
                                <img src="/img/avatar/person_1.jpg" alt="user-avatar">
                            </div>
                            <div class="polaroid__username">person_1</div>
                        </div>
                        <div class="polaroid__details">
                            <h3>Indonesia</h3>
                            <p>Some Post Title</p>
                        </div>
                    </div>
                </div>
                <div class="polaroid">
                    <div class="polaroid__image">
                        <img src="/img/stock/travel_1.jpg" alt="travel pic">
                    </div>
                    <div class="polaroid__meta">
                        <div class="polaroid__user">
                            <div class="polaroid__avatar">
                                <img src="/img/avatar/person_1.jpg" alt="user-avatar">
                            </div>
                            <div class="polaroid__username">person_1</div>
                        </div>
                        <div class="polaroid__details">
                            <h3>Indonesia</h3>
                            <p>Some Post Title</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div class="overlay"></div>
    <div class="modal">
        <div class="tabs">
            <div class="tabs__header">
                <a href="#" class="tab__header-link" data-tab-link="login">Login</a>
                <a href="#" class="tab__header-link" data-tab-link="join">Join</a>
            </div>
            <div class="tabs__container">
                <div class="tab login" data-tab="login">
                    <h2>Welcome to <em>Voyage</em></h2>
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" required placeholder="Username" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" required placeholder="Password" class="form-control">
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
    <script src="js/index.js" type="module"></script>
</body>

</html>