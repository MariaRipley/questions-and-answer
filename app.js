'use strict';

const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(ev) {
        const question = ev.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});