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

function App() {
	return (
		<Router>
			<div className='App'>
				<div className='content'>
							<Switch>
								<Route exact path='/'>
									<Home/>
								</Route>
							</Switch>
								</div>
								</div>
								<div className='App'>
								<div className='content'>
							<Switch>
								<Route exact path='/account'>
							<Navbar />
								<p>Would you like to connect to an admin account or to a clint account</p>
									<Route
										render={({ history }) => (
											<button
												type='button'
												onClick={() => {
													history.push('/client');
												}}
											>
												Client account
											</button>
										)}
									/>
									<Route
										render={({ history }) => (
											<button
												type='button'
												onClick={() => {
													history.push('/admin');
												}}
											>
												Admin account
											</button>
										)}
									/>
						</Route>
							</Switch>
								<div className='App'>
								<div className='content'>
							<Switch>
								<Route exact path='/client'>
									<Navbar />
									<p>Please insert the following information in the text boxes</p>
									<form>
										<label htmlFor="name">Name:</label>
										<br/>
										<input type="text" id="name" name="name"/>
										<br/>
										<label htmlFor="email">Email:</label>
										<br/>
										<input type="text" id="email" name="email"/>
										<br/>
										<label htmlFor="sex">Sex:</label>

										<input
											type="radio" id="sexM" name="sex"/><label htmlfor="sexM">M</label>
										<input
											type="radio" id="sexF" name="sex"/><label htmlFor="sexF">F</label>
										<br/>
										<label htmlFor="age">Age:</label>
										<br/>
										<input
											type="radio" id="under18" name="age"/><label htmlFor="sexM">under 18</label>
										<br/>
										<input
											type="radio" id="18to25" name="age"/><label htmlFor="sexF">18 to 25</label>
										<br/>
										<input
											type="radio" id="25to32" name="age"/><label htmlFor="sexF">25 to 32</label>
										<br/>
										<input
											type="radio" id="above32" name="age"/><label htmlFor="sexF">above 32</label>
										<br/>
									</form>
									<Route
										render={({ history }) => (
											<button
												type='button'
												onClick={() => {
													history.push('/survey');
												}}
											>
												Continue to survey
											</button>
										)}
									/>
								</Route>
							</Switch>
									<Switch>
										<Route exact path='/admin'>
											<Navbar />
											<p>Please insert the following information in the text boxes</p>
											<form>
												<label htmlFor="name">Name:</label>
												<br/>
												<input type="text" id="name" name="name"/>
												<br/>
												<label htmlFor="pass">Password:</label>
												<br/>
												<input type="password" id="pass" name="pass"/>

											</form>
											<Route
												render={({ history }) => (
													<button

														type='button'
														onClick={() => {
															history.push('/administration');
														}}
													>
														Connect into your admin account
													</button>
												)}
											/>
										</Route>
									</Switch>
									<Switch>
										<Route exact path='/administration'>
											<Navbar />
											<p>What would you like to do :</p>

											<Route
												render={({ history }) => (
													<button
														type='button'
														onClick={() => {
															history.push('/manage');
														}}
													>
														Manage surveys
													</button>
												)}
											/>
											<Route
												render={({ history }) => (
													<button
														type='button'
														onClick={() => {
															history.push('/stats');
														}}
													>
														Look at statistics
													</button>
												)}
											/>
										</Route>
									</Switch>
									<Switch>
										<Route exact path='/survey'>
											<Navbar />
											<p>To Do</p>

											<Route
												render={({ history }) => (
													<button
														type='button'
														onClick={() => {
															history.push('/');
														}}
													>
														Finish survey
													</button>
												)}
											/>
										</Route>
									</Switch>
									<Switch>
										<Route exact path='/manage'>
											<Navbar />
											<p>To Do</p>

											<Route
												render={({ history }) => (
													<button
														type='button'
														onClick={() => {
															history.push('/');
														}}
													>
														.
													</button>
												)}
											/>
										</Route>
									</Switch>
									<Switch>
										<Route exact path='/stats'>
											<Navbar />
											<p>To Do</p>

											<Route
												render={({ history }) => (
													<button
														type='button'
														onClick={() => {
															history.push('/');
														}}
													>
														.
													</button>
												)}
											/>
										</Route>
									</Switch>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}
export default App;
