import styles from './label.module.scss'

export const Label = ({ text, children }) => {
  return (
    <label className={styles.styledLabel}>
      <h3>{text}</h3>
      {children}
    </label>
  )
}
