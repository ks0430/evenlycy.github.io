const worksData = [
  {
    title:"Music Store",
    type:"webapp",
    tags:[
      "react",
    ],
    imgUrl:"https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    description:"A music store description.",
  }
  {
    title:"Weather App",
    type:"webapp",
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