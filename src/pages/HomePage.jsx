import Navbar from "../components/Navbar"
import AppBody from "../components/AppBody"
import Footer from "../components/Footer"
import "../css/HomePage.css"

function HomePage() {
  return (
    <div className="app">
      <header className="header">
        <Navbar/>
      </header>
      <main className="body">
        <AppBody/>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}


export default HomePage;

