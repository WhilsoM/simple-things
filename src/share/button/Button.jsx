import s from './styles/Button.module.css'

export const Button = ({children}) => <button className={s.btn}>{children}</button>