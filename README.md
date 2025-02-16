# PersonalPortfolioWebsite
Personal Portfolio Website (Template) 

### AOS Effect Start

GitHub AOS Repository Link: (https://github.com/michalsnik/aos)
AOS Website Link: (https://michalsnik.github.io/aos/)

### Steps to Implement AOS Animation:

1. Open the GitHub Link:
   Visit the GitHub AOS repository.

2. Find Installation Links:
   Scroll down to the Installation section. Under Basic, you will find the required links.

3. Add the First Link:
   Copy the first link provided in the Basic section and paste it inside the <head> tag of your HTML file.

4. Add the Second Link:
   Copy the second link from the Basic section and paste it just before the closing </body> tag of your HTML file.

5. Explore the AOS Website:
   Visit the AOS website to explore available animation effects.

6. Choose an Animation Effect:
   Browse through the animation effects on the website. Once you decide which effect you want, copy its data-aos attribute (e.g., data-aos="fade-up").

7. Apply Animation to HTML Elements:
   In your home.html file, locate the element you want to animate. Add the data-aos attribute (e.g., data-aos="fade-up") to that element.

### AOS Effect End

### Contact Form Start
### Steps to Implement:

1. Create a Contact Form:  
   In your HTML file, design a contact form with fields for `Name`, `Email`, `Subject`, and `Message`.

2. Add an `onclick` Attribute to the Button:  
   In the contact form, add a button. Inside the button tag, include the `onclick` attribute and set its value to `sendMail()`.

3. Connect Script File to HTML:  
   Create a new `script.js` file and link it to your `home.html` file.

4. Sign Up on EmailJS:  
   Visit [EmailJS](https://www.emailjs.com) and create a free account.

5. Get Started for Free:  
   Once logged in, click on the "Get Started for Free" button.

6. Add a Service:  
   Go to the EmailJS dashboard and click on "Add Service".

7. Select a Service Provider:  
   Choose Gmail as your email service provider, or select another provider if preferred.

8. Copy the Service ID:  
   Copy the service ID from EmailJS and paste it into the `emailjs.send()` function in your `script.js` file, replacing `"Your_Service_ID"`.

9. Verify Your Email:  
   In the EmailJS website, click on Connect Account to verify your email ID. Then click on Create Service.

10. Create a New Template:  
    Navigate to the "Email Templates" section and click on "Create New Template".

11. Set Subject Field:  
    In the Subject field, write `{{subject}}`. Use the same #id as the Subject field in your contact form.

12. Edit Content:  
    In the content field, click 1= `Edit Content`, and write:

    ```
    Hello, Neha Chaudhari (Your Name)
    from {{email}} (Use the #id of the email field from the contact form)

    You got a new message from {{name}} (Use the #id of the name field from the contact form):

    {{message}} (Use the #id of the message field from the contact form)

    Best wishes,
    EmailJS team
    ```

13. Save the Template:  
    Save the template. Go to the Settings option, copy your Template ID, and paste it into `emailjs.send()` in your `script.js` file, replacing `"Your_Template_ID"`.

14. Get the Public Key:  
    In the EmailJS website, click on Account in the left navigation bar, then go to API Keys. Copy the Public Key.

15. Install EmailJS SDK:  
    On the EmailJS website, click Docs in the top menu, scroll down the left navigation bar to SDK, then select Installation. Under Browser Script, copy the script code and paste it inside the `<head>` tag of your `home.html` file.

16. Update the Public Key in the Script:  
    In the browser script, replace `"Your_Public_Key"` with your Public Key.

17. Test Your Contact Form:  
    Run your `home.html` file, fill out the contact form, and submit it. You should receive an email in your inbox.

### Contact Form End
