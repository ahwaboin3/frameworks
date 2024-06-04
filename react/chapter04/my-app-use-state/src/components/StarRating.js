// src/components/StarRating.js
import {useState} from "react";
im

const createArray=length=>[...Array(length)]

export default function StarRating({totalStars=5}){
    const [selectedStars]=useState(3);
    return <>
      {createArray(totalStars).map((n,i)=>
      <Star key={i} selected={selectedStars>i} />)}
      <p>{selectedStars} of {totalStars} stars</p>
    </>
}