# **The X-Files Quiz**

## **Project Overview**
The X-Files Quiz is a fan-inspired web application that allows users to test their knowledge of the popular television series *The X-Files*. Created with HTML, CSS, and JavaScript, the quiz is interactive and visually engaging, featuring a design and color scheme that captures the eerie, mysterious tone of the series. The application is aimed at fans of the show and trivia enthusiasts alike, providing an engaging way for users to revisit iconic moments and characters from *The X-Files* while improving their recall and learning more about the series.

## **Responsive Mockup**
*Include an image or link to a responsive mockup showcasing how the quiz appears on different devices.*

## **Features**

### **Existing Features**

1. **X-Files Logo and Header**
   - Positioned at the top of the page, the X-Files logo establishes the theme immediately. Users can easily identify the quiz as related to *The X-Files*, creating an immersive experience from the start.

2. **Quiz Area**
   - The quiz questions are displayed in a prominent container that includes radio button options for answers. This layout helps users focus on the quiz, with the radio buttons allowing for easy answer selection.

3. **Responsive Three-Column Layout**
   - The quiz utilizes a responsive, two-column layout, designed to adjust smoothly across different screen sizes. This ensures that the quiz remains user-friendly on both desktop and mobile devices.

4. **Submit Button and Feedback**
   - After selecting answers, users can click the “Submit” button to receive immediate feedback on their quiz performance. A score is displayed, helping users gauge their knowledge level.

5. **Score Tracking**
   - Users receive a score summary upon submitting their answers, letting them know how many questions they answered correctly. This encourages replayability for users aiming to improve their scores.

### **Features Left to Implement**

- **Question Randomization**: Adding a feature that randomizes question order each time the quiz is started, providing a fresh experience for repeat users.
- **Timed Mode**: Introducing a timed quiz option for users seeking an extra challenge and a more interactive experience.
- **High-Score Storage**: Implementing a feature that stores high scores locally so users can track their best results over time.

## **Testing**

### **HTML and CSS Validation**
- **HTML**: All HTML code passed through the [W3C HTML Validator](https://validator.w3.org/) with no errors, ensuring that the markup is standards-compliant.
- **CSS**: The CSS was validated with the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), confirming that all styles are syntactically correct.

### **JavaScript Validation**
- **JSHint**: The JavaScript was validated using [JSHint](https://jshint.com/) with no major errors. Key metrics included:
  - 10 functions in total, with the largest function containing 12 statements.
  - Cyclomatic complexity values within manageable limits for readability and performance.

### **Browser and Device Compatibility**
The project was tested across various browsers, including Chrome, Firefox, and Safari, to confirm consistent behavior. Mobile responsiveness was verified on devices of different screen sizes, ensuring that layout and functionality remained intact.

### **Lighthouse Performance Metrics**
Using Google Lighthouse, the application achieved high scores in the following areas:
- **Performance**: Efficient load times and resource usage.
- **Accessibility**: Well-designed contrast, alt-text for images, and screen-reader-friendly layout.
- **Best Practices**: High adherence to best practices for web performance and reliability.

### **Known Bugs and Fixes**
- **Radio Button Styling**: Initially, there were issues with radio button alignment across different browsers. This was fixed by standardizing button dimensions and spacing.
- **Responsive Layout Adjustments**: During testing on smaller screens, the two-column layout sometimes overlapped. Additional media queries resolved this, providing a balanced layout on all screen sizes.

### **Unfixed Bugs**
No remaining bugs have been identified at this time. However, further testing may reveal edge cases in user interaction that require additional adjustments.

## **Deployment**

The X-Files Quiz was deployed to GitHub Pages. Deployment steps:
1. Navigate to the Settings tab in the GitHub repository.
2. Select **Pages** under **Source** and choose the **Main branch**.
3. The quiz is accessible at: [Live Site](https://github.com/happystache/unit2-javascript.git).

## **Credits**

### **Content**
- Questions and trivia adapted from *The X-Files* show and fan community sources.
- Quiz instructions were inspired by similar JavaScript quiz tutorials on YouTube.

### **Media**
- The X-Files logo and background images were sourced from free, open-source image repositorz