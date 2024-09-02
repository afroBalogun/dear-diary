import Main from "./components/Main";
import Oeuvre from "./components/Oeuvre";
import Footer from "./components/Footer";
import About from "./components/About";
import Connect from "./components/Connect"

export default function App(){

    return(
        <div className="app">
            <Main />
            <Oeuvre />
            <About />
            <Connect/>
            <Footer />
        </div>
    )
}