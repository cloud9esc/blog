import React from 'react';
import Link from 'next/link';

import './Recents.scss';

export default function Recents({ posts }) {

  return (
    <div className="Recents">
      <div className="row">
        {posts.headers.map(header => {
          return (
            <div key={header.id} className="col-12 col-md-4">
              <RecentsCard header={header} />
            </div>)
        })}
      </div>
    </div>
  )
}


function RecentsCard({ header }) {
  return (
    <div className="RecentsCard">
      <Link href={{
        pathname: '/contents/post',
        query: { id: header.id },
      }}>
        <a className="RecentsCard__box">
          <div className="RecentsCard__title">
            {header.title}
          </div>
          <div className="RecentsCard__date">
            {header.date}
          </div>
          <div className="RecentsCard__intro">
            {header.intro}
          </div>
        </a>
      </Link>
    </div>
  )
}