// Global variables
let registeredPets = []
let treatmentRequests = []

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  loadSampleData()
  renderRegisteredPets()
  renderTreatmentRequests()
  updatePetSelect()

  // Form event listeners
  document.getElementById("petRegistrationForm").addEventListener("submit", handlePetRegistration)
  document.getElementById("treatmentRequestForm").addEventListener("submit", handleTreatmentRequest)
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
      photo: "/cute-golden-retriever.png",
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
      photo: "/white-persian-cat.jpg",
      medicalHistory: "Mild respiratory issues due to breed characteristics.",
    },
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
      photo: "/cute-golden-retriever.png",
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

// Handle pet registration
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

// Render registered pets
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
                <img src="https://res.cloudinary.com/dk0c1qe0x/image/upload/v1756970463/qbwuss0ln6ajyqvqyswe.jpg" class="pet-image-owner" alt="${pet.name}">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${pet.name}</h5>
                    <p class="card-text">
                        <strong>Breed:</strong> ${pet.breed}<br>
                        <strong>Age:</strong> ${pet.age}<br>
                        ${pet.weight ? `<strong>Weight:</strong> ${pet.weight}<br>` : ""}
                        ${pet.color ? `<strong>Color:</strong> ${pet.color}` : ""}
                    </p>
                    ${pet.medicalHistory ? `<p class="card-text"><small class="text-muted">${pet.medicalHistory}</small></p>` : ""}
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

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
