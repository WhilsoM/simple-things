import React from 'react'
import { Layout } from './components/Layout'
import './styles/LearningPaper.css'

export const LearningPaper = () => {
  return (
    <section className="what-paper-do">
			<div className="container">
				<div className="layouts">
          <Layout version="V.1" imgPath="layout1.png" />

          <Layout className="layout-mr" version="V.2" imgPath="layout2.png" />

          <Layout version="V.3" imgPath="layout3.png" />
				</div>

				<div className="what-belizna">
					<img
						className="belizna-img"
						src="/img/what/belizna-paper.png"
						alt="belizna-paper"
					/>

					<div className="info">
						<h3 className="what-belizna-title">Максимальная белизна</h3>
						<p className="what-belizna-desc what-belizna-desc_mb">
							Для повышения белизны, гладкости и мягкости в состав бумажной
							массы вводят белые минеральные вещества: мел, тальк, каолин и др.
							Эта операция называется наполнением.
						</p>
						<p className="what-belizna-desc">
							Отлив бумажного листа осуществляют на бумагоделательной машине,
							важнейшей частью которой является непрерывно движущаяся (как
							транспортер) металлическая или капроновая сетка.
						</p>
					</div>
				</div>
			</div>
		</section>
  )
}
