import React, {useCallback} from 'react';
import propTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import {Link} from "react-router-dom";
import './style.css';




function Header(props) {
  const cn = bem('Header');





  return (
    <div className={cn()}>

      <Link to={"/"}><img
        alt='Logo'
        className={cn('logo')}
        // src="https://static.wixstatic.com/media/b3007b_10c773d042fa462385ee9aaf02bcd49d~mv2.png/v1/fill/w_408,h_129,al_c,lg_1,q_85,enc_auto/b3007b_10c773d042fa462385ee9aaf02bcd49d~mv2.png"
        src="/img/logo.webp"
      />
      </Link>
      <div className={cn('right')}>
        <div className={cn('owners')}>
          <img
            alt='owner'
            className={cn('owner')}
            // src="https://static.wixstatic.com/media/b3007b_083568ee614744e0bdcc8c9443670b40~mv2.jpg/v1/fill/w_104,h_72,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b3007b_083568ee614744e0bdcc8c9443670b40~mv2.jpg"
            src="/img/rus-fer.webp"
          />
          <img
            alt='owner'
            className={cn('owner')}
            // src="https://static.wixstatic.com/media/b3007b_c2ff984ca503455fb68119327ee17bfd~mv2.png/v1/fill/w_122,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b3007b_c2ff984ca503455fb68119327ee17bfd~mv2.png"
            src="/img/rus-pir.webp"
          />
          <img
            alt='owner'
            className={cn('owner')}
            // src="https://static.wixstatic.com/media/b3007b_a30eb83c36834e669c1898b98b4dac26~mv2.png/v1/fill/w_104,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b3007b_a30eb83c36834e669c1898b98b4dac26~mv2.png"
            src="/img/disneyland.webp"
          />
          <img
            alt='owner'
            className={cn('owner')}
            // src="https://static.wixstatic.com/media/b3007b_5c3f23f8296b4200a9a768825bf876c4~mv2.jpg/v1/crop/x_0,y_0,w_157,h_95/fill/w_116,h_68,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b3007b_5c3f23f8296b4200a9a768825bf876c4~mv2.jpg"
            src="/img/tsz.webp"
          />
        </div>
          <div className={cn('links')}>
            {props.links.map(item => <Link key={item.title} to={item.link}>{item.title}</Link>)}
          </div>
        </div>


    </div>
  )
}

Header.propTypes = {
  links: propTypes.array
}

Header.defaultProps = {

}

export default React.memo(Header);
