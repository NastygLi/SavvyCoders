import Navigation from './src/Navigation';
import Header from './src/Header';
import Header from './src/Content';
import Navigation from './src/Footer';


var State = {
    'Home': {
        'title': 'Welcome to Dinkos Website'
    },
    'Blog': {
        'title': 'Blog words n stuff'
    },
    'Contact': {
        'title': 'How to talk to me'
    },
    'Projects': {
        'title': 'da stuff dat makes moniez'
    }
};

var root = document.querySelector('#root')

function render(state) {
    var links;

    root.innerHTML = `
 ${Navigation(state)}
 ${originalContent(state)}
 ${Header(state.title)}
 ${Content(state)}
 `;

    var links = document.querySelectorAll('#navigation > ul > li > a');
    links[0].addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target)
        render(State.Home);
    });
    }
    var links = document.querySelectorAll('#navigation > ul > li > a');
    links[1].addEventListener('click', (event) => {
    event.preventDefault();

    render(State.Blog);
    });

    var links = document.querySelectorAll('#navigation > ul > li > a');
    links[2].addEventListener('click', (event) => {
    event.preventDefault();

    render(State.Contact);
    });
    var links = document.querySelectorAll('#navigation > ul > li > a');
    links[3].addEventListener('click', (event) => {
    event.preventDefault();

    render(State.Projects);
    });


    console.log(links);

    render(State.Home)
    ;
