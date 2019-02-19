import uuid from 'uuid';

const worksData = [
  {
    id: uuid(),
    title:"Music Store",
    type:"web app",
    tags:[
      "react",
    ],
    imgUrl:"https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    text:"A music store description. Sed nec ex malesuada, pulvinar mi at, faucibus arcu. Etiam nec ipsum sodales, aliquam arcu at, venenatis felis. Vivamus condimentum turpis enim, sit amet mollis est semper vel. Mauris sem dui.",
  },
  {
    id:uuid(),
    title:"Weather App",
    type:"web app",
    tags:[
      "react",
      "nodejs"
    ],
    imgUrl:"https://images.unsplash.com/photo-1424274414501-ce96d567b5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",
  }
]

export function getWroks() {
  return worksData;
}