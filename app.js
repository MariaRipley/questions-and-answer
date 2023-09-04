'use strict';

// Using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function() {
        question.classList.toggle('show-text');
    })
});

// Traversing the DOM

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(ev) {
//         const question = ev.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });