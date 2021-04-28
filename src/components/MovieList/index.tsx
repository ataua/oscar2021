import { GetStaticProps } from 'next'
import { api } from '../../services/api'
import { Button } from '../atoms'
import styles from './styles.module.scss'

type Movie = {
  title: string
  description: string
  img: string
  rating: number
  cathegory: string
  url: string
}

export const getStaticProps: GetStaticProps = async () => {
  const movieData: Movie[] = await api.get('oscar')

  return {
    props: { movieData }, // will be passed to the page component as props,
    revalidate: 60 * 60 * 24 // update once a day
  }
}

export const MovieList = ({ movieData }) => {
  return (
    <div className={styles.content}>
      <main>
        {movieData.map(movie => {
          <p key={movie.title}>{movie.title}</p>
        })}
      </main>
      <footer>
        <h2>Filtre por qualificação do portal</h2>
        <div>
          <Button>abaixo da média</Button>
          <Button>acima da média</Button>
        </div>
      </footer>
    </div>
  )
}