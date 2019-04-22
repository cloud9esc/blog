import React from 'react';

import './Post.scss';
import 'highlight.js/styles/vs2015.css';

export default class Post extends React.Component {
  render() {
    const { header, body } = this.props;
    return (
      <div className='Post'>
        <div className="Post__header">
          <h1>{header.title}</h1>
          <span>{header.date}</span>
        </div>
        <div
          className='Post__body'
          dangerouslySetInnerHTML={{
            __html: body
          }}
        />
      </div>
    );
  }
}