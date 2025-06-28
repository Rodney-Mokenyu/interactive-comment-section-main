# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments.
- First-level comments should be ordered by their score, whereas nested replies are ordered by by time added.
- Replying to a comment adds the new reply to the bottom of the nested replies within that comment.

- Adding a new comment or reply uses the currentUser object from within the embedded data object in script.js.
- You can only edit or delete your own comments and replies.

- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [solution URL here](https://github.com/Rodney-Mokenyu/interactive-comment-section-main)
- Live Site URL: [live site URL](https://Rodney-Mokenyu.github.io/interactive-comment-section-main/

)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (for dynamic DOM manipulation, data handling, and interactive logic)
- Bootstrap 5 (for basic utilities, responsive classes, and form elements)


### What I learned

- Responsive Design Mastery: Deepened understanding of using rem units and media queries to create truly fluid and responsive layouts that adapt from mobile to desktop, including complex element reordering.einforce your own knowledge.
- Dynamic DOM Manipulation: Reinforced skills in creating, appending, and manipulating numerous HTML elements purely with JavaScript based on a data structure.
- Structured JavaScript for UI: Learned how to organize JavaScript code to separate concerns, manage dynamic content, and attach event listeners efficiently to dynamically created elements.
- Implementing Interactive Modals: Practiced building custom, accessible confirmation modals (for deletion) without relying on external libraries.
- Data-Driven UI: Gained experience in parsing and rendering structured JSON data to build a dynamic user interface.

To see how you can add code snippets, see below:


```css
/* Example of mobile-first and responsive layout adjustments using flexbox */
/* Mobile: Upvote section (vertical) next to main content */
.individual-comment-block,
.replyAndUpvoteDivWrapper {
  display: flex;
  flex-direction: column; /* Stack content and footer actions */
}

.comment-footer-actions {
  display: flex;
  flex-direction: row; /* Upvote and actions side-by-side */
  justify-content: space-between;
}

.upvote {
  flex-direction: row; /* Horizontal upvote block for mobile */
}

/* Desktop: Upvote section (vertical) at the left of content, buttons absolute */
@media (min-width: 48rem) {
  .individual-comment-block,
  .replyAndUpvoteDivWrapper {
    flex-direction: row; /* Main layout is horizontal */
  }
  .upvote {
    flex-direction: column; /* Vertical upvote block for desktop */
  }
  .comment-footer-actions {
    display: none; /* Hide mobile footer actions */
  }
  .action-button-wrapper { /* Re-position buttons for desktop */
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
  }
}

```
```js
// Example of dynamic element creation and event listener attachment
// This pattern was key for comments, replies, and their action buttons
const deleteButton = document.createElement('button');
deleteButton.className = 'btn text-danger';
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function() {
  showDeleteConfirmation(elementToDelete); // 'elementToDelete' passed dynamically
});
```


### Continued development

- Implement Comment/Reply Creation: Add the full logic for submitting new comments and replies, including updating the commentDataArray and re-rendering the UI.
- Implement Edit Functionality: Add the ability to edit existing comments/replies, converting them into editable text areas and saving changes.
- Upvote/Downvote Logic: Add interactive logic to increase/decrease scores and prevent multiple votes from the same user.
- Local Storage Persistence: Integrate localStorage to save the application's state, so comments and scores persist even after a browser refresh.
- Dynamic createdAt Timestamps: Replace the static "1 month ago", "2 weeks ago" with dynamically calculated "time since posted" based on actual timestamps.
- Backend Integration: Potentially convert this into a full-stack application by connecting it to a simple API for true CRUD operations and persistent data.
- State Management (Frameworks): Explore how a JavaScript framework like React or Vue.js could simplify state management and UI updates for a complex application like this.


### Useful resources

- MDN Web Docs - Invaluable resource for understanding core HTML, CSS, and JavaScript concepts, especially DOM manipulation and array methods.
- W3Schools Bootstrap 5 Tutorial - A quick reference for Bootstrap classes and responsive utilities.
- Flexbox Froggy - Excellent interactive game for mastering Flexbox.



## Author

- Website - [GitHub - Rodney-Mokenyu](https://github.com/Rodney-Mokenyu)
- Frontend Mentor - [ @Rodney-Mokenyu](https://www.frontendmentor.io/profile/Rodney-Mokenyu)




## Acknowledgments

A big thank you to Frontend Mentor for providing such a well-structured and challenging project! The detailed design specifications were excellent for practicing responsive web design.
