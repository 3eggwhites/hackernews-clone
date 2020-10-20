import React from "react";
import { fetchMainPosts } from "./api/api";

interface MainPost {
  by: String;
  descendants: Number;
  id: Number;
  kids: Number[];
  time: Number;
  title: String;
  type: String;
  url: String;
}

export default class Posts extends React.Component {
  state = {
    posts: [],
    type: "",
  };

  componentDidMount() {
    fetchMainPosts("top").then((data: MainPost) => {
      console.log(data);
      this.setState({
        posts: data,
      });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map((post: MainPost, index) => {
            return (
              <li key={index}>
                {JSON.stringify(post.title)}
                {JSON.stringify(post.by)}
                {JSON.stringify(post.descendants)}
                {JSON.stringify(post.time)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
