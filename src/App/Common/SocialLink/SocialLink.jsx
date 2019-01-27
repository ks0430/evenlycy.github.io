import React from 'react';
import twitter from '../../../images/icons/twitter.svg';
import instagram from '../../../images/icons/instagram.svg';
import facebook from '../../../images/icons/facebook.svg';
import './SocialLink.scss';

const SocialLink = () => {
  return (
    <ul className="social-link">
      <li className="social-link__item">
        <a href="#">
          <img className="social-link__img" src={twitter} alt="twitter"/>
        </a>
      </li>
    </ul>
  )
}

export default SocialLink;
