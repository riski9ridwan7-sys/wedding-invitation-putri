 // =========================================
// WEDDING INVITATION
// SCRIPT.JS
// PART 1 - 8
// =========================================


document.addEventListener("DOMContentLoaded",()=>{



// =========================================
// PART 1 - INITIAL SETUP
// =========================================


const loading = document.getElementById("loading");

const openBtn = document.getElementById("openInvitation");

const hero = document.getElementById("hero");

const content = document.getElementById("content");

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const guestName = document.getElementById("guestName");

const backToTop = document.getElementById("backToTop");



console.log("Script Loaded");

console.log({

loading,
openBtn,
hero,
content,
music,
musicBtn,
guestName,
backToTop

});




// =========================================
// PART 2 - LOADING SCREEN
// =========================================


window.addEventListener("load",()=>{


    if(!loading) return;


    setTimeout(()=>{


        loading.style.transition =
        "opacity .6s ease";


        loading.style.opacity="0";



        setTimeout(()=>{


            loading.style.display="none";


        },600);



    },1000);



});





// =========================================
// PART 3 - OPEN INVITATION ANIMATION
// =========================================


if(openBtn){


    openBtn.addEventListener("click",()=>{

        playMusic();

        console.log("Opening Invitation");


if(content){

    content.classList.remove("hidden-content");

    content.classList.add("content-show");

}



if(hero){

    hero.classList.add("opening-close");

}


        document.body.style.overflow="auto";



        setTimeout(()=>{


            const couple =
            document.getElementById("couple");



            if(couple){


                couple.scrollIntoView({

                    behavior:"smooth"

                });


            }



        },1200);






    });



}





// =========================================
// PART 4 - MUSIC
// =========================================

let isPlaying = false;


// PLAY MUSIC //

function playMusic(){

    if(!music) return;

    music.play()
    .then(()=>{

        isPlaying = true;

        if(musicBtn){
            musicBtn.innerHTML = "⏸️";
        }

    })
    .catch(err=>{

        console.error("Audio gagal diputar:", err);

    });

}



// PAUSE MUSIC
function pauseMusic(){

    if(!music) return;


    music.pause();


    isPlaying = false;


    if(musicBtn){

        musicBtn.innerHTML = "🎵";

    }

}



// BUTTON MUSIC PLAY / PAUSE

if(musicBtn){

    musicBtn.addEventListener("click",()=>{


        if(isPlaying){

            pauseMusic();


        }else{


            playMusic();


        }


    });

}

// =========================================
// PART 5 - GUEST NAME
// =========================================


if(guestName){


    const params =
    new URLSearchParams(
        window.location.search
    );


    const guest =
    params.get("to");



    if(guest){


        guestName.textContent =
        decodeURIComponent(guest);


    }



}





// =========================================
// PART 6 - COUNTDOWN
// =========================================


const eventDate =
new Date(
"2026-08-15T10:00:00"
).getTime();



const days =
document.getElementById("days");

const hours =
document.getElementById("hours");

const minutes =
document.getElementById("minutes");

const seconds =
document.getElementById("seconds");





function updateCountdown(){



const now =
new Date().getTime();



const distance =
eventDate-now;




if(distance<=0){

return;

}




const d =
Math.floor(
distance /
(1000*60*60*24)
);



const h =
Math.floor(
(distance %
(1000*60*60*24))
/
(1000*60*60)
);



const m =
Math.floor(
(distance %
(1000*60*60))
/
(1000*60)
);



const s =
Math.floor(
(distance %
(1000*60))
/
1000
);





if(days)
days.textContent =
String(d).padStart(2,"0");



if(hours)
hours.textContent =
String(h).padStart(2,"0");



if(minutes)
minutes.textContent =
String(m).padStart(2,"0");



if(seconds)
seconds.textContent =
String(s).padStart(2,"0");



}




updateCountdown();


setInterval(
updateCountdown,
1000
);






// =========================================
// PART 7 - BACK TO TOP
// =========================================


if(backToTop){


backToTop.style.display="none";



window.addEventListener("scroll",()=>{


    if(window.scrollY>500){


        backToTop.style.display="block";


    }else{


        backToTop.style.display="none";


    }


});




backToTop.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });



});



}







// =========================================
// PART 8 - COPY REKENING
// =========================================


const copyButtons =
document.querySelectorAll(".copy-btn");



