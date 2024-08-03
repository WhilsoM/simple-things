import { Button } from '@share/button/Button'
import s from './styles/Modal.module.css'

export const Modal = ({title, description}) => {
  return (
    <div className={s.modal}>
      <h3 className={s.modal__title}>{title}</h3>
      <p className={s.modal__description}> {description} </p>
      <Button children="Закрыть" />
    </div>
  )
}
