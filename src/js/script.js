// For Hamburger Icon
document.querySelector('.hamBurgerWrap').addEventListener('click', function () {
    var getBurgerId = document.querySelector('#nav-icon');
    getBurgerId.classList.toggle('open');
});

// check if Header scrolling
window.onscroll = function () { myFunction() };

var header = document.querySelector('header');
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}


//====================
//==== Tabs
//====================
function openTabs(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}