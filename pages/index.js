import React from 'react';
//import Link from 'next/link';

import './index.scss';
import AppHeader from '../components/AppHeader';
import Nav from '../components/Nav';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="IndexPage">
        <AppHeader />
        <Nav />
      </div>
    );
  };
};