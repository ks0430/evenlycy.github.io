import React from 'react';
import twitter from '../../../images/icons/twitter.svg';
import instagram from '../../../images/icons/instagram.svg';
import facebook from '../../../images/icons/facebook.svg';
import sprite from "../../../images/icons/sprite.svg";
import './SocialLink.scss';


const socialLinkData = [
  {
    iconName: "facebook",
    iconLink: "#",
  },
  {
    iconName: "instagram",
    iconLink: "#",
  },
  {
    iconName: "twitter",
    iconLink: "#",
  },
]

const SocialLink = () => {
  return (
    <ul className="social-link d-flex">
    {socialLinkData.map(item => 
      <li className="social-link__item" key={item.iconName}>
        <a href={item.iconLink}>
          <svg className="social-link__icon">
            <use xlinkHref={`${sprite}#icon-${item.iconName}`} />
          </svg>
        </a>
      </li>
      )}
    </ul>
  )
}

export default SocialLink;
