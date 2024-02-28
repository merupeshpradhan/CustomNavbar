function toggle() {
    var menu = document.getElementsByClassName("menu-items")[0];
    var menuLogo = document.getElementById("menu-logo");

    menuLogo.style.transition="ease"


    if (menu.style.display=="flex") {
        menu.style.display="none";
        menuLogo.src="imageVideo/menu.png";
    }
    else{
        menu.style.display="flex";
        menuLogo.src="imageVideo/reject.png";
    }
}