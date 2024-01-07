import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  
  return (
    <div className=" container-fluid d-flex  justify-content-evenly   col-lg-12 col-md-12 col-sm-12 col-12 flex-wrap navbar ">
      
        {/* <h4 className="ms-3 col-lg-3 col-md-3 col-sm-3 col-3 text-white">
          Logo
        </h4> */}
    
        <h3 className=" text-white col-lg-9 col-md-6 col-sm-6 col-9 fw-3  text-wrap text-center ">
           The Day - January 10th
        </h3>
   

      
    </div>
  );
}
