const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(name)) {
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = 'Please enter a valid name (letters and spaces only)';
        errorDiv.style.color = 'red';
        form.appendChild(errorDiv);
    } else {
        form.submit();
    }
}
);




const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
    if (email == "") {
      alert("Please enter your email.");
      return false;
    }
  }



  function submitForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["message"].value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit-form.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Thanks for contacting us!");
      }
    };
    xhr.send("name=" + name + "&email=" + email + "&message=" + message);
}

// delete everything from the form after a user has submitted details
function resetForm() {
    document.forms["myForm"].reset();
  }
  
//  alert for thank you for submitting your details
function submitForm() {
    
    var messageElement = document.createElement("p");
    messageElement.innerHTML = "Thank you for submitting your details!";
    document.getElementById("form-container").appendChild(messageElement);
  }
  
 
  

  function scrollToTopOrBottom() {
    if (window.scrollY > 0) {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll to the bottom of the page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  }
  