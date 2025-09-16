
 const signInForm = $('#signInForm');
 const signUpForm = $('#signUpForm');
 const sponsorContainer = $('#Sponsor');

 const createUserBtn = $('#createAccountBtn');

    let name;
    let password;
    let age;
    let gender;

    let address;
    let email;
    let role;






$(document).ready(function () {



    signUpForm.css('display', 'none');
    sponsorContainer.css('display', 'none');




    /*

    $.ajax({

        url: "http://localhost:8080/api/v1/auth/login",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            name: "smith",
            password: "pass@@"
        }),
        success: function(response) {
            console.log("Login successful:", response);

            // Save JWT token to localStorage (if returned)

            // if (response.token) {
            //     localStorage.setItem("jwtToken", response.token);
            // }

            // alert(JSON.stringify(response));

            // Split the token
            let token = response.data.accessToken;

            let payloadBase64 = token.split('.')[1];  // take the middle part
            let payloadDecoded = atob(payloadBase64); // decode base64
            let payloadJson = JSON.parse(payloadDecoded); // convert to JSON

            console.log("Decoded payload:", payloadJson);
            console.log("User role:", payloadJson.role);  // 👉 gives you "PET_OWNER"
            console.log("Username:", payloadJson.sub);    // 👉 gives you "smith"
            alert(payloadBase64);
            alert(payloadDecoded);
            alert(payloadJson.role);



        },
        error: function(xhr, status, error) {
            console.error("Login failed:", xhr.responseText);
        }

    });

    */





});



 $('#showSignUp').click(function(event) {
    
    event.preventDefault(); // Prevent the default anchor behavior


    
 






    
 
    signInForm.css('display', 'none');
    signUpForm.css('display', 'block');
    
    
    

    
  });


   $('#showSignIn').click(function(event) {
    
    event.preventDefault(); // Prevent the default anchor behavior
    
 
    signInForm.css('display', 'block');
    signUpForm.css('display', 'none');
    

    
  });


createUserBtn.click('click', function() {




    
    name = $('#name-reg').val();
    password = $('#password-reg').val();
    age = $('#age').val();
    gender = $('#gender').val();

    address = $('#address').val();
    email = $('#email').val();
    role = $('#role').val();




    // alert(name)
    // alert(password)
    // alert(age)
    // alert(gender)
    // alert(address)
    // alert(email)
    // alert(role)



     $.ajax({

        url: "http://localhost:8080/api/v1/auth/register",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            name: name, 
            password: password,
            age: age, 
            gender: gender, 
            address: address, 
            email: email, 
            role: role
        }),

        success: function(response) {
            console.log("registration  successful:", response);

            clearForm();
            signInForm.css('display', 'block');
            signUpForm.css('display', 'none');


          

         


        },
        error: function(xhr, status, error) {
            console.error("Login failed:", xhr.responseText);
        }

    });




});



const clearForm = function() {

        name.val('');
        password.val('')
        age.val('');
        gender.val('');

        address.val('');
        email.val('');
        rol.val('');

}


