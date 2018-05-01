

const toggleSidebar = () => {
    console.log("sidebar clicked");

    let sidebar = document.querySelector(".sidebar");
    let sidebarItems = document.querySelector(".sidebar__items");

    sidebar.classList.toggle("sidebar--active");
    
    if (sidebar.classList.contains("sidebar--active")) {
        sidebarItems.style.visibility = "visible";
    } else {
        sidebarItems.style.visibility = "hidden";
    }
    
};