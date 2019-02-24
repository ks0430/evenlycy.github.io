import uuid from 'uuid';

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
        id: "6561264a-3454-11e9-b210-d663bd873d93",
        name: "unity3d"
      }
    ],
    imgUrl:"https://images.unsplash.com/photo-1525459571112-472991c82d74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3375&q=80",
    text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",
    link:"#",
    githubLink:""
  }
]

export function getWroks() {
  return worksData;
}