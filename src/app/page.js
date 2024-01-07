"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export default function Home() {
  const [pic1, setPic1] = useState(false);
  const [pic2, setPic2] = useState(false);
  const [pic3, setPic3] = useState(false);
  const [cake, setCake] = useState(false);
  const [text, setText] = useState(false);

  {
    setTimeout(() => {
      setPic1(true);
    }, 1500);
  }
  {
    setTimeout(() => {
      setPic2(true);
    }, 2500);
  }
  {
    setTimeout(() => {
      setPic3(true);
    }, 3500);
  }
  {
    setTimeout(() => {
      setText(true);
    }, 4500);
  }
  {
    setTimeout(() => {
      setCake(true);
    },5500);
  }

  return (
    <>
      <div className="  bgimage d-flex flex-wrap">
        <div className="col-12 d-flex justify-content-center  flex-wrap ">
          <div className="d-flex flex-row col-lg-2 col-md-6 col-sm-10 col-11 mx-4 my-2">
            {pic1 && (
              <Image
                src="/img4.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className=" makeround"
              />
            )}
          </div>

          <div className="d-flex  flex-row col-lg-2 col-md-6 col-sm-10 col-11 mx-4 my-2">
            {pic2 && (
              <Image
                src="/img5.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className=" makeround"
              />
            )}
          </div>
          <div className="d-flex flex-row col-lg-2 col-md-6 col-sm-10 col-11 mx-4 my-2">
            {pic3 && (
              <Image
                src="/img6.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className=" makeround"
              />
            )}
          </div>
        </div>
        <div className="col-12 d-flex flex-wrap justify-content-center  my-4 ">
          {text && (
            <h1 className=" text ">
              Many Many Happy Returns Of The Day Dear Zilu!!!!!!!
            </h1>
          )}
        </div>
        <div className="col-12 d-flex flex-wrap justify-content-center  my-2 ">
          {cake && (
            <Image
              src="/cake.png"
              width={250}
              height={250}
              alt="Picture of the author"
              className=" makeround"
            />
          )}
        </div>
      </div>
    </>
  );
}
