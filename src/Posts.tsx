import React from "react";
import { fetchMainPosts } from "./api/api";
import MetaInfo from "./MetaInfo";

interface MainPost {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  time: number;
  title: string;
  type: string;
  url: string;
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
      <React.Fragment>
        <ul>
          {this.state.posts.map((post: MainPost, index) => {
            return (
              <li key={index}>
                <div className="post-summary">
                  <a className="link" href={post.url}>
                    {post.title}
                  </a>
                  <MetaInfo
                    metadata={{
                      by: post.by,
                      descendants: post.descendants,
                      time: post.time,
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
