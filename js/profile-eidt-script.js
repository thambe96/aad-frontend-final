$(document).ready(function() {




    //sponsor


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
        localStorage.removeItem("jwtToken"); 
        location.reload();
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






      //pet owner




      $('#userInfoContainer-owner').click(function(event) {
        event.stopPropagation(); // Prevent click from bubbling up
        $('#userOptions-owner').toggle();
        $('#profileEditSection-owner').hide();
        $('#profilePictureChange-owner').hide() // Hide profile edit if open
      });




      // Hide dropdown if clicking outside
      $(document).click(function() {
        $('#userOptions-owner').hide();
      });
      // Prevent dropdown from closing when clicking inside it
      $('#userOptions-owner').click(function(event) {
        event.stopPropagation();
      });




      // Edit Profile button click
      $('#editProfileBtn-owner').click(function() {
        $('#userOptions-owner').hide();
        $('#profileEditSection-owner').show();
      });

      // Logout button click
      $('#logoutBtn-owner').click(function() {
        alert('Logging out...');
        localStorage.removeItem("jwtToken"); 
        location.reload();
        
      });





      // Cancel button in profile edit form
      $('#cancelEdit-owner').click(function() {
        $('#profileEditSection-owner').hide();
      });






      // Handle profile form submission
      $('#profileForm-owner').submit(function(event) {
        event.preventDefault();
        const updatedName = $('#editName-owner').val();
        const updatedEmail = $('#editEmail-owner').val();
        // Update the displayed user info
        $('#userName-owner').text(updatedName);
        $('#userEmail-owner').text(updatedEmail);
        // Hide the edit section
        $('#profileEditSection-owner').hide();
        alert('Profile updated successfully!');
      });



      


      //admin




      
      $('#userInfoContainer-admin').click(function(event) {
        event.stopPropagation(); // Prevent click from bubbling up
        $('#userOptions-admin').toggle();
        $('#profileEditSection-admin').hide();
        $('#profilePictureChange-admin').hide() // Hide profile edit if open
      });



      // Hide dropdown if clicking outside
      $(document).click(function() {
        $('#userOptions-admin').hide();
      });




      // Prevent dropdown from closing when clicking inside it
      $('#userOptions-admin').click(function(event) {
        event.stopPropagation();
      });




      // Edit Profile button click
      $('#editProfileBtn-admin').click(function() {
        $('#userOptions-admin').hide();
        $('#profileEditSection-admin').show();
      });




      // Logout button click
      $('#logoutBtn-admin').click(function() {
        alert('Logging out...');
        localStorage.removeItem("jwtToken"); 
        location.reload();
      });





      // Cancel button in profile edit form
      $('#cancelEdit-admin').click(function() {
        $('#profileEditSection-admin').hide();
      });




      // Handle profile form submission
      $('#profileForm-admin').submit(function(event) {
        event.preventDefault();
        const updatedName = $('#editName-admin').val();
        const updatedEmail = $('#editEmail-admin').val();
        // Update the displayed user info
        $('#userName-admin').text(updatedName);
        $('#userEmail-admin').text(updatedEmail);
        // Hide the edit section
        $('#profileEditSection-admin').hide();
        alert('Profile updated successfully!');
      });
























});







 //sponsr

  $('#editProfilePicBtn').click(function() {
    $('#userOptions').hide();
    $('#profilePictureChange').show();
  });

   $('#cancelUpload').click(function() {
    $('#profilePictureChange').hide();
  });




  //pet owner
  
  $('#editProfilePicBtn-owner').click(function() {
    $('#userOptions-owner').hide();
    $('#profilePictureChange-owner').show();
  });

   $('#cancelUpload-owner').click(function() {
    $('#profilePictureChange-owner').hide();
  });



  //admin


  $('#editProfilePicBtn-admin').click(function() {
    $('#userOptions-admin').hide();
    $('#profilePictureChange-admin').show();
  });

   $('#cancelUpload-admin').click(function() {
    $('#profilePictureChange-admin').hide();
  });