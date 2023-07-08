# Exit Popup Plugin Documentation

The Exit Popup plugin enables you to display a modal before a user leaves your website. It provides a simple and customizable way to capture user attention and potentially prevent them from leaving your site.

## Installation

To use the Exit Popup plugin, follow these steps:

1. Include the `exit-popup.js` script in your HTML file:

   ```html
   <script src="exit-popup.js"></script>
   ```

2. Create a target element in your HTML where the popup will be displayed:

   ```html
   <div id="popup" style="display: none;">
     <!-- Content of the popup goes here -->
   </div>
   ```

3. Initialize the plugin by creating an instance of `exitPopup` and configuring it:

   ```javascript
   var popup = exitPopup(document.getElementById('popup'), {
     aggressive: true,
     sensitivity: 30,
     timer: 1000,
     delay: 300,
     callback: function() {
       // Code to execute when the exit popup is triggered
       console.log('Exit popup triggered');
     },
     cookieExpire: 7, // Expiration of the cookie in days
     cookieDomain: window.location.host, // Domain for the cookie
     cookieName: 'myExitPopupCookie', // Name of the cookie
     sitewide: true // Use a sitewide cookie
   });
   ```

4. You can manually fire the exit popup by calling the `fire` method:

   ```javascript
   popup.fire();
   ```

5. If you want to disable the exit popup functionality, use the `disable` method:

   ```javascript
   popup.disable();
   ```

## Configuration Options

The `exitPopup` function accepts a custom configuration object with the following options:

- `aggressive` (boolean, default: false): Specifies whether the exit popup should be triggered aggressively even if the user's mouse movement indicates they might not be leaving the page.
- `sensitivity` (number, default: 20): Determines the sensitivity of the mouse movement required to trigger the exit popup. Higher values make it less sensitive.
- `timer` (number, default: 1000): Sets the time in milliseconds after which the exit popup is enabled.
- `delay` (number, default: 0): Specifies a delay in milliseconds before the exit popup is triggered after the mouse leaves the page. Useful to prevent accidental triggering.
- `callback` (function, default: empty function): A callback function to execute when the exit popup is triggered.
- `cookieExpire` (number, default: empty string): Expiration time for the cookie in days. If not specified, the cookie will expire when the browser session ends.
- `cookieDomain` (string, default: empty string): Specifies the domain for the cookie. If not specified, the cookie will be valid for the current domain.
- `cookieName` (string, default: 'viewedExitPopup'): The name of the cookie used to track whether the exit popup has been displayed.
- `sitewide` (boolean, default: false): Indicates whether the cookie should be valid for the entire website (path=/) or just the current page.

## Usage Examples

### Example 1: Basic Usage

```javascript
// Create an exitPopup instance with a target element
var popup = exitPopup(document.getElementById('popup'));

// Manually fire the exit popup
popup.fire();

// Disable the exit popup
popup.disable();
```

### Example 2: Custom Configuration

```javascript
// Create an exitPopup instance with a target element and custom configuration
var popup = exitPopup(document.getElementById('popup'), {
  aggressive: true,
  sensitivity: 30,
  timer: 1000,
  delay: 300,
  callback: function() {
    // Code to execute when the exit popup is triggered
    console.log('Exit popup triggered');
  },
  cookieExpire: 7, // Expiration of the cookie in days
  cookieDomain: 'example.com', // Domain for the cookie
  cookieName: 'myExitPopupCookie', // Name of the cookie
  sitewide: true // Use a sitewide cookie
});
```
This will automatically show the popup if user move the cursor to the top bar of the browser. After closing the popup, this plugin will create the cookie for future, so that this popup will be show only once in a day or week whatever the cookie expiry time. You can manage cookie expiry time from the plug-in configurations.

## Conclusion

The Exit Popup plugin provides a simple and effective way to display a modal before a user leaves your website. By customizing the configuration options, you can control the behavior and appearance of the exit popup to suit your needs.

That concludes the documentation for the Exit Popup plugin. Feel free to customize the content and examples based on your specific implementation.

# Contributor
[Satpal Bhardwaj](https://sbsharma.com/javascript/)

# Feel free to reach me for any query
<a target="_blank" href="https://www.facebook.com/Sbsharma-2798360506847821"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"></a>
<a target="_blank" href="https://twitter.com/Ss101Bhardwaj"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"></a>
<a target="_blank" href="https://www.linkedin.com/in/satpal-bhardwaj-5a76b4134"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<a target="_blank" href="https://codepen.io/sb_sharma"><img src="https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white"></a>
