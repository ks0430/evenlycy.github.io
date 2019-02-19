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
    description:"A music store description.",
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
    description:"A weather app description.",
  }
]

export function getWroks() {
  return worksData;
}