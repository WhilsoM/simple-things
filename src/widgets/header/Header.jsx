import React from 'react'
import { Navigation } from '../navigation/Navigation'
import './styles/Header.css'

export const Header = () => {
  return (
    <header>
			<div className="container wrapper">
				<div className="logo">
					<img className="logo-img" src="/img/logo.svg" alt="simple logo" />
				</div>

				<Navigation />
			</div>
		</header>
  )
}
