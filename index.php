<!doctype html>
<html lang="fr">
<head>
    <title>Studio Rv & Co</title>

    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Le Studio Rv & Co est une association regroupant des amis passionnés par le monde du cinéma.">

    <link rel="icon" href="assets/img/logos/favicon/favicon.ico" media="(prefers-color-scheme:no-preference)">
    <link rel="icon" href="assets/img/logos/favicon/favicon-light.ico" media="(prefers-color-scheme:dark)">
    <link rel="icon" href="assets/img/logos/favicon/favicon.ico" media="(prefers-color-scheme:light)">
    <link rel="stylesheet" href="assets/css/splide.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <article>
            <!-- Logo et titre -->
            <section>
                <a href="https://rvandco.fr">
                    <img src="assets/img/logos/rv_and_co.png" alt="Logo de l'association Rv & Co.">
                    <p>Studio Rv & Co</p>
                </a>
            </section>

            <!-- Liens internes -->
            <section>
                <a href="#accueil">Accueil</a>
                <a href="#productions">Productions</a>
                <a href="#projets">Projets</a>
                <a href="#association">Association</a>
                <a href="#contact">Contact</a>
            </section>

            <!-- Liens externes -->
            <section>
                <!-- YouTube -->
                <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ" target="_blank" rel="noopener">
                    <img src="assets/img/medias/youtube.svg" alt="Logo du site YouTube.">
                </a>
                <!-- Twitter -->
                <a href="https://twitter.com/studiorvandco" target="_blank" rel="noopener">
                    <img src="assets/img/medias/twitter.svg" alt="Logo du site Twitter.">
                </a>
                <!-- Instagram -->
                <a href="https://www.instagram.com/studiorvandco" target="_blank" rel="noopener">
                    <img src="assets/img/medias/instagram.svg" alt="Logo du site Instagram.">
                </a>
                <!-- Twitch -->
                <a href="https://www.twitch.tv/studiorvandco" target="_blank" rel="noopener">
                    <div class="on-air <?= !empty(json_decode(file_get_contents(__DIR__ . "/assets/data/stream.json"), true)) ?: 'hidden' ?>"><i></i></div>
                    <img src="assets/img/medias/twitch.svg" alt="Logo du site Twitch.">
                </a>
            </section>

            <section id="mobile_menu">
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                    </svg>
                </a>
                <ul class="dropdown">
                    <li>
                        <a href="#accueil">Accueil</a>
                        <a href="#productions">Productions</a>
                        <a href="#projets">Projets</a>
                        <a href="#association">Association</a>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </section>
        </article>
    </header>

    <main>
        <!-- Accueil -->
        <div id="accueil" class="main-container">
            <h1>Ouais, on produit des trucs 😎</h1>
            <article>
                <!-- Vidéo teaser -->
                <section>
                    <video autoplay muted loop preload="none" poster="assets/img/productions/thumbnail.png">
                        <source src="assets/vid/teaser.mp4" type="video/mp4">
                    </video>
                </section>

                <!-- Quelques chiffres -->
                <section>
                    <p>Quelques chiffres</p>
                    <div>
                        <p><strong class="countup">10</strong> Membres</p>
                        <hr>
                        <p><strong class="countup">6</strong> Projets</p>
                        <hr>
                        <p><strong class="countup"><?= json_decode(file_get_contents(__DIR__ . "/assets/data/statistics.json"), true)["viewCount"] ?></strong> Vues</p>
                        <hr>
                        <p><strong class="countup"><?= json_decode(file_get_contents(__DIR__ . "/assets/data/statistics.json"), true)["subscriberCount"] ?></strong> Abonnés</p>
                        <hr>
                        <p><strong class="countup"><?= date_diff(date_create("2020-09-09"), date_create())->format("%y") ?></strong> an</p>
                    </div>
                    <a class="btn" href="#association">En savoir plus</a>
                </section>
            </article>
        </div>

        <!-- Productions -->
        <div id="productions">
            <article class="main-container">
                <h2 class="super_title">Nos productions</h2>
                <section id="main-prod">
                    <!-- 1ᵉ production -->
                    <article class="reveal">
                        <section>
                            <img src="assets/img/productions/en_sursis.jpg" alt="Miniature du court-métrage 'Un Chemin'.">
                        </section>
                        <section>
                            <div>
                                <span class="new">Nouveau</span>
                                <h3>En Sursis</h3>
                            </div>
                            <p>
                                Grâce au jeune lieutenant Jules, le capitaine Patrick Corbier aperçoit enfin sa chance d'atteindre l'insaisissable Vincent, qu'il traque en solitaire depuis de nombreuses années.
                            </p>
                            <a class="btn" href="https://www.youtube.com/watch?v=JVPWEmjVV7g" target="_blank" rel="noopener">Regarder</a>
                        </section>
                    </article>

                    <!-- 2ᵉ production -->
                    <article class="reveal">
                        <section>
                            <img src="assets/img/productions/un_chemin.jpg" alt="Miniature du court-métrage 'Un Chemin'.">
                        </section>
                        <section>
                            <div>
                                <h3>Un Chemin</h3>
                            </div>
                            <p>
                                Tandis que l'humanité est terrassée par une pandémie dévastatrice, deux amis tentent de survivre.<br>
                                Pour cela, ils devront s'engager ensemble sur un long chemin...
                            </p>
                            <a class="btn" href="https://www.youtube.com/watch?v=GXBSu6fq4Wc" target="_blank" rel="noopener">Regarder</a>
                        </section>
                    </article>

                    <!-- 3ᵉ production -->
                    <article class="reveal">
                        <section>
                            <img src="assets/img/productions/star_wars_une_quete_de_justice.jpg" alt="Miniature du fan film 'Star Wars : Une quête de justice'.">
                        </section>
                        <section>
                            <h3>Star Wars : Une quête de justice</h3>
                            <p>
                                La galaxie est déchirée par la guerre entre les Jedi et les Sith. Dans ce contexte mouvementé, la notion de justice est incertaine, chaque camp se l’appropriant pour servir ses intérêts. Mais certains n'hésitent pas à se dresser face à cet affrontement sans fin...
                            </p>
                            <a class="btn" href="https://www.youtube.com/watch?v=RAmWSDmg0so" target="_blank" rel="noopener">Regarder</a>
                        </section>
                    </article>

                    <!-- 4ᵉ production -->
                    <article class="reveal">
                        <section>
                            <img src="assets/img/productions/un_ete_entre_amis.jpg" alt="Miniature de la série 'Un été entre amis'.">
                        </section>
                        <section>
                            <h3>Un été entre amis</h3>
                            <p>
                                Trois amis s'apprêtent à profiter de vacances assez banales à la campagne. Mais des aventures bien plus palpitantes que prévu les attendent et leurs caractères aussi bien trempés que divergents ne vont pas arranger les choses...
                            </p>
                            <a class="btn" href="https://www.youtube.com/playlist?list=PL6VuKkKwjE2EmFu61Pvn39yP5RvYVpIGB" target="_blank" rel="noopener">Regarder</a>
                        </section>
                    </article>
                </section>
            </article>
        </div>

        <!-- Projets -->
        <div id="projets">
            <article class="main-container">
                <h2 class="super_title">Projets annexes</h2>

                <!-- Bannières -->
                <section id="image-carousel" class="splide" aria-label="Projets annexes">
                    <div class="splide__arrows">
                        <button class="splide__arrow splide__arrow--prev">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"/>
                            </svg>
                        </button>
                        <button class="splide__arrow splide__arrow--next">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"/>
                            </svg>
                        </button>
                    </div>

                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">
                                <div>
                                    <h3>Émission Les chroniques</h3>
                                    <p>Talkshow diffusé en direct sur Twitch.</p>
                                    <a class="btn" href="https://www.youtube.com/watch?v=GuYfV7U6w8E&list=PLSBzstMGFp53S9n77CvdrQG132hMXSBBM" target="_blank" rel="noopener">Voir</a>
                                </div>
                                <img src="" data-splide-lazy="assets/img/projects/les_chroniques.jpg" alt="Émission 'Les Chroniques'.">
                            </li>
                            <li class="splide__slide">
                                <div>
                                    <h3>Concert PolyBand</h3>
                                    <p>Captation vidéo et sonore du concert du 17 mars 2022.</p>
                                    <a class="btn" href="https://www.facebook.com/Polyband-BDA-Polytech-Grenoble-114697373596248/" target="_blank" rel="noopener">Voir</a>
                                </div>
                                <img src="" data-splide-lazy="assets/img/projects/concert_polyband.jpg" alt="Concert du groupe Polyband.">
                            </li>
                        </ul>
                    </div>
                </section>
            </article>
        </div>

        <!-- Association -->
        <div id="association">
            <article class="main-container">
                <h2 class="super_title">L'association</h2>

                <!-- Présentation de l'association -->
                <p class="reveal">
                    Le Studio Rv & Co est un regroupement d'amis passionnés par le monde du cinéma. Ensemble, nous produisons du début à la fin des courts-métrages ou des séries amateurs sur des thèmes variés qui nous plaisent.
                </p>

                <!-- Membres -->
                <section id="members" class="reveal">
                    <div>
                        <img src="assets/img/members/mael.jpg" alt="Maël.">
                        <p>Maël</p>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/channel/UC9ZVyJocXPlUCiwggkHsmDg" target="_blank" rel="noopener">
                            <img src="assets/img/members/thomas.jpg" alt="Thomas.">
                            <p>Thomas</p>
                            <hr>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/channel/UCYl-DuOSdkMfsIbLmVPiPOA" target="_blank" rel="noopener">
                            <img src="assets/img/members/florent.jpg" alt="Florent.">
                            <p>Florent</p>
                            <hr>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/channel/UCznR2syShlluEzWRoD7XZRQ" target="_blank" rel="noopener">
                            <img src="assets/img/members/mathis.jpg" alt="Mathis.">
                            <p>Mathis</p>
                            <hr>
                        </a>
                    </div>
                </section>
                <hr class="reveal">

                <!-- Posts Instagram -->
                <section id="instagram-posts" class="reveal">
                    <?php
                        $posts = json_decode(file_get_contents(__DIR__ . "/assets/data/posts.json"), true);
                        for ($i = 0; $i < 9; $i++) {
                            echo "<a href='" . $posts[$i]['permalink'] . "' target='_blank'>";
                            if ($posts[$i]['media_type'] === 'VIDEO') {
                                echo '<img src="' . $posts[$i]['thumbnail_url'] . '" alt="' . str_replace('"', "'", explode('>>>', $posts[$i]['caption'])[0]) . '" title="' . str_replace('"', "'", explode('>>>', $posts[$i]['caption'])[0]) . '">';
                            } else {
                                echo '<img src="' . $posts[$i]['media_url'] . '" alt="' . str_replace('"', "'", explode('>>>', $posts[$i]['caption'])[0]) . '" title="' . str_replace('"', "'", explode('>>>', $posts[$i]['caption'])[0]) . '">';
                            }
                            echo '</a>';
                        }
                    ?>
                </section>
                <a class="btn" href="https://www.instagram.com/studiorvandco" target="_blank" rel="noopener">Plus de photos...</a>
            </article>
        </div>

        <!-- Contact -->
        <div id="contact">
            <article class="main-container">
                <h2 class="super_title">Nous contacter</h2>
                <section>
                    <!-- Adresse et email -->
                    <div>
                        <h3>Studio Rv & Co</h3>
                        <p>
                            4 Lotissement Cantalause <br>
                            31450 Montgiscard, France
                        </p>
                        <p><strong>Email : </strong><a href="mailto:studio@rvandco.fr">studio@rvandco.fr</a></p>
                    </div>
                    <hr>

                    <!-- Réseaux sociaux -->
                    <div>
                        <h3>Réseaux sociaux</h3>
                        <div>
                            <!-- YouTube -->
                            <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ" target="_blank" rel="noopener">
                                <img src="assets/img/medias/youtube.svg" alt="Logo du site YouTube.">
                            </a>
                            <!-- Twitter -->
                            <a href="https://twitter.com/studiorvandco" target="_blank" rel="noopener">
                                <img src="assets/img/medias/twitter.svg" alt="Logo du site Twitter.">
                            </a>
                            <!-- Instagram -->
                            <a href="https://www.instagram.com/studiorvandco" target="_blank" rel="noopener">
                                <img src="assets/img/medias/instagram.svg" alt="Logo du site Instagram.">
                            </a>
                            <!-- Twitch -->
                            <a href="https://www.twitch.tv/studiorvandco" target="_blank" rel="noopener">
                                <div class="on-air <?= !empty(json_decode(file_get_contents(__DIR__ . "/assets/data/stream.json"), true)) ?: 'hidden' ?>"><i></i></div>
                                <img src="assets/img/medias/twitch.svg" alt="Logo du site Twitch.">
                            </a>
                        </div>
                    </div>
                    <hr>

                    <!-- Logo Studio Rv & Co -->
                    <img src="assets/img/logos/studio_rv_and_co.png" alt="Logo alternatif de l'association Rv & Co.">
                </section>
            </article>
        </div>
    </main>

    <footer>
        <!-- Copyright -->
        <p>&copy; <script>document.write(new Date().getFullYear().toString());</script> &nbsp;|&nbsp; <a href="https://rvandco.fr">RvAndCo.fr</a></p>

        <!-- Créateur -->
        <p>Site Web créé par <a href="https://github.com/Minarox" target="_blank" rel="noopener">Minarox</a>.</p>
    </footer>

    <script type="text/javascript" src="assets/js/splide.min.js"></script>
    <script type="text/javascript" src="assets/js/animation.js"></script>
</body>
</html>