// navbar.js

document.addEventListener('DOMContentLoaded', function() {
    // Your navigation bar code goes here
    const navbarContent = `
        <nav class="navbar navbar-expand-lg bg-primary border-bottom" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold fs-3" href="#">Yuva Sangam - III</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mb-2 mb-lg-1 ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active fw-semibold fs-5" data-bs-theme="dark" href="Home.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-semibold fs-5" href="gallery.html">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-semibold fs-5" href="Heritage.html">Heritage</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-semibold fs-5" href="Hotels.html">Hotels</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    const newLocal = "";
    // Append the navigation bar to the body
    document.body.insertAdjacentHTML("beforebegin", navbarContent);
});
