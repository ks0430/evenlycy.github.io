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
    text:"A music store description. Sed nec ex malesuada, pulvinar mi at, faucibus arcu. Etiam nec ipsum sodales, aliquam arcu at, venenatis felis. Vivamus condimentum turpis enim, sit amet mollis est semper vel. Mauris sem dui.",
    link:"https://github.com/ks0430/react-music-store",
    githubLink:"",
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
    text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",
    link:"https://www.moecoding.com/weather-app-react/",
    githubLink:""
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
    text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",
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
    text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",
    link:"https://www.moecoding.com/simple-js-responsive-blog",
    githubLink:""
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
    text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",
    link:"https://www.moecoding.com/css-theme-naturo",
    githubLink:""
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
    text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",
    link:"https://www.moecoding.com/hotel-theme-trillo/",
    githubLink:""
  }
]

export function getWroks() {
  return worksData;
}