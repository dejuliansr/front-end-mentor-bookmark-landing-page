const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');
const logo = document.getElementById('logo');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');

burgerIcon.addEventListener('click', () => {
  navMenu.classList.add('active');
  burgerIcon.style.display = 'none'; // Sembunyikan ikon burger
  closeIcon.style.display = 'block'; // Tampilkan ikon close
  logo.style.display = 'block';
  overlay.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  navMenu.classList.remove('active');
  burgerIcon.style.display = 'block'; // Tampilkan ikon burger kembali
  closeIcon.style.display = 'none'; // Sembunyikan ikon close
  logo.style.display = 'none'; 
  overlay.style.display = 'none'
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// scripts.js
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('active');
  });
});

// validation email
function validateForm() {
  let email = document.getElementById("email");
  let alert = document.getElementById("alert");
  let form = document.getElementById("formbox");
  let error = document.getElementById("img");

  let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;  // Email address pattern

  if (email.value.match(pattern)){
      form.classList.add("valid");
      form.classList.remove("invalid");
      email.style.borderTop = "2px solid hsl(231, 69%, 60%)";
      email.style.borderLeft = "2px solid hsl(231, 69%, 60%)";
      email.style.borderRight = "2px solid hsl(231, 69%, 60%)";
      email.style.borderBottom = "25px solid hsl(231, 69%, 60%)";
      alert.innerHTML = " "; 
      error.style.opacity = "0";
      document.getElementById("formbox").reset(); // Resets form - input field after successful submission
      return true
  }

  else{
      form.classList.remove("valid");
      form.classList.add("invalid");
      email.style.borderTop = "2px solid hsl(0, 94%, 66%)"; 
      email.style.borderLeft = "2px solid hsl(0, 94%, 66%)";
      email.style.borderRight = "2px solid hsl(0, 94%, 66%)";
      email.style.borderBottom = "25px solid hsl(0, 94%, 66%)";
      alert.innerHTML = "Whoops, make sure it's an email";
      error.style.opacity = "1";
      return false
  }
}