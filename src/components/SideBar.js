import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //called Early retirn pattern
  if(!isMenuOpen)return null;

  //instead of early return can use conditional rendering also
  return (
    <div className="col-span-1 p-5 shadow-lg ">
      <ul>
        <li> Home</li>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
    </div>
  )
}

export default SideBar
