'use client';

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function ScrollPanels() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        const dom = {
            columns: document.querySelector('.section-col'),
            columnWraps: document.querySelectorAll('.section-col .column-wrap'),
            items: document.querySelectorAll('.section-cols .col-item'),
        };

        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel : true,
        });

        const ScrollFunc = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(ScrollFunc);
        };

        requestAnimationFrame(ScrollFunc);

        const ScrollAni = () => {
            gsap.timeline({
                scrollTrigger: {
                    start: 0,
                    end: 'max',
                    scrub: true,
                },
            })
            .addLabel('start', 0)
            .to(
                dom.columns,
                {
                    ease: 'none',
                    startAt: { scale: 1.2 },
                    scale: 1,
                },
                'start'
            )
            .to(dom.items, {
                scrollTrigger:{
                    start: 0,
                    end: 'top top',
                    scrub: true,
                },
                ease: 'power4.inOut',
                startAt:{
                    opacity:0,
                    filter:'brightness(300%)',
                },
                opacity:1,
                filter: 'brightness(100%)',
                yoyo: true,
                repeat: 1,
            })
            .to(
                dom.columnWraps,
                {
                    ease: 'none',
                    yPercent: (pos) => pos * -15,
                },
                'start'
            );
        };

        ScrollFunc(15);
        ScrollAni();
        
    }, []);
  return (
    <div>
      <section className="leading-none static top-0 w-full min-h-screen bg-[#0f0e0e] 
        mb-[250vh] h-screen flex flex-col text-center items-center justify-center pt-32 pb-8">
        <h2 className="section_title">
          SEA-<br />LIFE
        </h2>
        <p className="m-0 max-w-[400px]">A deep dive into the ocean</p>
        <p className="m-0 max-w-[400px] mt-auto text-red-500">
          <span>Scroll</span>
        </p>
      </section>
      <section className="section-col leading-none top-0 min-h-screen bg-[#0f0e0e] fixed left-0 
        right-0 bottom-0 z-[-1] w-full h-screen">
        <div className="columns w-full relative flex justify-center gap-[2.5vw] h-full -rotate-45 items-center">
          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (1).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (2).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (3).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (4).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (5).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (6).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (7).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (8).jpg" alt="Panel Image" />
              </div>
            </div>
          </div>
          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (9).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (10).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (11).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (12).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (13).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (14).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (15).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (16).jpg" alt="Panel Image" />
              </div>
            </div>
          </div>
          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (17).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (18).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (19).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (20).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (21).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (22).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (23).jpg" alt="Panel Image" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/SLImage (24).jpg" alt="Panel Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default ScrollPanels;
