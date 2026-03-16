import contactPage from './pages/contact.js'

console.log('sasa');




document.querySelector('.header__buttons').addEventListener('click', (e) => {
    if (!e.target.textContent || e.target.textContent == '') {
        return
    }

    // clear the content container div
    let contentContainer = document.querySelector('.content')
    contentContainer.innerHTML = '';

    console.log();

    switch (e.target.textContent.toLowerCase()) {
        case "home":

            break;
        case "menu":

            break;
        case "contact":
            console.log('hell');

            contactPage(contentContainer);
            break;

        default:
            break;
    }

})