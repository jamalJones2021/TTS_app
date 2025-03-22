
import "./App.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ImageComponent } from "./customcomponents/ImageComponent";

import { FooterComponent } from "./customcomponents/FooterComponent";

function App() {

  type ImageData ={
    id: number,
    src:string
}

  const data: ImageData[] = [

    {id:1,src:'src/assets/hungry.jpg'},{id:2,src:'src/assets/Paint.jpg'},{id:3,src:'src/assets/readbook.jpg'},{id:4,src:'src/assets/toilet.jpg'}
]

  const clickHandler = (id:number)=>{
    let text;
    
    switch(id){
      case 1:
        text = ' I am hungry can I have something to eat please.'
        break;
      case 2:
        text = 'I want to do some painting please.'
        break;
      case 3:
        text =  'I would like to do some reading please.'
        break;
      case 4:
        text = 'I need the toilet please.'
        break;
      default:
        text = 'Command does not exist'
    }

    const speak = (txt:string)=>{
      const utterance = new SpeechSynthesisUtterance(txt)
      speechSynthesis.speak(utterance)
    }

// 1 hungry 
//2 Paint
//3 read
//4 toilet
speak(text)

  }

  return (
  <div className=" h-screen flex flex-col justify-evenly">
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Carousel>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id}>
              <ImageComponent key={item.id} id={item.id} src={item.src} handler={clickHandler}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
    <FooterComponent />
    </div>
  );
}

export default App;
