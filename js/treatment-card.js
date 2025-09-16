




$(document).ready(function () {



  $.ajax({
    url: 'http://localhost:8080/api/v1/treatmentReqController/getAllRequests',
    method: 'GET',
    dataType: 'json',
    success: function (obj) {


      // Assuming data is an array of card objects

      alert("Successfull !!");
      alert(JSON.stringify(obj, 2, null));

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
                              <button type="button" class="btn btn-outline-primary btn-sm flex-fill" onclick="viewDetails()">
                                  View Details
                              </button>
                              <button type="button" id="help-pet-btn" class="btn btn-primary btn-sm flex-fill" data-bs-toggle="modal" data-bs-target="#select_donation_amount">
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
      });
    },
    error: function (err) {

      alert("Faild !!");

      console.error('Error fetching cards:', err);
    }
  });
});





// Replace with your own publishable key
// const stripe = Stripe('pk_test_YourPublishableKeyHere');


// Elements instance
// const elements = stripe.elements();


// Create card Element and mount it
// const card = elements.create('card');


// card.mount('#card-element');


// Handle real-time validation errors




// const cardErrors = document.getElementById('card-errors');
// card.on('change', event => {
//   if (event.error) {
//     cardErrors.textContent = event.error.message;
//   } else {
//     cardErrors.textContent = '';
//   }
// });






document.getElementById("open-payment-modal").addEventListener("click", () => {
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

  // (a) Call your backend via AJAX to create a PaymentIntent
  const response = await fetch("http://localhost:8080/api/v1/payment/create-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amountCents: 2000,
      currency: "USD",
      requestId: 2,
      donorUserId: 2
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
  }
});