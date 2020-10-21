import React from "react";
import moment from "moment";

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

export default MetaInfo;
