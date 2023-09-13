import Food from "./components/Food";
import HeadLineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className='min-h-screen'>
            <NavBar />
            <Hero />
            <HeadLineCards />
            <Food />
        </div>
    );
}

export default App;
