import React from 'react'
import Button from './Button'

const ButtonsList = () => {
  const list=["All", "Live", "Gaming","Songs", "FootBall", "Cricket", "Friendship", "Funny", "Cooking", "Politics"];
  return (
    <div className="flex">
      {list.map((n,index)=><Button key={index} name={n}/>)}
      {/* <Button name="All" />
      <Button name="Live" />
      <Button name="Gaming" />
      <Button name="Songs" /> 
      <Button name="FootBall" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Cricket" />
      <Button name="Friendship" />
      <Button name="Funny" />
      <Button name="Cooking" />
      <Button name="Politics" /> */}
    </div>
  )
}

export default ButtonsList
