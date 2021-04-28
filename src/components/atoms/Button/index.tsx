import styles from './button.module.scss'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

export const Button = ({ children, ...props }) => (
  <button
    className={styles.btn}
    {...props}
  >
    {children}
    <span>
      <ArrowRight />
    </span>
  </button>
)