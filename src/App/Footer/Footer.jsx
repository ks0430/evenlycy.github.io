import React, { Component } from 'react';
import SocialLink from '../Common/SocialLink/SocialLink';
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer d-flex align-items-center">
        <div className="copyright mr-auto">2019 Designed By Evelyn Chu.</div>
        <SocialLink />
      </footer>
    )
  }
}
