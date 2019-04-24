import React from 'react';
import { getPost } from '../lib/repository';
import './post.scss';
import Head from 'next/head';

import Nav from '../components/Nav';
import Post from '../components/Post';

import Layout from '../components/Layout';

export default class PostPage extends React.Component {
  static async getInitialProps({ query }) {
    return { post: await getPost(query.id), selectedPost: query.id };
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>Foreground.one</title>
          <meta property="og:title" content={this.props.post.header.title} />
          <meta property="og:url" content={`foreground.one/post?id=${this.props.selectedPost}`} />
          <meta property="og:description" content={this.props.post.header.intro} />
          <meta property="og:image" content="https://foreground.one/static/assets/background-mobile.jpg" />
        </Head>
        <div className="PostPage">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Nav />
              </div>
              <div className="col-12">
                <Post
                  body={this.props.post.body}
                  header={this.props.post.header} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  };
};
