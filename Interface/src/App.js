import Rating from '@mui/material/Rating';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useHistory,
} from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Accounts from './pages/Accounts';
import Admin from './pages/Admin';
import Administation from './pages/Administration';
import Client from './pages/Client';
import Manage from './pages/Manage';
import Stats from './pages/Stats';
import Survey from './pages/Survey';

function App() {
	return (
		<Router>

							<Switch>
								<Route exact path='/'>
									<Home/>
								</Route>



								<Route exact path='/account'>
							<Navbar />
								<Accounts/>
						</Route>

								<Route exact path='/client'>
									<Navbar />
									<Client/>
								</Route>


										<Route exact path='/admin'>
											<Navbar />
											<Admin/>
										</Route>

										<Route exact path='/administration'>
											<Navbar />
											<Administation/>
										</Route>

										<Route exact path='/survey'>
											<Navbar />
											<Survey/>
										</Route>

										<Route exact path='/manage'>
											<Navbar />
											<Manage/>
										</Route>

										<Route exact path='/stats'>
											<Navbar />
											<Stats/>
										</Route>
									</Switch>
		</Router>
	);
}
export default App;
