import { Button } from '@share/button/Button'
import { Modal } from '@share/modal/Modal'
import { useState } from 'react'
import './styles/SimpleThings.css'

export const SimpleThings = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleClick = () => {
    setIsOpenModal(true)
    document.body.classList.add('overflow-y')
  }

  return (
    <section className="main">
			<div className="container">
				<div className="main__info">
					<h1 className="main-text">Простые вещи. Из бумаги</h1>
					<p className="main-desc">
						Бума́га (предположительно от итал. bombagia, первоисточником же
						считается иранский) — волокнистый материал с минеральными добавками.
					</p>
					<Button children='Каталог' onClick={handleClick} />
				</div>

				<div className="main-img">
					<img
						className="main-img-sel"
						src="/img/main.png"
						alt="simple paper"
					/>
				</div>
			</div>
      
      {isOpenModal && 
        <Modal 
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          title="test" 
          description="lorem20" 
        />
      }
		</section>
  )
}
