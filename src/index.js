import './styles/main.css';
import './styles/header.css';
import './styles/footer.css';
import createContactContainer from './pages/contact.js'
import createHomeContainer from './pages/home.js'
import createMenuContainer from './pages/menu.js'

(function () {
    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = '';

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

    createHomePage(contentContainer);
})();


function createHomePage(contentContainer) {
    const home = createHomeContainer()
    contentContainer.append(home.hero, home.aboutUs);
}

function createMenuPage(contentContainer) {

    const menu = createMenuContainer();
    contentContainer.append(menu.menuHeader, menu.menuContainer);
}

function createContactPage(contentContainer) {
    const contact = createContactContainer()
    contentContainer.append(contact.contentHeader, contact.contactContainer);
}
