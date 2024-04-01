import './App.css'
import Home from "./layout/Home.jsx";
import Portfolio from "./layout/Portfolio.jsx";
// import Services from "./layout/Services.jsx";
import About from "./layout/About.jsx";
import Contacts from "./layout/Contacts.jsx";
import Footer from "./layout/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  return (
      <>
          < Navbar/>
          < Home />
          {/* < Services /> */}
          < Portfolio />
          < About />
          < Contacts />
          < Footer />
      </>
  )
}

export default App
