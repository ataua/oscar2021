import Image from 'next/image'
import { Button } from '../atoms'
import styles from './card.module.scss'

export const Card = ({ poster, title, rating, description, cathegory }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>

        <Image src={poster} height={293} width={198} objectFit='contain' />
      </div>
      <h3>{title}</h3>
      <div className={styles.rating}>{rating}/5</div>
      <p>{description}</p>
      <p className={styles.cathegory}>Categoria indicada: {cathegory}</p>
      <div className={styles.buttonDiv}>
        <Button>Buscar na plataforma</Button>
      </div>
    </div>
  )
}