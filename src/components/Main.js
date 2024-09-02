import {React, useState, useEffect} from "react"



export default function Main() {
  const [navbar, setNavBar] = useState(false)
  const [navIcon, setNavIcon] = useState(false)


  function toggleNav(){
    navIcon ? setNavIcon(false) : setNavIcon(true)
  }

  return (
    <main className="main">
      <header>
        <div className="logo">
          <a href="#">Dear <span>Diary,</span></a>
        </div>
        <nav>
          <div className={navIcon ? "show-nav" : "hide-nav"}>
            <img 
              src="images/scroll.png" 
              alt="" 
              className="nav-menu" 
              onClick={toggleNav}
              />

            <img 
              src="images/min-scroll.png" alt="" 
              className="close-menu" 
              onClick={toggleNav}
              />

            <ul>
              <li><a href=".oeuvre">Home</a></li>
              <li><a href="#oeuvre">Oeuvre</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#connect">Connect</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="text-box">

        <div className="quotes">
            <h2 className="quote">What is a page, but an embodiment of words coming to life?</h2>
            <h2 className="quote">The purpose of a writer is to keep civilization from destroying itself.</h2>
            <h2 className="quote">A blank piece of paper is God’s way of telling us how hard it is to be God.</h2>
            <h2 className="quote">You must stay drunk on writing so reality cannot destroy you</h2>
        </div>

        {/* Icons */}
        <img src="images/saitama.png" alt="" className="saitama icon" />
        <img src="images/naruto.png" alt="" className="naruto icon" />
        <img src="images/lol.png" alt="" className="lol icon" />
        <img src="images/origami.png" alt="" className="origami icon" />
        <img src="images/feather.png" alt="" className="feather icon" />
        <img src="images/football.gif" alt="" className="football gif" />
        <img src="images/volleyball.gif" alt="" className="volleyball gif" />
      </div>
    </main>
  );
}
