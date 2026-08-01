// =====================
// LOADING SCREEN
// =====================

window.addEventListener("load", function(){

    const loading = document.getElementById("loading");

    if(loading){

        setTimeout(function(){

            loading.style.opacity = "0";

            setTimeout(function(){

                loading.style.display = "none";

            },500);

        },1000);

    }

});



// =====================
// BUKA UNDANGAN
// =====================

const btn = document.getElementById("btnBuka");
const isi = document.getElementById("isiUndangan");
const hero = document.getElementById("hero");


if(btn){

    btn.addEventListener("click", function(){

        if(hero){

            hero.style.display = "none";

        }


        if(isi){

            isi.style.display = "block";

        }


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });

}




// =====================
// COUNTDOWN
// =====================


const targetDate = new Date(
    "August 15, 2026 10:00:00"
).getTime();



const countdownTimer = setInterval(function(){


    const now = new Date().getTime();


    const distance = targetDate - now;



    if(distance < 0){


        clearInterval(countdownTimer);



        const countdown = document.querySelector(".countdown");


        if(countdown){

            countdown.innerHTML = `

            <h2>
            🤍 Hari Bahagia Telah Tiba 🤍
            </h2>

            <p>
            Semoga menjadi awal perjalanan
            yang penuh cinta dan keberkahan.
            </p>

            `;

        }


        return;


    }



    const hari = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );



    const jam = Math.floor(
        (distance %
        (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );



    const menit = Math.floor(
        (distance %
        (1000 * 60 * 60)) /
        (1000 * 60)
    );



    const detik = Math.floor(
        (distance %
        (1000 * 60)) /
        1000
    );



    const hariEl = document.getElementById("hari");
    const jamEl = document.getElementById("jam");
    const menitEl = document.getElementById("menit");
    const detikEl = document.getElementById("detik");



    if(hariEl)
        hariEl.innerHTML = hari;


    if(jamEl)
        jamEl.innerHTML = jam;


    if(menitEl)
        menitEl.innerHTML = menit;


    if(detikEl)
        detikEl.innerHTML = detik;



},1000);






// =====================
// MUSIK
// =====================


const musicBtn = document.getElementById("musicBtn");
const musik = document.getElementById("musik");


let musicPlay = false;



if(musicBtn && musik){


    musicBtn.addEventListener("click", function(){


        if(musicPlay){


            musik.pause();

            musicBtn.innerHTML = "🎵";


        }else{


            musik.play();

            musicBtn.innerHTML = "⏸️";


        }



        musicPlay = !musicPlay;



    });


}






// =====================
// BACK TO TOP
// =====================


const backBtn = document.getElementById("backToTop");



if(backBtn){


    backBtn.addEventListener("click", function(){


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}






// =====================
// ANIMASI SCROLL SIMPLE
// =====================


window.addEventListener("scroll", function(){


    if(backBtn){


        if(window.scrollY > 500){


            backBtn.style.display="block";


        }else{


            backBtn.style.display="none";


        }


    }



});