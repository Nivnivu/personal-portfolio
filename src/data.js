import movieLand from './photos/movieland.JPG'
import smartHouse from './photos/smarthouse.JPG'
import cart from './photos/one-page-cart.JPG'
import card from './photos/card-war.JPG'
import mimo from './photos/mimo.JPG'
import freecode from './photos/htmlcssfreecodecamp.JPG'
import coursera from './photos/coursera.JPG'
import candyCrush from './photos/candy-crush.JPG'
import notes from './photos/notes.JPG'
import mimoWeb from './photos/mimo-web.JPG'
import mimoSql from './photos/mimo-sql.JPG'
import udemy from './photos/udemy-full-stack.jpg'
import campus from './photos/campus-il-python.png'
import snake from './photos/snake.JPG'
import pong from './photos/pong.JPG'
import pacman from './photos/pacman.JPG'
import notesIcp from './photos/notes-icp.JPG'
import dbank from './photos/dbank.JPG'
import rsi from './photos/cryptorsi.JPG'


const data = {
    react: [
    {
     id: '1',
    name: 'MovieLand',
    description: "App connected to movies API fetching and modeling data.",
    image: movieLand,
    link: "https://nivnivu.github.io/react-movie-api",
    codeLink: "https://github.com/Nivnivu/react-movie-api/tree/master"
},
{
    id: '2',
   name: 'Candy Crush',
   description: "Clone of good old candy crush.",
   image: candyCrush,
   link: "https://nivnivu.github.io/barsh-crush-game/",
   codeLink: "https://github.com/Nivnivu/barsh-crush-game"
},
{
    id: '3',
   name: 'One Page Cart',
   description: "Cart app using conditinal rendering",
   image: cart,
   link: "https://nivnivu.github.io/react_app/",
   codeLink: "https://github.com/Nivnivu/react_app/tree/master"
},
{
    id: '4',
   name: 'War Card Game',
   description: "Known war card game with react.",
   image: card,
   link: "https://nivnivu.github.io/war_card_game/",
   codeLink: "https://github.com/Nivnivu/war_card_game"
},
{
    id: '5',
   name: 'Smart House',
   description: "App simulating smart house",
   image: smartHouse,
   link: "https://nivnivu.github.io/smart-house/",
   codeLink: "https://github.com/Nivnivu/smart-house"
},

{
    id: '6',
   name: 'Notes App',
   description: "A simple CRUD note App with React",
   image: notes,
   link: "https://nivnivu.github.io/notes/",
   codeLink: "https://github.com/Nivnivu/notes"
},
    

    ],
    javascript: [
    {   
        id: '1',
        name: 'Pong Game',
        description: "Pong game made with javascript, html and css",
        image: pong,
        link: "https://nivnivu.github.io/pong-game/",
        codeLink: "https://github.com/Nivnivu/pong-game"
    }, 
    {    id: '2',
        name: 'Pacman Game',
        description: "Simple version of Pacman made with javascript, css and html",
        image: pacman,
        link: "https://nivnivu.github.io/pacman-game/",
        codeLink: "https://github.com/Nivnivu/pacman-game"
    },
    {    id: '3',
        name: 'Snake Game',
        description: "Old school snake game made with javascript, css and html",
        image: snake,
        link: "https://nivnivu.github.io/snake-game/",
        codeLink: "https://github.com/Nivnivu/snake-game"
    },
    
    ],
    bloackchain: [
        {    id: '1',
        name: 'Dbank app',
        description: "all data moves throw the icp blockchain network",
        image: dbank,
        codeLink: "https://github.com/Nivnivu/dbank"
    },
        {    id: '2',
        name: 'Notes ICP',
        description: "notes app with ICP runs as secured backend",
        image: notesIcp,
        codeLink: "https://github.com/Nivnivu/notes-icp"
    },
    

    ],
    mern : [
        {    id: '1',
        name: 'Crypto Position Manager',
        description: "data is scraped from known exchange, than procced deeply on server side with complicated formulas decideing whice poistion to go in the crypto market.",
        image: rsi,
        link: "https://rsicalc.herokuapp.com/"
    },
    ],

    certificets: [
        {
            id: '1',
            link: 'https://www.udemy.com/certificate/UC-008e28ba-d63b-4585-bd93-ad8f8c99f27a/' ,
            image: udemy,
        },
        {
            id: '2',
            link: 'https://www.freecodecamp.org/certification/Nivbarsh/responsive-web-design' ,
            image: freecode,
        },
        {
            id: '3',
            link: 'https://coursera.org/share/d5f7e1a56799d14609d0ea37c290b6e6' ,
            image: coursera,
        },
        {
            id: '4',
            link: 'https://nivnivu.github.io/personal-portfolio/static/media/mimo-web.0d53f55ab726acf01184.JPG' ,
            image: mimoWeb,
        },{
            id: '5',
            link: 'https://nivnivu.github.io/personal-portfolio/' ,
            image: mimo,
        },{
            id: '6',
            link: 'https://nivnivu.github.io/personal-portfolio/static/media/mimo-sql.136aa7edc11cece06b3f.JPG' ,
            image: mimoSql,
        }, {
            id: '7',
            link: 'https://courses.campus.gov.il/certificates/30472d809b114cf8b8115b202412ee82',
            image: campus,
        }
        
    ]
}

export default data;