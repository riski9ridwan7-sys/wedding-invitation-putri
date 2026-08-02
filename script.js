// =========================================
// WEDDING INVITATION
// SCRIPT.JS
// PART 1
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // ELEMENT
    // =========================================

    const loading = document.getElementById("loading");

    const music = document.getElementById("musik");

    const openBtn = document.getElementById("openInvitation");

    const musicBtn = document.getElementById("musicBtn");

    const backToTop = document.getElementById("backToTop");

    const content = document.getElementById("content");

    const guestName = document.getElementById("guestName");



    // =========================================
    // LOADING
    // =========================================

    window.addEventListener("load", () => {

        if (!loading) return;

        setTimeout(() => {

            loading.style.transition = "opacity .6s ease";

            loading.style.opacity = "0";

            setTimeout(() => {

                loading.style.display = "none";

            }, 600);

        }, 1000);

    });



    // =========================================
    // GUEST NAME FROM URL
    // contoh:
    // index.html?to=Bapak%20Ahmad
    // =========================================

    if (guestName) {

        const params = new URLSearchParams(window.location.search);

        const guest = params.get("to");

        if (guest && guest.trim() !== "") {

            guestName.textContent = decodeURIComponent(guest);

        }

    }



    // =========================================
    // MUSIC
    // =========================================

    let isPlaying = false;

    function playMusic() {

        if (!music) return;

        music.play().then(() => {

            isPlaying = true;

            if (musicBtn) {

                musicBtn.innerHTML = "⏸️";

            }

        }).catch(() => {});

    }

    function pauseMusic() {

        if (!music) return;

        music.pause();

        isPlaying = false;

        if (musicBtn) {

            musicBtn.innerHTML = "🎵";

        }

    }



    // =========================================
    // OPEN INVITATION
    // =========================================

    if (openBtn) {

        openBtn.addEventListener("click", () => {

            playMusic();

            if (content) {

                content.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    }



    // =========================================
    // MUSIC BUTTON
    // =========================================

    if (musicBtn) {

        musicBtn.addEventListener("click", () => {

            if (isPlaying) {

                pauseMusic();

            } else {

                playMusic();

            }

        });

    }
        // =========================================
    // COUNTDOWN
    // =========================================

    const eventDate = new Date("2026-08-15T10:00:00").getTime();

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    function updateCountdown() {

        const now = new Date().getTime();

        const distance = eventDate - now;

        if (distance <= 0) {

            clearInterval(countdownInterval);

            if (days) days.textContent = "00";
            if (hours) hours.textContent = "00";
            if (minutes) minutes.textContent = "00";
            if (seconds) seconds.textContent = "00";

            return;

        }

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));

        const h = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const m = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const s = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        if (days) days.textContent = String(d).padStart(2, "0");
        if (hours) hours.textContent = String(h).padStart(2, "0");
        if (minutes) minutes.textContent = String(m).padStart(2, "0");
        if (seconds) seconds.textContent = String(s).padStart(2, "0");

    }

    updateCountdown();

    const countdownInterval = setInterval(updateCountdown, 1000);



    // =========================================
    // BACK TO TOP
    // =========================================

    if (backToTop) {

        backToTop.style.display = "none";

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.style.display = "block";

            } else {

                backToTop.style.display = "none";

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    // =========================================
    // SMOOTH SCROLL
    // =========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });



    // =========================================
    // IMAGE LAZY LOADING
    // =========================================

    document.querySelectorAll("img").forEach(img => {

        img.loading = "lazy";

    });
        // =========================================
    // COPY REKENING
    // =========================================

    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".rekening-card");

            if (!card) return;

            const accountNumber = card.querySelector("h4");

            if (!accountNumber) return;

            navigator.clipboard.writeText(accountNumber.textContent.trim())
                .then(() => {

                    const originalText = button.textContent;

                    button.textContent = "✓ Tersalin";

                    setTimeout(() => {

                        button.textContent = originalText;

                    }, 2000);

                });

        });

    });



    // =========================================
    // GALLERY LIGHTBOX
    // =========================================

    const galleryImages = document.querySelectorAll(".gallery-grid img");

    const lightbox = document.getElementById("lightbox");

    const lightboxImage = document.getElementById("lightboxImage");

    const closeLightbox = document.querySelector(".close-lightbox");

    function closeGallery() {

        if (!lightbox) return;

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            if (!lightbox || !lightboxImage) return;

            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    if (closeLightbox) {

        closeLightbox.addEventListener("click", closeGallery);

    }

    if (lightbox) {

        lightbox.addEventListener("click", (e) => {

            if (e.target === lightbox) {

                closeGallery();

            }

        });

    }

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeGallery();

        }

    });



// =========================================
    // WISH FORM
    // =========================================
    const wishForm = document.querySelector(".wish-form");
    const wishList = document.querySelector(".wish-list");

    if (wishForm && wishList) {
        wishForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = this.querySelector("input").value.trim();
            const message = this.querySelector("textarea").value.trim();

            if (!name || !message) {
                alert("Silakan isi nama dan ucapan.");
                return;
            }

            const card = document.createElement("div");
            card.className = "wish-card";

            card.innerHTML = `
                <h3>${name}</h3>
                <p>${message}</p>
            `;

            wishList.prepend(card);
            this.reset();
        });
    }

    // =========================================
    // READY
    // =========================================
    console.log("Wedding Invitation Ready ❤️");

});