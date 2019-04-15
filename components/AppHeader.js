import React from 'react';
import Link from 'next/link';

import "./AppHeader.scss"

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className="AppHeader">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link href="/">
                <a className="AppHeader__head">foreground.one</a>
              </Link>
            </div>
            <div className="col-12 AppHeader__border"/>
          </div>
        </div>
      </div>
    )
  }
}