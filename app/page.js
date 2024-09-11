"use client"
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Mainbody from "@/components/mainbody";

export const context = React.createContext()
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    
    <div>
      <context.Provider value={[isMenuOpen,setIsMenuOpen]}>
        <Navbar ></Navbar>
        <Mainbody menuState={isMenuOpen}></Mainbody>
      </context.Provider>
    </div>
  );
}
