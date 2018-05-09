const toggleSidebar = event => {
  let sidebar = document.querySelector(".sidebar");
  let sidebarItems = document.querySelector(".sidebar__items");

  sidebar.classList.toggle("sidebar--active");

  if (sidebar.classList.contains("sidebar--active")) {
    sidebarItems.style.visibility = "visible";
  } else {
    sidebarItems.style.visibility = "hidden";
  }

  event.stopPropagation();
};

const closeSidebar = () => {
  let sidebar = document.querySelector(".sidebar");

  if (sidebar.classList.contains("sidebar--active")) {
    sidebar.classList.remove("sidebar--active");
    document.querySelector(".sidebar__items").style.visibility = "hidden";
  }
};

const sendEmail = e => {
  e.preventDefault();

  const email = "mruhland01@gmail.com";
  const subject = "Portfolio Message";
  window.location.href = `mailto:${email}?subject=${subject}`;
};

// EVENT LISTENERS
document
  .querySelector(".sidebar__icon")
  .addEventListener("click", toggleSidebar, false);

document
  .getElementById("contact__send-email")
  .addEventListener("click", sendEmail, false);

document
  .querySelector(".sidebar__items")
  .addEventListener("click", event => event.stopPropagation(), false);

document.addEventListener("click", closeSidebar, false);
