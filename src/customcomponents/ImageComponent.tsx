import {useState} from 'react'

export const ImageComponent = ({src, id, handler})=>{ 
  return (
    <div className='flex justify-center items-center'>
            <img src={src} width="200px" height="200px" id={id} onClick={()=>handler(id)}/>
    </div>
  )
}
