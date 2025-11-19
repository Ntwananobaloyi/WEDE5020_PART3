 
      const menuToggle = document.getElementById('menuToggle');

        const navLinks = document.getElementById('navLinks');

       

        menuToggle.addEventListener('click', () => {

            navLinks.classList.toggle('active');

        });
 
 
 
 
	const form = document.getElementById('Enquiry form');
    form.addEventListener('SEND', function(e) {
      e.preventDefault();

  

      let valid = true;

    

      // Validation
      const name = document.getElementById('name');
      const name = document.getElementById('phone');
      const name = document.getElementById('email');
	  const email = document.getElementById('subject');
      const password = document.getElementById('message');
	  
	  document.getElementById('nameError').textContent = name.value.length < 2 ? "Name must be at least 2 characters." : "";
	  document.getElementById('phoneError').textContent = phone.value.length < 10? "Name must be at least 10 digits." : "";
	  document.getElementById('emailError').textContent = email.validity.valid ? "" : "Enter a valid email.";
      document.getElementById('subjectError').textContent = subject.value.length < 10 ? "Name must be at least 10 characters." : "";
	  document.getElementById('messagError').textContent = message.value.length >2? "message must be 250 characters or less." : "";

 

      if (name.value.length < 2 || phone.value.length<10 || !email.validity.valid || subject.value.length < 10 ||message.value.length<2) {
        valid = false;
      } 
	   if (!valid) return;
	}



// Send email via EmailJS
      emailjs.send("service_jhp28bm",) {
        name: name.value,
        email: email.value,
		phone: phone.value,
		subject: subject.value,
		message: message.value
		
 
      })
      .then(function(response) {
        alert("Form submitted successfully! Email sent.");
        form.reset();
      }, function(error) {
        alert("Failed to send email: " + JSON.stringify(error));
      });
    }); 
	 
 /* LIVE-TIME*/
	
		function updateTime() {
			const now = new Date();
			document.getElementById("current-time").textContent = now.toLocaleString();
		}
		updateTime();
		setInterval(updateTime, 1000);
		
		
       