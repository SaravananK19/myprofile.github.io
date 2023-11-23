//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => { //select all <a> whose href starts with #,for each loop iterate over sel anchor.
    anchor.addEventListener('click', function (e) { //add a mouse click event
        e.preventDefault(); // prevent default beh of the anchor link, which is navigating to another page
        document.querySelector(this.getAttribute('href')).scrollIntoView({ //find the target element using the 'href' att of the clicked anchor
            behavior: 'smooth'
        });
    });
  });
  
  // Form submission handling
  document.getElementById('contact-form').addEventListener('submit', function (e) { // add submit event listener to the contact form
    e.preventDefault();  // after submitting, it reload the page.
    // create new form data objects
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData)); // save the data in console in keys:value
    // Clear the form inputs
    this.reset();
  });
