

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
    
    const name = document.getElementsByName("name")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const message = document.getElementsByName("message")[0].value;
    
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
};