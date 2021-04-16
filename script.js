let themeDots = document.getElementsByClassName('theme-dot');
var l = themeDots.length;
for(var i=0; i<l; i++)
{
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light')
        document.getElementById('theme-style').href="default.css";
    else if (mode == 'blue')
        document.getElementById('theme-style').href="blue.css";
    else if (mode == 'green')
        document.getElementById('theme-style').href="green.css";
    else if (mode == 'purple')
    document.getElementById('theme-style').href="purple.css";
}