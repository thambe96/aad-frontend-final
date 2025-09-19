$(document).ready(function() {
  // Toggle dropdown menu on clicking user info container
  $('#userInfoContainer').click(function(event) {
    event.stopPropagation(); // Prevent click from bubbling up
    $('#userOptions').toggle();
    $('#profileEditSection').hide();
    $('#profilePictureChange').hide() // Hide profile edit if open
  });
  // Hide dropdown if clicking outside
  $(document).click(function() {
    $('#userOptions').hide();
  });
  // Prevent dropdown from closing when clicking inside it
  $('#userOptions').click(function(event) {
    event.stopPropagation();
  });
  // Edit Profile button click
  $('#editProfileBtn').click(function() {
    $('#userOptions').hide();
    $('#profileEditSection').show();
  });

  // Logout button click
  $('#logoutBtn').click(function() {
    alert('Logging out...');
    // Add your logout logic here, e.g., clear tokens, redirect, etc.
  });
  // Cancel button in profile edit form
  $('#cancelEdit').click(function() {
    $('#profileEditSection').hide();
  });
  // Handle profile form submission
  $('#profileForm').submit(function(event) {
    event.preventDefault();
    const updatedName = $('#editName').val();
    const updatedEmail = $('#editEmail').val();
    // Update the displayed user info
    $('#userName').text(updatedName);
    $('#userEmail').text(updatedEmail);
    // Hide the edit section
    $('#profileEditSection').hide();
    alert('Profile updated successfully!');
  });
});




  $('#editProfilePicBtn').click(function() {
    $('#userOptions').hide();
    $('#profilePictureChange').show();
  });

   $('#cancelUpload').click(function() {
    $('#profilePictureChange').hide();
  });
