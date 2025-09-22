// Global variables
let registeredPets = []
let treatmentRequests = []









// Initialize the application
document.addEventListener("DOMContentLoaded", () => {



    /*
  loadSampleData()
  renderRegisteredPets()
  renderTreatmentRequests()
  updatePetSelect()


  */
  // Form event listeners


//   document.getElementById("petRegistrationForm").addEventListener("submit", handlePetRegistration)

//   document.getElementById("treatmentRequestForm").addEventListener("submit", handleTreatmentRequest)


})

























// Load sample data
function loadSampleData() {
  registeredPets = [
    {
      id: "1",
      name: "Buddy",
      breed: "Golden Retriever",
      age: "3 years",
      weight: "65 lbs",
      gender: "male",
      color: "Golden",
      photo: "https://res.cloudinary.com/dk0c1qe0x/image/upload/v1756970463/qbwuss0ln6ajyqvqyswe.jpg",
      medicalHistory: "No major health issues. Regular checkups.",
    },
    {
      id: "2",
      name: "Luna",
      breed: "Persian Cat",
      age: "2 years",
      weight: "8 lbs",
      gender: "female",
      color: "White",
      photo: "https://res.cloudinary.com/dk0c1qe0x/image/upload/v1757703047/zxz31jkrmmkswbys1grl.jpg",
      medicalHistory: "Mild respiratory issues due to breed characteristics.",
    },
     {
      id: "3",
      name: "Bravo",
      breed: "Larador",
      age: "3 years",
      weight: "10 lbs",
      gender: "male",
      color: "White",
      photo: "https://res.cloudinary.com/dk0c1qe0x/image/upload/v1758197338/hkbmqpwmqcxxeggfzw6g.jpg",
      medicalHistory: "Mild respiratory issues due to breed characteristics.",
    },

    {
      id: "3",
      name: "Bravo",
      breed: "Larador",
      age: "3 years",
      weight: "10 lbs",
      gender: "male",
      color: "White",
      photo: "https://res.cloudinary.com/dk0c1qe0x/image/upload/v1758197338/hkbmqpwmqcxxeggfzw6g.jpg",
      medicalHistory: "Mild respiratory issues due to breed characteristics.",
    }



  ]

  treatmentRequests = [
    {
      id: "1",
      petId: "1",
      petName: "Buddy",
      treatmentName: "Hip Dysplasia Surgery",
      description:
        "Buddy has been diagnosed with hip dysplasia and needs corrective surgery to improve his quality of life.",
      cost: 3500,
      raised: 1200,
      urgency: "urgent",
      photo: "https://res.cloudinary.com/dk0c1qe0x/image/upload/v1757703047/zxz31jkrmmkswbys1grl.jpg",
      dateCreated: "2024-01-15",
    },
  ]
}











// Show/Hide sections
function showPetRegistration() {
  document.getElementById("petRegistrationSection").style.display = "block"
  document.getElementById("treatmentRequestSection").style.display = "none"
  document.getElementById("petRegistrationSection").scrollIntoView({ behavior: "smooth" })
}








function hidePetRegistration() {
  document.getElementById("petRegistrationSection").style.display = "none"
}








function showTreatmentRequest() {
  if (registeredPets.length === 0) {
    alert("Please register at least one pet before creating a treatment request.")
    return
  }
  document.getElementById("treatmentRequestSection").style.display = "block"
  document.getElementById("petRegistrationSection").style.display = "none"
  document.getElementById("treatmentRequestSection").scrollIntoView({ behavior: "smooth" })
}









function hideTreatmentRequest() {
  document.getElementById("treatmentRequestSection").style.display = "none"
}


$('#treatmentReqHideBtn').on('click', function() {


    $('treatmentName').val('');
    $('treatmentDescription').val('');
    $('treatmentCost').val('');

    //Hit treatment req form and show petDogs and treatmentRequests

    $('#treatmentRequestSection').addClass('d-none');
    $('#petOwnerPets').removeClass('d-none').addClass('d-block');
    $('#PetOwnerTreatmentRequests').removeClass('d-none').addClass('d-block');

});



/*


{
    "treatmentName": "Luna's back-legs issues",
    "treatmentDescription": "Luna is suffering from back legs pain. He needs an emergency surgery",
    "treatmentPrice": 25000.0,
    "requestStatus": "OPEN",
    "petDog": 
    {
        "dogId": 6,
        "dogName": "Luna",
        "dogBreed": "SL hound",
        "dogAge": 2

    }

}


*/




