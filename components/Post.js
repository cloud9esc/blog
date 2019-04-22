import React from 'react';

import './Post.scss';
import 'highlight.js/styles/vs2015.css';


export default class Post extends React.Component {
  render() {
    const { body } = this.props;
    return (
      <div className='Post'>
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