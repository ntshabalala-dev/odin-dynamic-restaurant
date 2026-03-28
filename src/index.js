import './styles/main.css';
import './styles/header.css';
import './styles/footer.css';
import createContactContainer from './pages/contact.js'
import createHomeContainer from './pages/home.js'
import createMenuContainer from './pages/menu.js'

(function () {
    const contentContainer = document.querySelector('.content');
    //contentContainer.innerHTML = '';

    document.querySelector('.header__buttons').addEventListener('click', (e) => {
        if (!e.target.textContent || e.target.textContent == '') {
            return
        }

        contentContainer.innerHTML = '';
        console.log();

        switch (e.target.textContent.toLowerCase()) {
            case "home":
                createHomePage(contentContainer);
                break;
            case "menu":
                createMenuPage(contentContainer);
                break;
            case "contact":
                createContactPage(contentContainer);
                break;

            default:
                break;
        }

    })

    //createHomePage(contentContainer);
})();


function createHomePage(contentContainer) {
    const home = createHomeContainer()
    contentContainer.append(home.hero, home.aboutUs);
}

function createMenuPage(contentContainer) {

    const menu = createMenuContainer();
    contentContainer.append(menu.menuHeader, menu.menuContainer);
    linkHelper();

}

function createContactPage(contentContainer) {
    const contact = createContactContainer()
    contentContainer.append(contact.contentHeader, contact.contactContainer);
}


function linkHelper() {
    const links = document.querySelectorAll('.menu-container__options--section a');
    const firstLink = document.querySelector('.menu-container__options--section:nth-child(1) a');

    firstLink.classList.add('active');

    links.forEach(link => {
        link.addEventListener('click', function () {
            // 1. Find the currently active tag
            const activeTag = document.querySelector('a.active');

            if (activeTag) {
                console.log('Previously active:', activeTag.textContent);
                // Remove the class from the old active tag
                activeTag.classList.remove('active');
            }

            // 2. Add the active class to the clicked tag
            this.classList.add('active');
        });
    });
}