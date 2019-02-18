import React from 'react';
import sprite from "../../../images/icons/sprite.svg";
import './SocialLink.scss';


const socialLinkData = [
  {
    iconName: "facebook",
    iconLink: "https://www.facebook.com/EvelynChu0430",
  },
  {
    iconName: "linkedin",
    iconLink: "https://www.linkedin.com/in/evelyn-chu/",
  },
  {
    iconName: "github",
    iconLink: "https://github.com/ks0430",
  },
  {
    iconName: "twitter",
    iconLink: "https://twitter.com/evelyn_0430",
  }
]

const SocialLink = () => {
  return (
    <ul className="social-link d-flex">
    {socialLinkData.map(item => 
      <li className="social-link__item" key={item.iconName}>
        <a href={item.iconLink} target="_blank">
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
