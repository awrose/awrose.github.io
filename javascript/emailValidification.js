(function(){
    emailjs.init("dm34aw9elvzBnPu17");
})();

document.getElementById('submitButton').addEventListener('click', function(event){
    event.preventDefault();

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
    }, function(err){
        console.error("Failed to send the email", err);
    })

    let contactForm = document.getElementById("contactForm");
    contactForm.reset();

    let sentEmail = document.getElementById("success");
    sentEmail.textContent = "Email successfully sent to awrose@udel.edu";
    sentEmail.style.color = "green";

});