$('#treamentReqSubmitBtn').on('click', function() {



    // Extract dog data from button attributes

   


    


    let dogId = window.selectedPetData.dogId;
    let dogName = window.selectedPetData.dogName;
    let dogBreed = window.selectedPetData.dogBreed;
    let dogAge = window.selectedPetData.dogAge;


    /*
    alert("treatmentReq was clicked");
    alert("Here is the dog id :: " + dogId);
    alert("Here is the dog name :: " + dogName);
    alert("Here is the dog breed :: " + dogBreed);
    alert("Here is the dog age :: " + dogAge);
    */
    
    let treatmentName = $("#treatmentName").val() || `${dogName}'s treatment`;
    let treatmentDescription = $("#treatmentDescription").val() || `Treatment required for ${dogName}`;
    let treatmentPrice = $("#treatmentCost").val() || 25000.0;

    // Build JSON payload


    /*
    
    let requestData = {
        treatmentName: treatmentName,
        treatmentDescription: treatmentDescription,
        treatmentPrice: treatmentPrice,
        requestStatus: "OPEN",
        petDog: {
            dogId: dogId,
            dogName: dogName,
            dogBreed: dogBreed,
            dogAge: dogAge
        }
    };

    */

    let token = localStorage.getItem("jwtToken");

    // console.log("JWT TOKEN :: " + token);

    // Send AJAX request
    // /api/v1/debug
    // http://localhost:8080/api/v1/treatmentReqController/createTreatmentRequest
    // http://localhost:8080/api/v1/debug/testAuth



    // console.log(dogId);


    // Build JSON payload

    /*
    let requestData = {
        treatmentName: treatmentName,
        treatmentDescription: treatmentDescription,
        treatmentPrice: treatmentPrice,
        requestStatus: "OPEN",
        petDog: {
            dogId: dogId,
            dogName: dogName,
            dogBreed: dogBreed,
            dogAge: dogAge
        }
    };

    let token = localStorage.getItem("jwtToken");

    // Send AJAX request
    $.ajax({
        url: "http://localhost:8080/api/v1/treatmentReqController/create",
        type: "POST",
        contentType: "application/json",
        headers: { "Authorization": "Bearer " + token },
        data: JSON.stringify(requestData),
        success: function (response) {
            console.log("✅ Treatment request created:", response);
            alert("Treatment request submitted successfully!");
        },
        error: function (err) {
            console.error("❌ Error creating treatment request:", err);
            alert("Failed to create treatment request!");
        }
    });
 
    */





















    
    
    
    
   $.ajax({
    url: "http://localhost:8080/api/v1/treatmentReqController/createTreatmentRequest",
    type: "POST",
    headers: { "Authorization": "Bearer " + token },
    data: {
        treatmentName: treatmentName,
        treatmentDescription: treatmentDescription,
        treatmentPrice: treatmentPrice,
        requestStatus: "CLOSED", //"OPEN"
        dogId: dogId,
        dogName: dogName,
        dogBreed: dogBreed,
        dogAge: dogAge
    },
    success: function (response) {
        console.log("✅ Treatment request created:", response);
        alert("Treatment request submitted successfully!");


        $("#treatmentName").val('')
        $("#treatmentDescription").val('');
        $("#treatmentCost").val('');





        // req section closed - registered pets and requests visible



        $('#treatmentRequestSection').addClass('d-none');
        $('#petOwnerPets').addClass('d-block');
        $('#PetOwnerTreatmentRequests').addClass('d-block');




    },
    error: function (xhr, status, error) {
        console.error("❌ Error:", xhr.responseText);
        alert("Failed to create treatment request!");
    }
});
    
    


    // console.log("Request data being sent:", requestData); // Debug log




});














// Handle pet registration




/*

function handlePetRegistration(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const photoFile = document.getElementById("petPhoto").files[0]

  const newPet = {
    id: Date.now().toString(),
    name: document.getElementById("petName").value,
    breed: document.getElementById("petBreed").value,
    age: document.getElementById("petAge").value,
    weight: document.getElementById("petWeight").value,
    gender: document.getElementById("petGender").value,
    color: document.getElementById("petColor").value,
    medicalHistory: document.getElementById("medicalHistory").value,
    photo: photoFile ? URL.createObjectURL(photoFile) : "/cute-dog.png",
  }

  registeredPets.push(newPet)
  renderRegisteredPets()
  updatePetSelect()

  // Reset form and hide section
  e.target.reset()
  hidePetRegistration()

  // Show success message
  showAlert("Pet registered successfully!", "success")
}


*/



























