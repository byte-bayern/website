import React, { useState, useEffect } from "react";
import Footer from "../components/shared/footer";
import Nav from "../components/shared/navbar";
import Seo from "../components/shared/SEO";
import Toolbar from "./toolbar";
/* We are using AOS for the animation */ 
import AOS from "aos";
import "aos/dist/aos.css";

export const isBrowser = () => typeof window !== "undefined";

export default function DefautLayout({ title, children }) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); 

  const [contrast, setContrast] = useState(false);

  return (
    <div div className={`${contrast ? "contrast" : null} defaultLayout`}>
      <Seo title={title}/>
      <Nav />
      <main>
       <Toolbar contrast={contrast} setContrast={setContrast}/>
       {children}
      </main>
      <Footer/>
      </div>
  );
}
