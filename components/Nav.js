import React from 'react';
import Link from 'next/link';

import './Nav.scss';

export default function Nav() {
  return (
    <div className="Nav">
      <ul className="Nav__wrapper">
        <li className="Nav__title">study</li>
        <li className="Nav__title">projects
                <ul className="Nav__subtitle">
            <li>
              <Link>
                <a>+ 신한카드 을지로 프로젝트</a>
              </Link>
            </li>
            <li>
              <Link>
                <a>+ foreground.one</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}