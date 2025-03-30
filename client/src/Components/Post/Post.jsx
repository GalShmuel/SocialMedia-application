import React from 'react'
import './Post.css'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { FaRegComment } from "react-icons/fa6";
import { TbShare3 } from "react-icons/tb";


const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />
      <div className='PostReact'>
        {data.liked ? <GoHeartFill size={24} /> : <GoHeart size={24} />}
        <FaRegComment size={24} />
        <TbShare3 size={24} />
      </div>

      <span> {data.likes} likes</span>
      <div className="Detail">
        <span><b>{data.name} </b></span>
        <span> {data.desc}</span>

      </div>
    </div>
  )
}

export default Post