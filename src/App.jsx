import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlishts"

const App = () => {
	return (
		<main className="bg-black">
			<Navbar />
			<Hero />
			<Highlights />
		</main>
	)
}

export default App