import { Button } from '@share/button/Button'
import './styles/Sketchbook.css'

export const Sketchbook = () => {
  return (
    <section className="sketchbook">
			<div className="container">
        <div className="sketchbook-info">
					<h3 className="sketchbook-title">Simple скетчбук</h3>
					<p className="sketchbook-desc">
						80 листов, твердая обложка, бумага Fabriano 200 г/м2. Подойдет и для
						графики и для акварели. Для самых смелых творческих замыслов!
					</p>
					<Button children="Купить" />
				</div>

				<div className="sketchbook-block-img">
					<img className="sketchbook-img" src="/img/bgc.png" alt="bgc" />
				</div>
			</div>
		</section>
  )
}
