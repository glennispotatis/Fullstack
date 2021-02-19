import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header title="I am the header" />
			<Content src="https://picsum.photos/200/300">
				<section>
					<h2>I can have many children</h2>
				</section>
			</Content>
			<Footer cpr={`Glenn ${new Date().getFullYear()}`}/>
		</div>
	);
}

export default App;
