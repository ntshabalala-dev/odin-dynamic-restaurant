import chefImage from '../images/Home/Chef.png'

export default function createHeroContainer() {
    const hero = document.createElement('div');
    hero.setAttribute('class', 'content__hero');

    const heroText = document.createElement('p');
    heroText.setAttribute('id', 'content__hero-text');
    heroText.innerHTML = 'WELCOME TO THE<br> RUSTIC OLIVE';
    const heroSubText = document.createElement('p');
    heroSubText.textContent = 'Experience authentic Mediterranean flavors in a cozy, welcoming atmosphere';
    const heroButton = document.createElement('button');
    heroButton.textContent = "Make a reservation";

    hero.append(heroText, heroSubText, heroButton);

    return {
        hero: hero,
        aboutUs: createAboutUsContainer()
    };
}

function createAboutUsContainer() {
    // Create the main container
    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.className = 'about-us grid-container container';

    // Create first grid item with chef image
    const gridItem1 = document.createElement('div');
    gridItem1.className = 'grid-item';

    const chefImg = document.createElement('img');
    chefImg.id = 'chef';
    chefImg.src = chefImage;
    chefImg.alt = 'Chef';

    gridItem1.appendChild(chefImg);

    // Create second grid item with text content
    const gridItem2 = document.createElement('div');
    gridItem2.className = 'grid-item';

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome to The Rustic Olive, where traditional Mediterranean flavors meet modern culinary techniques. Our passion for authentic cuisine has been the cornerstone of our restaurant since 2018.';

    gridItem2.appendChild(heading);
    gridItem2.appendChild(paragraph);

    // Assemble the structure and append to body
    aboutUsContainer.appendChild(gridItem1);
    aboutUsContainer.appendChild(gridItem2);

    return aboutUsContainer;
}
