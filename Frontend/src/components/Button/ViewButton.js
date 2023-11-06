import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const ViewButton = props =>
  
    <Link
      className={[
        'button',
        `button--${props.design}`,
        `button--${props.mode}`
      ].join(' ')}
      to={props.link}
    >
      {props.children}
    </Link>

export default ViewButton;
