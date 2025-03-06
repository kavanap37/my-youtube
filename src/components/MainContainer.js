import React from 'react'
import ButtonsList from './ButtonsList'
import VideosContainer from './VideosContainer'

const MainContainer = () => {
  return (
    <div className="col-span-11">
      <ButtonsList/>
      <VideosContainer/>
    </div>
  )
}

export default MainContainer
