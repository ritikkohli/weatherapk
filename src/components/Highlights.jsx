import React from 'react';
import '../styles/highlights.css';

export default function Highlights() {
  return (
    <div className='highlights'>
            <div className='column'>
              <div className='highlight-card'>
                <p>UV index</p>
                <img className='uv-index' alt='uv-index'/>
              </div>
              <div className='highlight-card'>
                <p>UV index</p>
                <img className='uv-index' alt='uv-index'/>
              </div>
            </div>

            <div className='column'>
              <div className='highlight-card'>
                <p>UV index</p>
                <img className='uv-index' alt='uv-index'/>
              </div>
              <div className='highlight-card'>
                <p>UV index</p>
                <img className='uv-index' alt='uv-index'/>
              </div>
            </div>

            <div className='column'>
              <div className='highlight-card'>
                <p>UV index</p>
                <img className='uv-index' alt='uv-index'/>
              </div>
              <div className='highlight-card'>
                <p>UV index</p>
                <img className='uv-index' alt='uv-index'/>
              </div>
            </div>
          </div>
  )
}
