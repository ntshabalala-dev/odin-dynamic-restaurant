export default function greet(contentContainer) {
    console.log('okay in contact page');
    // 1st main div
    let hero = document.createElement('div');
    hero.setAttribute('class', 'content__hero');


    // ptag.textContent = 'wtf';



    // let body = document.querySelector('.content.container')
    // body.innerHTML = '';


    contentContainer.append(hero);
}

