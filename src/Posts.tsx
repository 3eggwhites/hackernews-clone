import React from "react";
import moment from "moment";
import { fetchMainPosts } from "./api/api";

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

interface Metadata {
  by: string;
  descendants: number;
  time: number;
}

const MetaInfo: React.FC<{ metadata: Metadata }> = ({ metadata }) => {
  return (
    <div className="meta-info">
      <span>
        by {metadata.by} on
        {" " + moment.unix(metadata.time).format("DD/MM/YYYY, hh:mm A")}
        {metadata.descendants && " with " + metadata.descendants + " comments"}
      </span>
    </div>
  );
};

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
                <div className="bg-light post-summary">
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
      </div>
    );
  }
}