copyButtons.forEach(button=>{


button.addEventListener("click",()=>{


const card =
button.closest(
".rekening-card"
);



if(!card) return;



const number =
card.querySelector("h4");



if(number){


navigator.clipboard.writeText(
number.textContent.trim()
);



button.textContent =
"✓ Tersalin";



setTimeout(()=>{


button.textContent =
"Salin Nomor";


},2000);



}



});



});





console.log(
"Wedding Invitation Ready ❤️"
);




// =========================================
// PART 9 - GALLERY LIGHTBOX
// =========================================


const galleryImages =
document.querySelectorAll(".gallery-grid img");


const lightbox =
document.getElementById("lightbox");


const lightboxImage =
document.getElementById("lightboxImage");


const closeLightbox =
document.querySelector(".close-lightbox");



function closeGallery(){


    if(!lightbox) return;


    lightbox.classList.remove("active");


    document.body.style.overflow="auto";


}



galleryImages.forEach(image=>{


    image.addEventListener("click",()=>{


        if(!lightbox || !lightboxImage)
        return;



        lightboxImage.src =
        image.src;



        lightboxImage.alt =
        image.alt;



        lightbox.classList.add("active");



        document.body.style.overflow="hidden";



    });


});



if(closeLightbox){


    closeLightbox.addEventListener(
        "click",
        closeGallery
    );


}



if(lightbox){


    lightbox.addEventListener(
    "click",
    (e)=>{


        if(e.target===lightbox){


            closeGallery();


        }


    });


}



document.addEventListener(
"keydown",
(e)=>{


    if(e.key==="Escape"){


        closeGallery();


    }


});

// =========================================
// PART 10 - WISH FORM
// =========================================

const wishForm = document.querySelector(".wish-form");

const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

// Counter Jumlah Tamu
const minusGuest = document.getElementById("minusGuest");
const plusGuest = document.getElementById("plusGuest");
const guestCount = document.getElementById("guestCount");
const jumlahInput = document.getElementById("jumlah");

let totalGuest = 1;

// =========================================
// COUNTER TAMU
// =========================================

if (minusGuest && plusGuest && guestCount && jumlahInput) {

    minusGuest.addEventListener("click", () => {

        if (totalGuest > 1) {

            totalGuest--;

            guestCount.textContent = totalGuest;
            jumlahInput.value = totalGuest;

        }

    });

    plusGuest.addEventListener("click", () => {

        totalGuest++;

        guestCount.textContent = totalGuest;
        jumlahInput.value = totalGuest;

    });

}

// =========================================
// POPUP
// =========================================

if (closePopup && popup) {

    closePopup.addEventListener("click", () => {

        popup.classList.remove("show");

    });

}

// =========================================
// SUBMIT RSVP
// =========================================

if (wishForm) {

    const WEB_APP_URL =
        "https://script.google.com/macros/s/AKfycbz6KsGvltrIcJ2KgDQXj21D1-pQMHUmUsrTO4BzJkXK717H5owRs_5DWqymi6t1Vm6kQA/exec";

    wishForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const submitBtn = wishForm.querySelector(".btn-send");

        submitBtn.disabled = true;
        submitBtn.innerHTML = "⏳ Mengirim...";

        const name =
            document.getElementById("nama").value.trim();

        const hadir =
            document.querySelector(
                'input[name="kehadiran"]:checked'
            )?.value || "";

        const jumlah =
            jumlahInput.value;

        const message =
            document.getElementById("ucapan").value.trim();

        // VALIDASI

        if (!name || !message) {

            alert("Silakan isi nama dan ucapan.");

            submitBtn.disabled = false;
            submitBtn.innerHTML = "✨ Kirim RSVP";

            return;

        }

        try {

            const response = await fetch(WEB_APP_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },

                body: JSON.stringify({

                    nama: name,
                    kehadiran: hadir,
                    jumlah: jumlah,
                    ucapan: message

                })

            });

            if (!response.ok) {

                throw new Error("Gagal mengirim data.");

            }

            console.log(await response.text());

            // Reset Form
            wishForm.reset();

            totalGuest = 1;

            guestCount.textContent = "1";
            jumlahInput.value = "1";

            // Tampilkan Popup
            if (popup) {

                popup.classList.add("show");

            }

        } catch (err) {

            console.error(err);

            alert("Maaf, terjadi kesalahan saat mengirim RSVP.");

        } finally {

            submitBtn.disabled = false;
            submitBtn.innerHTML = "✨ Kirim RSVP";

        }

    });

}

});