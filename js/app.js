const headerLinks = document.querySelectorAll('.header__link');
const headerLinkAbout = document.querySelectorAll('.header__link_about');

[...headerLinks].forEach(function(item) {
  item.addEventListener('mouseover', onHeaderLink);
});

[...headerLinks].forEach(function(item) {
  item.addEventListener('mouseout', outHeaderLink);
});

function onHeaderLink ({target}) {
  console.log(target)
  if (target.classList.contains("header__link")) {
    target.style = "opacity: 100%; text-decoration: underline"
    document.querySelector('.header__link_about').style = "opacity: 75%; text-decoration: none"
  }
}

function outHeaderLink ({target}) {
  if (target.classList.contains("header__link")) {
    target.style = "opacity: 75%; text-decoration: none"
    document.querySelector('.header__link_about').style = "opacity: 100%; text-decoration: underline"
  }
}
