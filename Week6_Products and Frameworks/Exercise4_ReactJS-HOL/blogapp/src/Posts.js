import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return (
      <div>
        <h1>All Posts</h1>
        {
          this.state.posts.map(post => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        }
      </div>
    );
  }

  componentDidCatch(error, info) {
    alert("An error occurred");
  }
}

export default Posts;
