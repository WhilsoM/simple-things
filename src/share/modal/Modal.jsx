import { Button } from '@share/button/Button'
import s from './styles/Modal.module.css'

export const Modal = ({title, description, isOpenModal, setIsOpenModal}) => {
  const handleCloseModal = () => {
    setIsOpenModal(false)
    document.body.classList.remove('overflow-y')
  }

  return (
    <>
      <div className={`overlay ${isOpenModal ? 'show' : ''}`}></div>
      <div className={s.modal}>
        <div className={s.modalActive}>
          <h3 className={s.modal__title}>{title}</h3>
          <p className={s.modal__description}> {description} </p>
          <Button children="Закрыть" onClick={handleCloseModal} />
        </div>
      </div>
    </>
  )
}
