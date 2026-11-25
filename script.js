
// =====================================
// SPECIAL WEBSITE FOR UMI
// JavaScript Interaction
// =====================================


// 1. GOLD PARTICLE ANIMATION

const particlesContainer = document.getElementById("particles");

function createParticles() {

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        const size = Math.random() * 4 + 2;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (Math.random() * 5 + 3) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particlesContainer.appendChild(particle);
    }
}

createParticles();


// 2. BUTTON OPEN LETTER

const openLetterButton =
    document.getElementById("openLetter");

const letterSection =
    document.getElementById("letter");

openLetterButton.addEventListener("click", function () {

    letterSection.scrollIntoView({
        behavior: "smooth"
    });

    document.querySelector(".letter-content")
        .classList.add("letter-open");

});


// 3. BACKGROUND MUSIC PLAY / PAUSE

const musicButton =
    document.getElementById("musicButton");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicIcon =
    document.getElementById("musicIcon");

const musicText =
    document.getElementById("musicText");

musicButton.addEventListener("click", async function () {

    if (backgroundMusic.paused) {

        try {

            await backgroundMusic.play();

            musicIcon.textContent = "♫";
            musicText.textContent = "Pause Musik";

        } catch (error) {

            alert(
                "Musik belum tersedia. Nanti masukkan file musik.mp3 ke folder assets."
            );

        }

    } else {

        backgroundMusic.pause();

        musicIcon.textContent = "♫";
        musicText.textContent = "Putar Musik";

    }

});


// 4. PHOTO UMI PREPARATION

const umiPhoto =
    document.getElementById("umiPhoto");

const photoPlaceholder =
    document.getElementById("photoPlaceholder");

umiPhoto.addEventListener("load", function () {

    if (umiPhoto.naturalWidth > 0) {

        umiPhoto.hidden = false;
        photoPlaceholder.style.display = "none";

    }

});


// 5. LETTER ANIMATION

const letterContent =
    document.querySelector(".letter-content");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("letter-open");

            }

        });

    },
    {
        threshold: 0.2
    }
);

observer.observe(letterContent);

console.log("Website Hari Guru untuk Umi berhasil dimuat!");
