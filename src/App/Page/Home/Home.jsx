import React, { Component } from 'react';
import Page from '../Page';
import MainTitle from '../../Common/MainTitle/MainTitle';
import "./Home.scss";

export default class Home extends Page {
  render() {
    return (
      <section className="home page">
        <MainTitle
          title="I'm Evelyn Chu"
          path="Front-end developer"
        />
      </section>
    )
  }
}