function debutController() {

    $.ajax({
    url: "http://localhost:8080/api/v1/debug/testAuth",
    type: "GET",
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwtToken")
    },
    success: function (response) {
        alert("Response: " + response);
    },
    error: function (err) {
        console.error("Auth test failed:", err);
    }
});





}




















































// Handle treatment request
function handleTreatmentRequest(e) {
  e.preventDefault()

  const selectedPetId = document.getElementById("selectPet").value
  const selectedPet = registeredPets.find((pet) => pet.id === selectedPetId)

  const newRequest = {
    id: Date.now().toString(),
    petId: selectedPetId,
    petName: selectedPet.name,
    treatmentName: document.getElementById("treatmentName").value,
    description: document.getElementById("treatmentDescription").value,
    cost: Number.parseFloat(document.getElementById("treatmentCost").value),
    raised: 0,
    urgency: document.getElementById("urgency").value,
    photo: selectedPet.photo,
    dateCreated: new Date().toISOString().split("T")[0],
  }

  treatmentRequests.push(newRequest)
  renderTreatmentRequests()

  // Reset form and hide section
  e.target.reset()
  hideTreatmentRequest()

  // Show success message
  showAlert("Treatment request created successfully!", "success")
}










$('#createRequestBtn').on('click', function() {


    let dogName = $('#petDogName').val()

    console.log("-------------->>>>" + dogName)


})








// Render registered pets


/*
function renderRegisteredPets() {



  const container = document.getElementById("registeredPets")

  if (registeredPets.length === 0) {
    container.innerHTML =
      '<div class="col-12"><p class="text-muted">No pets registered yet. Click "Register New Pet" to get started.</p></div>'
    return
  }






  container.innerHTML = registeredPets
    .map(
      (pet) => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card pet-card h-100">
                <img src="${pet.photo}" class="pet-image-owner" alt="${pet.name}">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${pet.name}</h5>
                    <p class="card-text">
                        <strong>Breed:</strong> ${pet.breed}<br>
                        <strong>Age:</strong> ${pet.age}<br>
                        ${pet.weight ? `<strong>Weight:</strong> ${pet.weight}<br>` : ""}
                        ${pet.color ? `<strong>Color:</strong> ${pet.color}` : ""}
                    </p>



                </div>
            </div>
        </div>
    `,
    )
    .join("")
}




*/

















// Render treatment requests
function renderTreatmentRequests() {




  const container = document.getElementById("treatmentRequests")






  if (treatmentRequests.length === 0) {
    container.innerHTML =
      '<div class="col-12"><p class="text-muted">No treatment requests yet. Click "Create Treatment Request" to get started.</p></div>'
    return
  }





  container.innerHTML = treatmentRequests
    .map((request) => {
      const progressPercentage = (request.raised / request.cost) * 100
      const urgencyClass = `urgency-${request.urgency}`

      return `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card treatment-card h-100">
                    <img src="${request.photo}" class="treatment-image" alt="${request.petName}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title fw-bold">${request.treatmentName}</h5>
                            <span class="badge ${urgencyClass}">${request.urgency}</span>
                        </div>
                        <p class="card-text"><strong>Pet:</strong> ${request.petName}</p>
                        <p class="card-text">${request.description.substring(0, 100)}...</p>
                        
                        <div class="mb-3">
                            <div class="d-flex justify-content-between mb-1">
                                <span class="fw-bold">$${request.raised.toLocaleString()}</span>
                                <span class="text-muted">$${request.cost.toLocaleString()}</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${progressPercentage}%" aria-valuenow="${progressPercentage}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small class="text-muted">${progressPercentage.toFixed(1)}% funded</small>
                        </div>
                        
                        <p class="card-text"><small class="text-muted">Created: ${new Date(request.dateCreated).toLocaleDateString()}</small></p>
                    </div>
                </div>
            </div>
        `
    })
    .join("")
}












// Update pet select dropdown
function updatePetSelect() {
  const select = document.getElementById("selectPet")
  select.innerHTML =
    '<option value="">Choose your pet</option>' +
    registeredPets.map((pet) => `<option value="${pet.id}">${pet.name} - ${pet.breed}</option>`).join("")
}











