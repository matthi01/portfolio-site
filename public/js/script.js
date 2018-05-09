

const toggleSidebar = () => {

    let sidebar = document.querySelector(".sidebar");
    let sidebarItems = document.querySelector(".sidebar__items");

    sidebar.classList.toggle("sidebar--active");
    
    if (sidebar.classList.contains("sidebar--active")) {
        sidebarItems.style.visibility = "visible";
    } else {
        sidebarItems.style.visibility = "hidden";
    }
    
};

const sendEmail = (e) => {
    e.preventDefault();

    const email = "mruhland01@gmail.com";
    const subject = "Portfolio Message";
    window.open(`mailto:${email}?subject=${subject}`);
};