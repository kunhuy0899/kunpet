import React,{useState} from 'react';
import ImgComp from './ImgComp';
import "./SlideShow.scss";
import i1 from './img/1.jpg';
import i2 from './img/2.jpg';
import i3 from './img/3.jpg';
import i4 from './img/4.jpg';
import i5 from './img/5.jpg';
import i6 from './img/6.jpg';





function SlideShow() {
    let sliderArr=[<ImgComp src={i1}/>,<ImgComp src={i2}/>,<ImgComp src={i3}/>,<ImgComp src={i4}/>,<ImgComp src={i5}/>,<ImgComp src={i6}/>,];
    const [x,setX]=useState(0);

    const goLeft =  () =>{
        x===0?setX(-100* (sliderArr.length-1)):setX(x+100);
    };
    const goRight =  () =>{
       x===-100*(sliderArr.length-1)?setX(0):setX(x-100);
    };
    const showslide=()=>{
        let i=0;
        if(x===0){
            setX(-100* (sliderArr.length-1))
        }
        else{
            setX(x+100)
        }
    }
    return (
        <div className="slider">
          {
              sliderArr.map((item,index)=>{
                  return (
                      <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                          {item}
                      </div>
                  )
              })
          }
          <button id="goLeft" onClick={goLeft}><i className="fas fa-chevron-left"></i></button>
          <button id="goRight" onClick={goRight}><i className="fas fa-chevron-right"></i></button>
        </div>
    )
}

export default SlideShow
