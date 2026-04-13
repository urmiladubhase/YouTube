import React from 'react'
import Button from './Button'
import VideoContainer from './VideoContainer'


const MainContainer = () => {
  return (
    <div>
    <div className='flex'>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="Mixes"/>
      <Button name="Friends"/>
      <Button name="Comedy"/>
      <Button name="Movies"/>
      <Button name="Live"/>
      <Button name="Games"/>
      <Button name="Music"/>
      <Button name="Mixes"/>
      <Button name="Friends"/>
      <Button name="Comedy"/>
    
    </div>
    <div className='flex'>
      <VideoContainer/>
    </div>
    </div>

    
  )
}

export default MainContainer