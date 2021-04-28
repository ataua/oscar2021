import styles from './error.module.scss'

export const Error = ({ children }) => <p className={styles.error}>{children}</p>