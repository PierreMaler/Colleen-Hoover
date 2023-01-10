import React, {useState} from 'react'
import {SliderData} from './SliderData'
import styles from '../styles/Home.module.css';
import ReactPlayer from 'react-player';

function ResponsiveePlayer() {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=5IozV3yXXyc'
            width='100%'
            height='100%'
          />
        </div>
      )
    }

export default ResponsiveePlayer;