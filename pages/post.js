import React from 'react';
import { getPost } from '../lib/repository';
import './post.scss';
import AppHeader from '../components/AppHeader';
import Nav from '../components/Nav';
import Post from '../components/Post';
import AppFooter from '../components/AppFooter';

export default class PostPage extends React.Component {

  static async getInitialProps({ query }) {

    return { post: await getPost(query.id) };
  }
  render() {
    return (
      <div className="PostPage">
        <AppHeader />
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
        <AppFooter />
      </div>
    );
  };
};