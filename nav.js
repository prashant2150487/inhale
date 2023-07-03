console.log("hlw");
let nav = document.querySelector("#nav");
let template = document.createElement("template");
template.innerHTML = `<header>

        <section class="navigation">
            <div class="nav-container">
                <div class="brand">
                    <a><img src="./images/Asset-3@2x-(2).png" alt="logo" class="nav_logo" /></a>
                </div>
                <nav>
                    <div class="nav-mobile">
                        <a id="navbar-toggle" href="#!"><span></span></a>/
                    </div>
                    <ul class="nav-list">
                        <li>
                            <a href="#!" id="home">HOME</a>
                        </li>
                        <li>
                            <a href="#!">ABOUT US</a>
                        </li>
                        <li>
                            <a href="#!">PRODUCTS</a>
                            <ul class="navbar-dropdown">
                                <li>
                                    <a href="#!">Service</a>
                                </li>
                                <li>
                                    <a href="#!">CONSTUANTY</a>
                                </li>
                                <li>
                                    <a href="#!">Stylus</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#!">SERVICES</a>
                            <ul class="navbar-dropdown">
                                <li>
                                    <a href="#!">Sass</a>
                                </li>
                                <li>
                                    <a href="#!">Less</a>
                                </li>
                                <li>
                                    <a href="#!">Stylus</a>
                                </li>
                            </ul>
                        </li>
                        <li class="side_btn">
                            <a href="#!">CONSULTANCY <i class="fa-solid fa-arrow-right"></i></a>
                        </li>
                </nav>
            </div>
            </section>
        <section class="front_page">
            <div class="home_cont1">
                <p>What is Lorem</p>
                <h1>Lorem Ipsum is simply text of the printing</h1>
                <h5>All are with radiantly generous client experiences and custom made to meet your specific
                    industry
                    needs.</h5>
                <button>Get in touch</button>
                <div class="thumb">
                    <div class="inline" id="thumb_first">
                        <img src="./Images/thumbs-up (2).svg" alt="thumb" />
                        <h4>100% SATISFIED</h4>
                    </div>
                    <div class="inline">
                        <img src="./Images/shield (1).svg" alt="thumb" />
                        <h4>100% SATISFIED</h4>
                    </div>
                </div>
            </div>
        </section>
<Headers>`;
nav.appendChild(template.content);
