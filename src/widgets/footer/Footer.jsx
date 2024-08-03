import { Link } from 'react-router-dom'
import './styles/Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
			
        <div className="footer__section-one">
        <div className="logo">
					<img
						className="logo-img"
						src="/img/footer/logo-white.svg"
						alt="simple logo"
					/>
				</div>

        <div className="social">
          <Link to="">
            <img
              className="social-img"
              src="/img/footer/facebook.svg"
              alt="facebook"
            />
          </Link>
          <Link to="">
            <img
              className="social-img"
              src="/img/footer/twitter.svg"
              alt="twitter"
            />
          </Link>
          <Link to="">
            <img
              className="social-img"
              src="/img/footer/instagram.svg"
              alt="instagram"
            />
          </Link>
          <Link to="">
            <img
              className="social-img"
              src="/img/footer/youtube.svg"
              alt="youtube"
            />
          </Link>
        </div>


        </div>

        <div className="footer__section-two">
          <p className="simple-desc">Simple <span className="symbol">®</span> 2021</p>
        </div>
		
		</footer>
  )
}
