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
    imgUrl:"https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    text:"A music store description. Sed nec ex malesuada, pulvinar mi at, faucibus arcu. Etiam nec ipsum sodales, aliquam arcu at, venenatis felis. Vivamus condimentum turpis enim, sit amet mollis est semper vel. Mauris sem dui.",
    link:"https://github.com/ks0430/react-music-store"
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
    imgUrl:"https://i.imgur.com/0IhUmE2.jpg",
    text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",
    link:"#"
  }
]

export function getWroks() {
  return worksData;
}