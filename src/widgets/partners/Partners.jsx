import { PartnerItem } from './components/PartnerItem'
import './styles/Partners.css'

export const Partners = () => {
  return (
    <section className="partners">
			<div className="container">
				<div className="wrapper-partner">
					<PartnerItem imgPath="hahnemuhle-part.svg" />

					<PartnerItem imgPath="canson-part.svg" />

          <PartnerItem imgPath="royal-talens-part.svg" />
					
          <PartnerItem imgPath="fabrino-part.svg" />
				</div>
			</div>
		</section>
  )
}
