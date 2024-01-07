function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function validateField(fieldName) {
    let fieldValue = document.getElementById(fieldName).value;
    let errorElement = document.getElementById(fieldName + 'Error');

    if (fieldValue === "") {
      errorElement.textContent = "This field is required";
    } else {
      errorElement.textContent = "";
    }
  }
validateField()