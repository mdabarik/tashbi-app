// Subhan Allah
const incSubhanAllah = document.getElementById("inc-subhan-allah");
const decSubhanAllah = document.getElementById("dec-subhan-allah");
const subhanAllahView = document.getElementById('subhan-allah-counter-view');

let subhanAllahCounter = 0;

incSubhanAllah.addEventListener('click', function() {
    subhanAllahCounter += 1;
    subhanAllahView.innerText = subhanAllahCounter;
})

decSubhanAllah.addEventListener('click', function() {
    subhanAllahCounter -= 1;
    if (subhanAllahCounter < 0) {
        subhanAllahCounter = 0;
        alert("You can't decrease less than 0");
    } else {
        subhanAllahView.innerText = subhanAllahCounter;
    }
})


// Subhan Allah
const incAlhamdulillah = document.getElementById("inc-alhamdulillah");
const decAlhamdulillah = document.getElementById("dec-alhamdulillah");
const alhamdulillahView = document.getElementById('alhamdulillah-counter-view');

let alhamdulillahCounter = 0;

incAlhamdulillah.addEventListener('click', function() {
    alhamdulillahCounter += 1;
    alhamdulillahView.innerText = alhamdulillahCounter;
})

decAlhamdulillah.addEventListener('click', function() {
    alhamdulillahCounter -= 1;
    if (alhamdulillahCounter < 0) {
        alhamdulillahCounter = 0;
        alert("You can't decrease less than 0");
    } else {
        alhamdulillahView.innerText = alhamdulillahCounter;
    }
})

// Allahhu Akbar
const incAllahhuakbar = document.getElementById("inc-allahhuakbar");
const decAllahhuakbar = document.getElementById("dec-allahhuakbar");
const allahhukbarView = document.getElementById('allahhuakbar-counter-view');

let allahhuakbarCounter = 0;

incAllahhuakbar.addEventListener('click', function() {
    allahhuakbarCounter += 1;
    allahhukbarView.innerText = allahhuakbarCounter;
})

decAllahhuakbar.addEventListener('click', function() {
    allahhuakbarCounter -= 1;
    if (allahhuakbarCounter < 0) {
        allahhuakbarCounter = 0;
        alert("You can't decrease less than 0");
    } else {
        allahhukbarView.innerText = allahhuakbarCounter;
    }
})

// reset tasbih
document.getElementById("reset-tashbih").addEventListener('click', function() {
    subhanAllahView.innerText = 0;
    alhamdulillahView.innerText = 0;
    allahhukbarView.innerText = 0;
})
