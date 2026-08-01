// =====================
// BUKA UNDANGAN
// =====================

const btn = document.getElementById("btnBuka");
const isi = document.getElementById("isiUndangan");
const hero = document.getElementById("hero");


if(btn){

    btn.onclick = function(){

        hero.style.display = "none";

        isi.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    };

}



// =====================
// COUNTDOWN
// =====================


const targetDate = new Date("June 15, 2026 10:00:00").getTime();


setInterval(function(){


    const now = new Date().getTime();

    const distance = targetDate - now;



    // Kalau tanggal sudah lewat

    if(distance < 0){

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
        distance / (1000 * 60 * 60 * 24)
    );


    const jam = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const menit = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const detik = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );





    const elHari = document.getElementById("hari");
    const elJam = document.getElementById("jam");
    const elMenit = document.getElementById("menit");
    const elDetik = document.getElementById("detik");



    if(elHari){

        elHari.innerHTML = hari;

    }


    if(elJam){

        elJam.innerHTML = jam;

    }


    if(elMenit){

        elMenit.innerHTML = menit;

    }


    if(elDetik){

        elDetik.innerHTML = detik;

    }



},1000);