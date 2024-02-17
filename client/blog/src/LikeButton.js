import React, { useState } from "react";
function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button
      class="thumbs-up-button"
      onClick={() => {
        setLikes(likes + 1);
      }}
    >
      {likes}
      <span class="thumb-icon">&#x1F44D;</span>
    </button>
  );
}
export default LikeButton;
