# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Contact Form Screenshot](./screenshot.jpg)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/contact-form-html-css-js)
- Live Site URL: (http://localhost:3000) 

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

During this project, I improved my skills in form validation using JavaScript, including regex for email validation and handling required fields. I also practiced responsive design with CSS Grid and Flexbox, ensuring the form works well on different screen sizes. Additionally, I focused on accessibility by adding proper labels, ARIA attributes, and keyboard navigation.

```html
<label for="email">Email Address <span class="required">*</span></label>
<input type="email" id="email" name="email">
```

```css
.grid-row {
  display: flex;
  gap: 15px;
}
```

```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email.value)) {
  showError('email');
}
```

### Continued development

In future projects, I want to focus more on advanced JavaScript features like form libraries (e.g., Formik) and improving accessibility with screen reader testing. I also plan to explore backend integration for actual form submission.

### Useful resources

- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Helped with understanding client-side validation.
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Useful for layout techniques.
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - Great for feedback and inspiration.

## Author

- Frontend Mentor - [@kabidu Munguakonkwa Sage](https://www.frontendmentor.io/profile/Abidusage)
- GitHub - [@kabidu Munguakonkwa Sage](https://github.com/Abidusage)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and the community for helpful feedback.

### AI Collaboration

I ran the README-template.md file through Copilot for an automated analysis.








