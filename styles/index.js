const sidebar = document.querySelector(".sidebar");
const brandMenu = document.querySelector(".brand");
const closeIcon = document.querySelector(".close");
const overlay = document.querySelector(".overlay");


const toggelClass = (element, currentClass) => {
    element.classList.toggle(currentClass);
};

const toggleSidebarVisible = () => {
    toggelClass(sidebar, "sidebar-open");
    
    toggleClass(overlay, "overlay-open");
};

brandMenu.addEventListener("click", toggleSidebarVisible);
closeIcon.addEventListener("click", toggleSidebarVisible);
overlay.addEventListener("click", toggleSidebarVisible);
