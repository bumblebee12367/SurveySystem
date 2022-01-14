import './Navbar.css';
import React from 'react';
import { render } from '@testing-library/react';


const Navbar = () => (
	<nav className='navbar'>
		<h1 id='parklogo'>Survey System   </h1>
		<br />

		<div class="dropdown">
			<button className="dropbtn">
				<img  src="/Images/Burger.svg" alt="BurgerButton" />
			</button>
			<div className='dropdown-content'>
				<a id='1' href='/'>
					Home
				</a>
				<a id='2' href='/account'>
					Account selection
				</a>
				<a id='3' href='/admin'>
					Admin's page
				</a>
				<a id='4' href='/client'>
					Client's page
				</a>

			</div>
		</div>


		<hr />
	</nav>
);

export default Navbar;