// Show alert message
function showAlert(message, type) {
  const alertDiv = document.createElement("div")
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`
  alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  document.querySelector(".container").insertBefore(alertDiv, document.querySelector(".container").firstChild)

  // Auto dismiss after 3 seconds
  setTimeout(() => {
    alertDiv.remove()
  }, 3000)
}








// Logout function
function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "auth-pages.html"
  }
}



















// Browse Treatement Requests button on click


$('#browseTreatmentReqs').on('click', function() {

    $('#PetOwnerTreatmentRequests').removeClass('d-none').addClass('d-block');
    $('#petOwnerPets').removeClass('d-block').addClass('d-none');
    $('#petRegistrationSection').removeClass('d-block').addClass('d-none');

    $('#healthRecords').css("display", "none");



});


// Home button 


$('#home-pet-owner').on('click', function() {

    $('#petOwnerPets').removeClass('d-none').addClass('d-bock');
    $('#PetOwnerTreatmentRequests').removeClass('d-block').addClass('d-none');
    $('#petRegistrationSection').removeClass('d-block').addClass('d-none');

    $('#healthRecords').css("display", "none");


});


$('#browseTreatmentReqs').on('click', function() {

    // $('#petRegistrationSection').removeClass().addClass('d-block');

    // $('#petOwnerPets').removeClass('d-none').addClass('d-bock');
    // $('#PetOwnerTreatmentRequests').removeClass('d-block').addClass('d-none');





      // load requests 

     $('#treatmentRequests').empty();
    

    let token = localStorage.getItem('jwtToken');

    let userId = localStorage.getItem('userId');


    
    $.ajax({
        url: `http://localhost:8080/api/v1/treatmentReqController/requestsByUserId/${userId}`,
        method: 'GET',
        headers: { "Authorization": "Bearer " + token },
        dataType: 'json',
        success: function (obj) {


        // Assuming data is an array of card objects

        // alert("Successfull !!");
        // alert(JSON.stringify(obj, 2, null));


        // Make the this empty before fetching data
        $('#treatmentRequests').empty();

        obj.data.forEach(function (card) {
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


                                
                                <button type="button" class="btn btn-primary healthRecUploadBtn btn-sm flex-fill"
                                    data-reqid = "${card.requestId}"
                                >
                                    Upload Health Records
                                </button>
                                



                            </div>



                        </div>
                    </div>
                </div>
            </div>
            </div>

            `;
            
            

            // Append card to container
            $('#treatmentRequests').append(cardHtml);

        });



    














        },
        error: function (err) {

        alert("Faild !!");

        console.error('Error fetching cards:', err);
        }
    });








});




$('#pet-register').on('click', function() {

    // $('#PetOwnerTreatmentRequests').addClass('d-block');


    // Resets values of the fields



    $('#petOwnerPets').removeClass('d-block').addClass('d-none');
    $('#petRegistrationSection').removeClass('d-none').addClass('d-block');
    $('#PetOwnerTreatmentRequests').removeClass('d-block').addClass('d-none');
    $('#healthRecords').css("display", "none");
    // $('#PetOwnerTreatmentRequests').removeClass('d-block').addClass('d-none');



});




function uploadHealthRecords() {


// code goes here -->>   


}



function setUpHealthRecord() {








}



let reqId;
$(document).on("click", ".healthRecUploadBtn", function () {


        $('#PetOwnerTreatmentRequests').removeClass('d-block').addClass('d-none');
        $('#healthRecords').css("display", "block");

        // alert( $(this).data("reqid"));
        reqId = $(this).data("reqid");
        

        
});






$('#helathRecUploadBtn').on('click', function() {

       
    // let reqId = $(this).data("reqid"); // replace with dynamic reqId (from data-reqid or hidden field)
    // alert("This is req Id :: "+reqId)
    let files = $("#healthRecordUpload")[0].files;

    if (files.length === 0) {
        alert("Please select at least one file");
        return;
    }

    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append("healthRecords", files[i]); // param name must match @RequestParam
    }

    // /api/v1/debug/testAuth
    // http://localhost:8080/api/v1/healthRecord/saveHealthRecords/${reqId}

    $.ajax({
        url: `http://localhost:8080/api/v1/healthRecord/saveHealthRecords/${reqId}`,
        type: "POST",
        headers: { "Authorization": "Bearer " + localStorage.getItem('jwtToken') },
        data: formData,
        processData: false,  // required for FormData
        contentType: false,  // required for FormData
        success: function (response) {


            alert("Health records uploaded successfully!");
            console.log(response);

            


        },
        error: function (err) {
            console.error("Upload failed:", err);
            alert("Upload failed!");
        }
    });





});







$('#helthRecUploadCancelBtn').on('click', function() {

    $('#healthRecords').css("display", "none");
    $('#petOwnerPets').removeClass('d-none').addClass('d-block');



});






































