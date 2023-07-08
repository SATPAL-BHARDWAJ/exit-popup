
// Create an exitpopup instance with a target element and custom configuration
var popup = exitPopup(document.getElementById('exitPopup'), {
    aggressive: true,
    sensitivity: 30,
    timer: 100,
    delay: 500,
    callback: function() {
      // Code to execute when the exit popup is triggered
      console.log('Exit popup triggered');
    },
    cookieExpire: 7, // Expiration of the cookie in days
    cookieDomain: window.location.host, // Domain for the cookie
    cookieName: 'myExitPopupCookie', // Name of the cookie
    sitewide: true // Use a sitewide cookie
  });
  
  // Fire the exit popup manually
  //
  
  // Disable the exit popup
  //popup.disable();
  

  document.getElementById("exitButton").addEventListener("click", function() {
    // Hide the exit popup
    document.getElementById("exitPopup").style.display = "none";
  });