import React from 'react';
import './AppFooter.scss';

export default function AppFooter() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="AppFooter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            Copyrightⓒ{year} by Minyeong Lim. <br />All Page content is property of Minyeong Lim.
          </div>
        </div>
      </div>
    </div>
  )
}