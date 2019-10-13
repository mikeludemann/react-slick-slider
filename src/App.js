import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { SlickSlider, SliderElement } from "./components/slick";
import { SlickSlider, SliderElement } from "./components/slick-v2";

function App() {
  
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      element: 'main--slider',
      options: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <SlickSlider 
          slider={data} 
        >
          <SliderElement>
            1-1
          </SliderElement>
          <SliderElement>
            1-2
          </SliderElement>
          <SliderElement>
            1-3
          </SliderElement>
          <SliderElement>
            2-1
          </SliderElement>
          <SliderElement>
            3-1
          </SliderElement>
        </SlickSlider>
			</section>
      <section className="content--block--two">
        <SlickSlider 
          element="main--slider" 
          options={{
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          }}>
          <SliderElement>
            1-1
          </SliderElement>
          <SliderElement>
            1-2
          </SliderElement>
          <SliderElement>
            1-3
          </SliderElement>
          <SliderElement>
            2-1
          </SliderElement>
          <SliderElement>
            3-1
          </SliderElement>
        </SlickSlider>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
    </div>
  );
}

export default App;
