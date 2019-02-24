import React, { Component } from 'react';
import Work from './Work/Work';
import MainTitle from '../../Common/MainTitle/MainTitle';

export default class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <MainTitle 
          title="Portfolio"
          path="Home / Portfolio"
        />
        <Work />
      </section>
    )
  }
}
