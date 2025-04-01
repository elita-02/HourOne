let currentPhone = 1;

function togglePhone() {
    const phone1 = document.getElementById("phone1");
    const phone2 = document.getElementById("phone2");

    if (currentPhone === 1) {
        phone1.style.display = "none";
        phone2.style.display = "inline";
        currentPhone = 2;
    } else {
        phone1.style.display = "inline";
        phone2.style.display = "none";
        currentPhone = 1;
    }
}

setInterval(togglePhone, 5000); 


// window.addEventListener("scroll", function () {
//     let headerTwo = document.querySelector(".header-two");
//     let header = document.querySelector(".header");
//     let headerHeight = header.offsetHeight;

//     if (window.scrollY > headerHeight) {
//         headerTwo.style.top = headerHeight + "px";
//     } else {
//         headerTwo.style.top = "80px";
//     }
// });
