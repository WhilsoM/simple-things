import React from 'react'
import { Button } from '../../share/button/Button'
import './styles/SimpleThings.css'

export const SimpleThings = () => {
  return (
    <section className="main">
			<div className="container">
				<div className="main__info">
					<h1 className="main-text">Простые вещи. Из бумаги</h1>
					<p className="main-desc">
						Бума́га (предположительно от итал. bombagia, первоисточником же
						считается иранский) — волокнистый материал с минеральными добавками.
					</p>
					<Button children='Каталог' />
				</div>

				<div className="main-img">
					<img
						className="main-img-sel"
						src="/img/main.png"
						alt="simple paper"
					/>
				</div>
			</div>
		</section>
  )
}
