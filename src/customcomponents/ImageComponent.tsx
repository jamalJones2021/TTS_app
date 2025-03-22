
type ImageProps = {
  id: number,
  src: string,
  handler: (id:number) => void

}

export const ImageComponent :React.FC<ImageProps> = ({src, id, handler})=>{ 
  return (
    <div className='flex justify-center items-center'>
            <img src={src} width="200px" height="200px" onClick={()=>handler(id)}/>
    </div>
  )
}
