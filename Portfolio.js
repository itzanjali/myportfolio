

const viewPortfolioBtn = document.getElementById('viewPortfolioBtn');

    // Get references to other sections
    const aboutSection = document.getElementById('about');
    const serviceSection = document.getElementById('service');
    const propertySection = document.getElementById('property');
    const featuresSection = document.getElementById('features');
    const contactSection = document.getElementById('contact');
    

    // Add event listener for click event
    viewPortfolioBtn.addEventListener('click', function() {
        // Toggle the visibility of other sections
        aboutSection.style.display = 'block';
        serviceSection.style.display = 'block';
        propertySection.style.display = 'block';
        featuresSection.style.display ='block';
        contactSection.style.display ='block';
    });


'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

// RESUME

document.addEventListener('DOMContentLoaded', function() {
  // Resume button click event
  document.getElementById('resumeBtn').addEventListener('click', function() {
      // Create a temporary anchor element
      var link = document.createElement('a');
      link.href = '/image/resume-anjali.pdf'; // Replace 'path_to_your_resume.pdf' with the actual path to your resume PDF
      link.download = 'resume.pdf'; // Name of the downloaded file
      document.body.appendChild(link);
      link.click(); // Simulate a click on the link
      document.body.removeChild(link); // Clean up
      // Display alert message
      alert('Resume downloaded successfully!');
  });
});


// hero change title
var titles = [" Java Full Stack Developer", "  Software Developer", "  Web Developer"];
        var currentIndex = 0;
        var titleElement = document.getElementById("jobTitle");

        function changeTitle() {
            titleElement.textContent = titles[currentIndex];
            currentIndex = (currentIndex + 1) % titles.length;
        }

        // Change title automatically every 3 seconds
        setInterval(changeTitle, 3000);