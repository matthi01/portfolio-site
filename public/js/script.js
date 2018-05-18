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

const cardClickHandler = event => {
  //get the closest flip card / both front and back
  let target = event.target.closest(".flip");

  if (!target) return;

  collapseCards();

  let front = target.children[0];
  let back = target.children[1];

  front.classList.add("close");
  back.classList.add("expand");

  event.stopPropagation();
};

const collapseCards = event => {
  let cardsFront = document.querySelectorAll(".experience__grid__card--front");
  let cardsBack = document.querySelectorAll(".experience__grid__card--back");

  cardsFront.forEach(el => {
    el.classList.remove("close");
  });

  cardsBack.forEach(el => {
    el.classList.remove("expand");
  });
};

const closeActions = event => {
  closeSidebar();
  collapseCards();
  event.stopPropagation();
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

document
  .querySelector(".experience__grid")
  .addEventListener("click", cardClickHandler, false);

document.addEventListener("click", closeActions, false);
