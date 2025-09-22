
 const signInForm = $('#signInForm');
 const signUpForm = $('#signUpForm');
 const sponsorContainer = $('#sponsor');
 const loginBtn = $('#sign-in');


 let userName = $('#userName');
 let userEmail = $('#userEmail');
 let userRole = $('#userRole');
 let userImageUrl = $('#userImageUrl');


let userNamePetOwner = $('#userNamePetOwner');
let userEmailPetOwner = $('#userEmailPetOwner');
let userRolePetOwner = $('#userRolePetOwner');
let userImageUrlPetOwner = $('#userImageUrlPetOwner');







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
    // sponsorContainer.css('display', 'none');




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


loginBtn.on('click', function(e) {
    e.preventDefault(); // ⛔ stop normal form submission

    // alert('login clicked');

    $.ajax({
        url: "http://localhost:8080/api/v1/auth/login",
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            name: $("#name-login").val(),
            password: $("#password-login").val()
        }),
        success: function(response) {



            console.log("✅ Success:", response);
            // alert("Login worked!");

            // alert(JSON.stringify(response));

            // Split the token
            localStorage.clear();

            


            let token = response.data.accessToken;
            // console.log('bear token :' + token);

            console.log('bear token :' + token);

            localStorage.setItem('jwtToken', token);

            let payloadBase64 = token.split('.')[1];  // take the middle part
            let payloadDecoded = atob(payloadBase64); // decode base64
            let payloadJson = JSON.parse(payloadDecoded); // convert to JSON

            

            console.log("Decoded payload:", payloadJson);
            console.log("User role:", payloadJson.role);  // 👉 gives you "PET_OWNER"
            console.log("Username:", payloadJson.sub);    // 👉 gives you "smith"


            /*
            alert(payloadBase64);
            alert(payloadDecoded);
            alert(payloadJson.role);
            alert(payloadJson.email);
            */



            let role = payloadJson.role;

          

            let usrImgUrl = payloadJson.userImageUrl;

            let userId = payloadJson.id;


            localStorage.setItem('userId', userId);

         
            



             // hide all sections first
            // $("#section-admin, #section-petowner, #section-sponsor").hide();

            // load section based on role
            if (role === "ADMIN") {


                // $("#section-admin").show();



                $('#userName-admin').text(payloadJson.sub);
                $('#userEmail-admin').text(payloadJson.email);
                $('#userRole-admin').text(payloadJson.role);

                if(usrImgUrl) {
                    $('#userImageUrl-admin').attr('src', usrImgUrl);
                }





                $('#main-container-admin').removeClass('d-none').addClass('d-block');
                $('#login').addClass('d-none');

                loadAdminData(token);









                // loadAdminData(token);



            } else if (role === "PET_OWNER") {


                userNamePetOwner.text(payloadJson.sub);
                userEmailPetOwner.text(payloadJson.email);
                userRolePetOwner.text(payloadJson.role);

                if(usrImgUrl) {
                    userImageUrlPetOwner.attr('src', usrImgUrl);
                }





                $('#pet-owner-container').removeClass('d-none').addClass('d-block')
                loadPetOwnerData(token);



            } else if (role === "SPONSOR") {


                userName.text(payloadJson.sub);
                userEmail.text(payloadJson.email);
                userRole.text(payloadJson.role);

                if(usrImgUrl) {
                    $('#userImageUrl').attr('src', usrImgUrl);
                }




                // alert("Role block >>")
                // $("#sponsor").show();
                $('#sponsor').removeClass('d-none').addClass('d-block');
                loadSponsorData(token);
            }








        },
        error: function(xhr, status, error) {
            console.error("❌ AJAX error:", status, error);
            console.log("Response text:", xhr.responseText);
        }
    });
});

// ------------------ LOAD DATA FUNCTIONS ------------------






