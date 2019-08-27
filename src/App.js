import Bio from './components/Bio';
import Intro from './components/Intro';
import Footer from './components/Footer';
import SVGDivider from './components/Divider';
import './App.css';

import metadata from './resume.json';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Intro 
					text={ metadata.intro }
					color={ metadata.colors.heading }
				/>
			</header>
			<body>
				<SVGDivider
					aboveColor={ metadata.colors.intro }
					belowColor={ metadata.colors.bio }
					dividerStyle={ "zigzag" }
				/>
				<Bio 
					text={ metadata.bio }
					color={ metadata.colors.bio }
				/>
				<SVGDivider
					aboveColor={ metadata.colors.bio }
					belowColor={ metadata.colors.footer }
					dividerStyle={ "triangle" }
				/>
			</body>
			<footer>
				<Footer
					text={ metadata.footer }
					color={ metadata.colors.Footing }
				/>
			</footer>
		</div>
	);
}

export default App;
