// open menu
const menu = document.querySelector('.menu__backdrop');
function openMenu() {
    menu.classList.toggle('open-menu');
}

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        for (let i of faqs) {
            if ( i !== faq && i.classList.contains('open')) {
                i.classList.remove('open');
            }
        }
        faq.classList.toggle('open');
    })
})
