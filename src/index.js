import aboutUs from './aboutUs';
import menu from './menu';
import directions from './directions';

document.getElementById('menu').addEventListener('click', function () {
    document.getElementById('menu').style.backgroundColor = "white";
    document.getElementById('directions').style.backgroundColor = "rgb(223, 207, 207)";
    document.getElementById('aboutUs').style.backgroundColor = "rgb(223, 207, 207)";
    menu(document.getElementById('mainFrame'));
});

document.getElementById('aboutUs').addEventListener('click', function () {
    document.getElementById('aboutUs').style.backgroundColor = "white";
    document.getElementById('menu').style.backgroundColor = "rgb(223, 207, 207)";
    document.getElementById('directions').style.backgroundColor = "rgb(223, 207, 207)";
    aboutUs(document.getElementById('mainFrame'));
});

document.getElementById('directions').addEventListener('click', function () {
    document.getElementById('menu').style.backgroundColor = "rgb(223, 207, 207)";
    document.getElementById('directions').style.backgroundColor = "white";
    document.getElementById('aboutUs').style.backgroundColor = "rgb(223, 207, 207)";
    directions(document.getElementById('mainFrame'));
});

(function() {
    menu(document.getElementById('mainFrame'));  
})();