function loadAdminData(token) {



    $.ajax({


        url: "http://localhost:8080/api/v1/treatmentReqController/getAllRequestsForAdmin",
        type: "GET",
        headers: { "Authorization": "Bearer " + token },
        success: function(response) {
            
            alert("success !!");

            console.log(response.data);
           
            let data = response.data;

            // response.data

            populateRequestsTable(data);

            // console.log(JSON.stringify(response, null, 2));
            // alert(JSON.stringify(response, null, 2));


            
            /*
            console.log('++++++++++++++++++++++++++++++++++++++');

            data.forEach(obj => {

                console.log(obj.requestId);
                console.log(obj.requestStatus);
                console.log(obj.collectedAmount);
                console.log(obj.treatmentDescription);
                console.log(obj.treatmentPrice);
                console.log(obj.dogId);
                console.log(obj.requestName);
                console.log(obj.petImageUrl);
                console.log(obj.petName);




            });

           

            console.log('++++++++++++++++++++++++++++++++++++++');

            
            */

            



        },
        error: function(err) {

            alert("Faild !!");
            console.error("Admin data fetch failed:", err);
        }



    });





}


 // <td>${req.petDog.dogId}</td>

function populateRequestsTable(data) {
    let tableBody = $("#req-tbody-admin");
    tableBody.empty(); // clear old rows

    data.forEach((req) => {

        let badgeClass = (req.requestStatus === "OPEN") 
        ? "text-bg-primary" 
        : (req.requestStatus === "CLOSED") 
            ? "text-bg-danger" 
            : "text-bg-secondary"; // fallback



        let row = `
            <tr>
                <td>${req.requestId}</td>
                <td>
                    <span class="badge ${badgeClass}">${req.requestStatus}</span>
                </td>
                <td>${req.collectedAmount}</td>
                <td>${req.treatmentDescription}</td>
                <td>${req.treatmentPrice}</td>
                <td>${req.dogId}</td>
                <td>${req.requestName}</td>
                <td>
                    <button class="btn btn-warning btn-sm change-status-btn" data-id="${req.requestId}" data-status="${req.requestStatus}" ">
                        Change Status
                    </button>
                </td>
                <td>
                    <button class="btn btn-info btn-sm view-details-btn" data-id="${req.requestId}"
                      
                        class="btn btn-info btn-sm viewDetailsBtn" 
                        data-request-id="1" 
                        data-bs-toggle="modal" 
                        data-bs-target="#detailsModal">

                        View Details
                    </button>
                </td>

                <td>
                    <img src="${req.petImageUrl}" 
                            alt="${req.petName}" 
                            class="img-thumbnail" 
                            style="width: 60px; height: 60px; object-fit: cover;">
                </td>




            </tr>
        `;
        tableBody.append(row);
    });
}





$(document).on("click", ".change-status-btn", function () {
    let reqId = $(this).data("id");
    let reqStatus = $(this).data("status");
    // alert("Change status clicked for Request ID: " + reqId);
    // TODO: call backend to update status

    alert(reqId);
    alert(reqStatus);
    
    if(reqStatus === "OPEN"){
        reqStatus = "OPEN";
    } else if(reqStatus == "CLOSED") {
        reqStatus = "OPEN";
    }

    


    $.ajax({
        url: `http://localhost:8080/api/v1/treatmentReqController/changeStatus/${reqId}`,
        type: "PUT",
        headers: { 
            "Authorization": "Bearer " + localStorage.getItem('jwtToken')
        },
        data: {
            status: reqStatus
        },
        success: function (response) {

            alert("Success !! Changing the status");

            console.log("✅ Status changed successfully:", response);

            loadAdminData(localStorage.getItem('jwtToken'));


            // alert(`Status updated to: ${newStatus}`);
            
            // Optional: Update UI to reflect the change
            // $(`[data-request-id="${requestId}"]`).find('.status-badge').text(newStatus);
        },
        error: function (xhr, status, error) {



            /*
                console.error("❌ Status change failed:");
                console.error("Status:", xhr.status);
                console.error("Response:", xhr.responseText);
                console.error("Error:", error);
            */

            
            alert("Failed to change status!");
        }
    });













});




