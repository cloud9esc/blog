import React from 'react';
import Head from 'next/head';
//import Link from 'next/link';
import { loadPosts } from '../lib/repository';
import './index.scss';
import Nav from '../components/Nav';
import Recents from '../components/Recents';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {

  static async getInitialProps({ query }) {
    return {
      posts: await loadPosts({ category: query.category }),
    };
  }
  render() {
    return (
      <Layout>
        <Head>
          <meta property="og:title" content="foreground.one" />
          <meta property="og:url" content="foreground.one" />
          <meta property="og:description" content="프로그래밍 기술 공부와 아카이빙을 위한 블로그입니다." />
          <meta property="og:image" content="foreground.one/static/assets/blog-favicon/original.png" />
        </Head>
        <div className="IndexPage">
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
        </div>
      </Layout>
    );
  };
};