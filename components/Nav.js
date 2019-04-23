import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import './Nav.scss';

const navmap = [
  {
    title: 'study',
    category: 'study',
    children: [
      {
        title: 'rust',
        category: 'rust'
      }
    ]
  },
  {
    title: 'projects',
    category: 'projects',
    children: [
      {
        title: '신한카드 을지로3가 프로젝트',
        category: 'project-euljiro'
      },
      {
        title: 'foreground.one',
        category: 'project-foregroundone'
      }
    ]
  }
]

function Nav({ router }) {
  const selectedCategory = router.query.category;
  return (
    <div className="Nav">
      <ul className="Nav__wrapper">
        {navmap.map(item => (
          <li
            key={item.category}
            className={`Nav__title ${
              item.category === selectedCategory
              ? "Nav__title--active"
              : ""
            }`}
          >
            <Link href={{
              pathname: '/',
              query: {
                category: item.category
              }
            }}>
              <a>
                {item.title}
              </a>
            </Link>
            <ul>
              {item.children.map(child => (
                <li 
                  key={child.category}
                  className={`Nav__subtitle ${
                    child.category === selectedCategory
                    ? "Nav__subtitle--active"
                    : ""
                  }`}>
                  <Link
                    href={{
                      pathname: '/',
                      query: { category: child.category }
                    }}>
                    <a>
                      + {child.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withRouter(Nav);