$(document).on("click", ".view-details-btn", function () {
    let reqId = $(this).data("id");
    // alert("View details clicked for Request ID: " + reqId);
    // TODO: open modal or fetch details from backend

    let requestId = $(this).data("request-id");
    let imageContainer = $("#imageContainer");
    imageContainer.empty(); // clear previous images

    // Fetch images from backend
    $.ajax({
      url: `http://localhost:8080/api/v1/healthRecord/getHealthRecorImages/${reqId}`, // Adjust your API
      type: "GET",
      headers: { "Authorization": "Bearer " + localStorage.getItem("jwtToken") }, // if JWT needed
      success: function (response) {
        // response.data should be an array of image URLs

        alert("SuccessFull!!");

        console.log(JSON.stringify(response, null, 2));


        
        response.data.forEach(obj => {
          let card = `
            <div class="col-4">
              <div class="card">
                <img src="${obj.healthRecordImgUrl}" class="card-img-top fixed-img" alt="Pet Image">
              </div>
            </div>`;
          imageContainer.append(card);
        });

        



      },
      error: function () {

        alert("Faild!!")

        /*
        imageContainer.append(`<p class="text-danger">Failed to load images</p>`);
        */


      }
    });


});










































function loadPetOwnerData(token) {


    $('#registeredPets').empty();

    $('#login').addClass('d-none');

    let userId = localStorage.getItem('userId');

    console.log('This is user ID :: ' + userId);

    $.ajax({
        url: `http://localhost:8080/api/v1/petDog/user/${userId}`,
        type: "GET",
        headers: { "Authorization": "Bearer " + token },
        success: function(data) {


            // $("#petowner-data").html("<pre>" + JSON.stringify(data, null, 2) + "</pre>");

            // $('#registeredPets')
            // console.log(jason.stringify(data))


            // console.log("SuccessFull !!!");

            // alert(JSON.stringify(data, 2, null));

            // console.log(JSON.stringify(data, 2, null))



            /*

            let petDogId = data.dogId;
            let petDogName = data.dogname;
            let petDogBreed = data.dogBreed;
            let petDogAge = data.dogAge;

            let petDogImgUrl = data.imageListFromDb.petDogImageUrl;

            */


            // let petDogImgUrl = data.imageListFromDb.petDogImageUrl;
            let cleanData = [];

            data.data.forEach(obj => {

                let petDetails = {

                    petDogId: obj.dogId,
                    petDogName: obj.dogName,
                    petDogBreed: obj.dogBreed,
                    petDogAge: obj.dogAge,
                    petDogImgUrl: obj.imageListFromDb[0].petDogImageUrl

                };

                console.log("---------->>" + obj.imageListFromDb.petDogImageUrl);

                cleanData.push(petDetails);

            });



           console.log(cleanData);

           



        



        cleanData.forEach(function(card) {



            /*
            let ownerRegPetsCard = `
           
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card pet-card h-100">
                    <img src="${card.petDogImgUrl}" class="pet-image-owner" alt="${card.petDogName}">
                    <div class="card-body">

                        
                        <h5 class="card-title fw-bold">${card.petDogName}</h5>
                        <p class="card-text">
                            <strong>Breed:</strong> ${card.petDogBreed}<br>
                            <strong>Age:</strong> ${card.petDogAge}<br>
                        </p>


                    </div>

                    <div class="card-footer">
                        <button type="button"  class="btn btn-success">Request</button>
                    </div>
                </div>
            </div>`;

            */



            let ownerRegPetsCard = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card pet-card h-100">
                    <img src="${card.petDogImgUrl}" class="pet-image-owner" alt="${card.petDogName}">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${card.petDogName}</h5>
                        <p class="card-text">
                            <strong>Breed:</strong> ${card.petDogBreed}<br>
                            <strong>Age:</strong> ${card.petDogAge}<br>
                        </p>
                    </div>
                    <div class="card-footer">
                        <button type="button"  
                            class="btn btn-success request-btn"
                            data-id="${card.petDogId}"
                            data-name="${card.petDogName}"
                            data-breed="${card.petDogBreed}"
                            data-age="${card.petDogAge}">
                            Request
                        </button>
                    </div>
                </div>
            </div>`;
            $('#registeredPets').append(ownerRegPetsCard);


        });




        // Listen for clicks on any .request-btn
        $(document).on("click", ".request-btn", function () {



            // Display - Block or None section

            $('#treatmentRequestSection').removeClass('d-none').addClass('d-block');
            $('#petOwnerPets').addClass('d-none');
            $('#PetOwnerTreatmentRequests').addClass('d-none');





            /*

            let dogName = $(this).data("name");
            let dogBreed = $(this).data("breed");
            let dogAge = $(this).data("age");

            */


            window.selectedPetData = {
                dogId: $(this).data("id"),
                dogName: $(this).data("name"), 
                dogBreed: $(this).data("breed"),
                dogAge: $(this).data("age")
            };




















            // console.log("🐶 Request clicked for:", dogName, dogBreed, dogAge);

            // Example: alert or send AJAX
            // alert(`Requesting treatment for ${dogName} (${dogBreed}, ${dogAge} years old)`);
        });









        },
        error: function(err) {
            console.error("Pet owner data fetch failed:", err);
        }
    });


    






}






function loadSponsorData(token) {

    // alert("LoadSponsorData >>>");


    $('#card-container').empty();

    $.ajax({
        url: "http://localhost:8080/api/v1/treatmentReqController/getAllRequests",
        type: "GET",
        headers: { "Authorization": "Bearer " + token },
        success: function(resp) {


          

            // signInForm.css('display', 'none');
            // signUpForm.css('display', 'none');





            $('#sponsor').removeClass('d-none').addClass('d-block');
            $('#login').addClass('d-none');





            // $("#sponsor").css('display', 'block');


            
            resp.data.forEach(function (card) {


        

            // let cardHtml = `<h2>${card.requestName}</h2>`;

            


            

        // Create card HTML string
            const cardHtml = `
                
                  <div  class="col-md-6 col-lg-4 m-5">
                  <!-- Treatment Request Card -->
                  <div class="card treatment-card shadow-sm h-100" data-request-id="1">
                      <div class="card-header bg-white border-0 pb-2">
                          <div class="d-flex align-items-start gap-3">
                              <!-- Pet Image -->
                              <div class="pet-image-container flex-shrink-0">
                                  <img src="${card.petImageUrl}" 
                                      alt="Pet Photo" 
                                      class="pet-image rounded-circle" 
                                      id="petImage">
                              </div>
                              
                              <!-- Pet Info -->
                              <div class="flex-grow-1 min-w-0">
                                  <div class="d-flex align-items-start justify-content-between gap-2 mb-2">
                                      <h5 class="card-title mb-0 lh-sm" id="requestTitle">${card.requestName}</h5>
                                      <span class="badge urgency-badge critical flex-shrink-0" id="urgencyBadge">
                                          <i class="bi bi-exclamation-triangle me-1"></i>
                                          Critical
                                      </span>
                                  </div>
                                  
                                  <div class="d-flex align-items-center gap-3 small text-muted mb-2">
                                      <span class="fw-medium" id="petInfo">${card.petName}</span>
                                      <span class="badge bg-light text-dark border" id="requestStatus">${card.requestStatus}</span>
                                      <span class="badge bg-light text-dark border" id="requestStatus">pet dog ref: ${card.dogId}</span>
                                      <span class="badge bg-light text-dark border" id="requestStatus">req ref: ${card.requestId}</span>
                                  </div>
                                  

  <!-- 


                                  <div class="d-flex align-items-center gap-3 text-muted" style="font-size: 0.75rem;">
                                      <div class="d-flex align-items-center gap-1">
                                          <i class="bi bi-calendar3"></i>
                                          <span id="timeframe">Within 2 weeks</span>
                                      </div>
                                      <div class="d-flex align-items-center gap-1">
                                          <i class="bi bi-geo-alt"></i>
                                          <span id="location">New York, NY</span>
                                      </div>
                                  </div>

  -->




                              </div>
                          </div>
                      </div>

                      <div class="card-body pt-0">
                          <!-- Story Preview -->
                          <p class="card-text small text-muted mb-3" id="storyPreview">
                            ${card.treatmentDescription}
                          </p>

                          <!-- Progress Section -->
                          <div class="funding-progress mb-3">
                              <div class="d-flex justify-content-between align-items-center small mb-2">
                                  <span class="fw-medium">Funding Progress</span>
                                  <span class="text-muted" id="progressPercentage">${(card.collectedAmount / card.treatmentPrice) * 100}% funded</span>
                              </div>

                              <!-- Progress Bar -->
                              <div class="progress mb-2" style="height: 8px;">
                                  <div class="progress-bar bg-primary" 
                                      role="progressbar" 
                                      style="width: ${(card.collectedAmount / card.treatmentPrice) * 100}%" 
                                      id="progressBar"
                                      aria-valuenow="${(card.collectedAmount / card.treatmentPrice) * 100}" 
                                      aria-valuemin="0" 
                                      aria-valuemax="100">
                                  </div>
                              </div>

                              <!-- Funding Details -->
                              <div class="d-flex justify-content-between align-items-center mb-2">
                                  <div class="d-flex align-items-center gap-1 small">
                                      <i class="bi bi-currency-dollar text-primary"></i>
                                      <span class="fw-semibold text-primary" id="raisedAmount">${card.collectedAmount}</span>
                                      <span class="text-muted">raised</span>
                                  </div>
                                  <div class="small text-muted">
                                      <span class="fw-medium" id="remainingAmount">${card.treatmentPrice - card.collectedAmount} remaining
                                  </div>
                              </div>

                              <div class="text-center small text-muted">
                                  Goal: <span id="goalAmount">${card.treatmentPrice}</span>
                              </div>
                          </div>

                          <!-- Action Buttons -->
                          <div class="d-flex gap-2">

                              <button type="button" class="btn btn-outline-primary btn-sm flex-fill view-details-btn-sponsor"
                                
                                data-reqIdSponsor = "${card.requestId}"
                                data-bs-toggle="modal"
                                data-bs-target="#detailsModal-sponsor"
                              >
                                  View Details
                              </button>

                              <button type="button" class="btn btn-primary btn-sm flex-fill help-pet-btn" data-bs-toggle="modal" data-bs-target="#select_donation_amount"

                                data-petReqId = "${card.requestId}"

                              >
                                  <i class="bi bi-heart me-1"></i>
                                  Help This Pet
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

          `;
        

        // Append card to container
        $('#card-container').append(cardHtml);



        })},
        error: function(err) {
            console.error("Sponsor data fetch failed:", err);
        }
    });




}


//view details button on sponsor section

// from here now




$(document).on("click", ".view-details-btn-sponsor", function () {


    let reqId = $(this).data("reqidsponsor");
    // alert(reqId)


    let imageContainer = $("#imageContainer-sponsor");
    imageContainer.empty(); // clear previous images

    // Fetch images from backend
    $.ajax({
      url: `http://localhost:8080/api/v1/healthRecord/getHealthRecorImages/${reqId}`, // Adjust your API
      type: "GET",
      headers: { "Authorization": "Bearer " + localStorage.getItem("jwtToken") }, // if JWT needed
      success: function (response) {
        // response.data should be an array of image URLs

        // alert("SuccessFull!!");

        console.log(JSON.stringify(response, null, 2));


        
        response.data.forEach(obj => {
          let card = `
            <div class="col-4">
              <div class="card">
                <img src="${obj.healthRecordImgUrl}" class="card-img-top fixed-img" alt="Pet Image">
              </div>
            </div>`;
          imageContainer.append(card);
        });

        



      },
      error: function () {

        alert("Faild!!")

        
        // imageContainer.append(`<p class="text-danger">Failed to load images</p>`);
        


      }
    });


});
































//key to keep req id when the corresponding cards button
let petReqId;

$(document).on("click", ".help-pet-btn", function () {
    petReqId = $(this).data("petreqid"); 
    console.log("Pet Request ID:", petReqId);
});


let userId = localStorage.getItem('userId');








// This variable is initialized once the payment details button clicked(select the amount from the drop down)
let selectedAmount;

document.getElementById("open-payment-modal").addEventListener("click", () => {

    selectedAmount = $("#donation_amount").val();

    if(!selectedAmount) {
        alert("please select the donation amount to continue");
        return;
    }

    selectedAmount *= 100;


    
    // alert("Hi this is reqId :: " + petReqId);
    // alert("Hi this is userId :: " + userId);
    // alert("Hi this is selected amount :: " + selectedAmount);





  const donationModal = bootstrap.Modal.getInstance(document.getElementById("select_donation_amount"));
  donationModal.hide();

  const paymentModal = new bootstrap.Modal(document.getElementById("payment-modal"));
  paymentModal.show();
});













// 1. Initialize Stripe with your publishable key
const stripe = Stripe("pk_test_51S6y0y2M5zdyQQeDBmKjQuH1vX9LATqMdkaCQpUgfE1l29PifU6ckECT5Dk90qzSzgIgyeoV41RQIhNfcc8GUGW000vkjM46y4"); // replace with your own publishable key
const elements = stripe.elements();

// 2. Create the Card Element
const card = elements.create("card", { hidePostalCode: true });
card.mount("#card-element");

// 3. Handle payment form submit
const form = document.getElementById("payment-form");
const paymentMessage = document.getElementById("payment-message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

    






   


  // (a) Call the backend via AJAX to create a PaymentIntent

  
  const response = await fetch("http://localhost:8080/api/v1/payment/create-intent", {
    method: "POST",
    headers: { 
                "Authorization": "Bearer " + localStorage.getItem('jwtToken'),
                "Content-Type": "application/json" 
            },
    body: JSON.stringify({
      amountCents: selectedAmount,
      currency: "USD",
      requestId: petReqId,
      donorUserId: userId
    })
  });






  const data = await response.json();
  const clientSecret = data.clientSecret;





  // (b) Confirm the card payment using Stripe
  const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
    }
  });



  if (error) {
    // Show error in UI
    paymentMessage.textContent = "❌ " + error.message;
    paymentMessage.style.color = "red";
  } else if (paymentIntent.status === "succeeded") {
    // Payment was successful
    paymentMessage.textContent = "✅ Payment successful!";
    paymentMessage.style.color = "green";

    loadSponsorData(localStorage.getItem('jwtToken'));


  }






});






