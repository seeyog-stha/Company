import React from 'react'
import Carousel from '../src/component/Carousel'
import Company from '../src/component/Company'
import Blogs from "../src/component/Blogs"
export default function Home() {
  return (
    <div>
      <Carousel/>
      <Company/>
      <Blogs></Blogs>
    </div>
  )
}
