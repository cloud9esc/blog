import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import './Layout.scss';

export default function Layout(props) {
  return (
    <div className="Layout">
      <div className="Layout__body">
        <AppHeader />
        {props.children}
      </div>
      <div className="Layout__footer">
        <AppFooter />
      </div>
    </div>
  );
}