$('#registerPetBtn').on('click', function(e) {


    e.preventDefault();
    createPetDog();
    // debutController();


});








function createPetDog() {
    // Get token from localStorage (assuming you stored it after login)


    let token = localStorage.getItem("jwtToken");
    let userId = localStorage.getItem("userId");

    // Create FormData object
    let formData = new FormData();

    // Get file from your input field
    let imageFile = $("#petPhoto")[0].files[0];
    formData.append("images", imageFile);



    // dogName":"Luna", "dogBreed":"SL hound", "dogAge":2, "owner": {"id":4, "name": "Anthony", "age": 25, 
    // "gender": "Male", "email": "antony@gmail.com", "role": "PET_OWNER"}



    // $('#userRolePetOwner').val()

    // JSON details
    let details = {
        dogName: $('#petName').val(),
        dogBreed:$('#petBreed').val(),
        dogAge: $('#petAge').val(),
        owner: {
            id: userId,
            name: $('#userNamePetOwner').val(),
            age: 25,
            gender: "Male",
            email: $('#userEmailpetOwner').val(),
            role: "PET_OWNER"
        }
    };

    // Append JSON as a Blob with application/json type
    formData.append("details", JSON.stringify(details));

    // AJAX call
    $.ajax({
        url: "http://localhost:8080/api/v1/petDog/createPetDogTest",
        type: "POST",
        data: formData,
        processData: false,   // prevent query string conversion
        contentType: false,   // let browser set proper multipart/form-data boundary
        headers: {
            "Authorization": "Bearer " + token
        },
        success: function (response) {
            console.log("✅ Pet dog created:", response);
            alert("Pet dog created successfully!");

            loadPetOwnerData(localStorage.getItem('jwtToken'));

        },
        error: function (err) {
            console.error("❌ Error creating pet dog:", err);
            alert("Failed to create pet dog!");
        }
    });


}




