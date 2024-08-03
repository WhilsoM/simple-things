import s from './styles/Button.module.css'

export const Button = ({children, onClick}) => (
  <button className={s.btn} onClick={onClick} >{children}</button>
)