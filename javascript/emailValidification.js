(function(){
    emailjs.init("dm34aw9elvzBnPu17");
})();

document.getElementById('submitButton').addEventListener('click', function(event){
    event.preventDefault();

    if(validateForm()){
        let firstName = document.getElementById('fname').value;
        let lastName = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phoneNumber').value;
        let message = document.getElementById('message').value;

        emailjs.send("service_exbwnys", "template_gzylflx", {
            from_name: firstName, lastName,
            message: message,
            user_email: email,
            user_phone: phone
        }).then(function(response){
            console.log("Email sent successfully!", response.status, response.text)
            let contactForm = document.getElementById("contactForm");
            contactForm.reset();
            let sentEmail = document.getElementById("emailStatus");
            sentEmail.textContent = "Email successfully sent to awrose@udel.edu";
            sentEmail.style.color = "green";
        }, function(err){
            console.error("Failed to send the email", err);
            let errorEmailing = document.getElementById("emailStatus");
            errorEmailing.textContent = "An error occurred while sending the email";
            errorEmailing.style.color = "red";
        });
    } else{
        let errorEmailing = document.getElementById("emailStatus");
        errorEmailing.textContent = "Please check that you've input the form information correctly";
        errorEmailing.style.color = "red";
    }


});

function validateForm(){
    let isValid = true; 

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;

    ["fnameValidation", "lnameValidation", "emailValidation", "messageValidation", "phoneValidation"].forEach(id => {
        document.getElementById(id).textContent = '';
    });

    ["fname", "lname", "email", "message", "phoneNumber"].forEach(id => {
        document.getElementById(id).classList.remove('invalid');
    });

    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phoneNumber').value;
    let message = document.getElementById('message').value;

    if(!firstName){
        isValid = false;
        let firstNameVal = document.getElementById("fnameValidation");
        firstNameVal.textContent = "First name is required";
        firstNameVal.style.color = "red";
        document.getElementById('fname').classList.add('invalid');
    }

    if(!lastName){
        isValid = false;
        let lastName = document.getElementById("lnameValidation");
        lastName.textContent = "Last name is required";
        lastName.style.color = "red";
        document.getElementById('lname').classList.add('invalid');
    }

    if(!email){
        isValid = false;
        let email = document.getElementById("emailValidation");
        email.textContent = "Email is required";
        email.style.color = "red";
        document.getElementById('email').classList.add('invalid');
    }else{
        if(!emailPattern.test(email)){
            isValid = false;
            let emailPattern = document.getElementById("emailValidation");
            emailPattern.textContent = "Please enter an email address in the form: xyz@domain.<upper-level domain>";
            emailPattern.style.color = "red";
            document.getElementById('email').classList.add('invalid');
        }
    }

    if(!message){
        isValid = false;
        let message = document.getElementById("messageValidation");
        message.textContent = "A message is required";
        message.style.color = "red";
        document.getElementById('message').classList.add('invalid');
    }

    if(!phoneNumber){
        isValid = false;
        let phonePattern = document.getElementById("phoneValidation");
        phonePattern.textContent = "Phone Number is required";
        phonePattern.style.color = "red";
        document.getElementById('phoneNumber').classList.add('invalid');
    }else{
        if(!phoneNumberPattern.test(phone)){
            isValid = false;
            let phonePattern = document.getElementById("phoneValidation");
            phonePattern.textContent = "Please enter a phone number in the form: 123-456-7890";
            phonePattern.style.color = "red";
            document.getElementById('phoneNumber').classList.add('invalid');
        }
    }

    return isValid;


}
