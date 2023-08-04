import React from "react";
import PropTypes from "prop-types";
import AlbumnList from "./components/AlbumnList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const list = [
    {
      id: 1,
      imageUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg",
      title: 'Nhạc Việt "lâu phai" và gây nghiện hoài hoài',
    },
    {
      id: 2,
      imageUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/1/a/8/51a8d28177590b9f280cea854c81158d.jpg",
      title: "Gối đầu vào nhạc trong những ngày mưa rơi",
    },
    {
      id: 3,
      imageUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/2/e/3/92e34e8a92ba589ba41c078bfbbf57f0.jpg",
      title: "Ở đâu có những bản hit cực chill, vừa nghe vừa feel",
    },
    {
      id: 4,
      imageUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/3/8/3/338314b32165c5e44d6c7ec302d3fdfb.jpg",
      title: "Thả mình cùng những giai điệu V-POP nhẹ nhàng",
    },
    {
      id: 5,
      imageUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg",
      title: "Không ồn ã, không vội vàng, cùng thư giãn với âm nhạc",
    },
  ];

  return (
    <div>
      <AlbumnList list={list} />
    </div>
  );
}

export default AlbumFeature;
