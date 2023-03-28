import React from "react";
import CollapsibleExample from "../../components/header/Header";
import HeroSection from "../../components/hero/Hero";
import TopMessage from "../../components/top-message/TopMessage";

const Home = () => {
  return (
    <>
      <TopMessage />
      <div
        className="hero-section"
        style={{
          backgroundImage:
            "url(http://img1.wsimg.com/isteam/stock/7703/:/cr=t:15.25%25,l:0%25,w:84.75%25,h:84.75%25/rs=w:3070,m)",
        }}
      >
        <CollapsibleExample />
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
