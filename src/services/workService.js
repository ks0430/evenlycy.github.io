import uuid from 'uuid';
import vrmainmed from '../images/projectImgs/vrmainmed.png';

const worksData = [
  {
    id: uuid(),
    title:"Music Store",
    type:"web app",
    tags:[
      {
        id: "65611c7c-3454-11e9-b210-d663bd873d93",
        name: "react"
      }
    ],
    imgUrl:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    text:"A music store demo. I developed the front-end using react, User can search music, select music by genres, sort by unique tags, login and register. Tech stack: react, bootstrap4, lodash, jwt. Deployed on github & heroku.",
    link:"https://cy-music-store-client.herokuapp.com/movies",
    githubLink:"https://github.com/ks0430/react-music-store",
  },
  {
    id:uuid(),
    title:"Weather App",
    type:"web app",
    tags:[
      {
        id: "65611c7c-3454-11e9-b210-d663bd873d93",
        name: "react"
      },
      {
        id: "65611f74-3454-11e9-b210-d663bd873d93",
        name: "nodejs"
      }
    ],
    imgUrl:"https://images.unsplash.com/photo-1532300481631-0bc14f3b7699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    text:"A simple weather app. Get weather current & forecast data by city name. Use react, redux, redux-thunk, node.js, express, open weather api. Deployed on github & heroku.",
    link:"https://www.moecoding.com/weather-app-react/",
    githubLink:"https://github.com/ks0430/weather-app-react"
  },
  {
    id:uuid(),
    title:"VR SIMULATION TEACHING SOFTWARE",
    type:"unity",
    tags:[
      {
        id: "6561264a-3454-11e9-b210-d663bd873d93",
        name: "unity3d"
      }
    ],
    imgUrl:vrmainmed,
    text:"A virtual simulation teaching software. I developed the front-end & assets processing. Tech stack: Unity3D, UGUI, Unity Editor, 3DMax, post processing.",
    link:"https://www.moecoding.com/weather-app-react/",
    githubLink:""
  },
  {
    id:uuid(),
    title:"Portfolio Theme",
    type:"web app",
    tags:[
      {
        id: "c123f872-3828-11e9-b210-d663bd873d93",
        name: "javascript"
      },
    ],
    imgUrl:"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80",
    text:"A portfolio theme. Use vanilla javascript, css3, fully responsive and flexible, well animated.",
    link:"https://www.moecoding.com/simple-js-responsive-blog",
    githubLink:"https://github.com/ks0430/simple-js-responsive-blog"
  },
  {
    id:uuid(),
    title:"Tour Booking Theme",
    type:"web app",
    tags:[
      {
        id: "65611c7c-3454-11e9-b210-d663bd873d93",
        name: "react"
      }
    ],
    imgUrl:"https://images.unsplash.com/photo-1524527459261-54b703ac0fa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    text:"A tour booking theme. Still in working.",
    link:"https://www.moecoding.com/css-theme-naturo",
    githubLink:"https://github.com/ks0430/hotel-theme-trillo"
  },
  {
    id:uuid(),
    title:"Hotel Theme",
    type:"web app",
    tags:[
      {
        id: "65611c7c-3454-11e9-b210-d663bd873d93",
        name: "react"
      }
    ],
    imgUrl:"https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    text:"A hotel booking theme. Use react & css3, fully responsive & flexible.",
    link:"https://www.moecoding.com/hotel-theme-trillo/",
    githubLink:"https://github.com/ks0430/css-theme-naturo"
  },
  {
    id:uuid(),
    title:"Memmmm",
    type:"web game",
    tags:[
      {
        id: "c123f872-3828-11e9-b210-d663bd873d93",
        name: "javascript"
      }
    ],
    imgUrl:"https://images.unsplash.com/photo-1522617804560-8454764f1815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80",
    text:"A pair-up mini web game. Use vanilla javascript. Have fun!",
    link:"https://www.moecoding.com/memmmm/",
    githubLink:"https://github.com/ks0430/memmmm"
  }
]

export function getWroks() {
  return worksData;
}