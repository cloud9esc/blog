import React from 'react';
//import Link from 'next/link';
import { loadPosts } from '../lib/repository';
import './index.scss';
import AppHeader from '../components/AppHeader';
import Nav from '../components/Nav';
import Recents from '../components/Recents';
import AppFooter from '../components/AppFooter';

export default class IndexPage extends React.Component {

  static async getInitialProps({ query }) {
    return {
      posts: await loadPosts({ category: query.category }),
    };
  }
  render() {
    return (
      <div className="IndexPage">
        <AppHeader />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Nav />
            </div>
            <div className="col-12">
              <Recents posts={this.props.posts} />
            </div>
          </div>
        </div>
        <AppFooter />
      </div>
    );
  };
};