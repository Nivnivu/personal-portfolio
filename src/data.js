import movieLand from './photos/movieland.JPG'
import smartHouse from './photos/smarthouse.JPG'
import cart from './photos/one-page-cart.JPG'
import card from './photos/card-war.JPG'
import mimo from './photos/mimo.JPG'
import freecode from './photos/htmlcssfreecodecamp.JPG'
import coursera from './photos/coursera.JPG'
import candyCrush from './photos/candy-crush.JPG'


const data = {
    projects: [
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
   name: 'Smart House',
   description: "App simulating smart house",
   image: smartHouse,
   link: "https://nivnivu.github.io/smart-house/",
   codeLink: "https://github.com/Nivnivu/smart-house"
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
   name: 'Candy Crush',
   description: "Clone of good old candy crush.",
   image: candyCrush,
   link: "https://nivnivu.github.io/barsh-crush-game/",
   codeLink: "https://github.com/Nivnivu/barsh-crush-game"
},

    ],
    certificets: [
        {
            id: '1',
            link: 'https://coursera.org/share/d5f7e1a56799d14609d0ea37c290b6e6' ,
            image: mimo,
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
    ]
}

export default data;