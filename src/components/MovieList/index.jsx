import { useState } from 'react'
import { Button } from '../atoms'
import Image from 'next/image'
import styles from './styles.module.scss'
import MovieData from 'oscar.json'

const calcAverage = (listToReduce) => {
  const values = listToReduce.map(item => item.rating)
  const avrg = values.reduce((a, b) => (a + b)) / values.length
  return avrg
}

export const MovieList = () => {
  const [filtered, setFiltered] = useState(MovieData)

  const filterUnderRated = () => {
    const average = calcAverage(MovieData)
    const newData = MovieData.filter(movie => movie.rating <= average)
    setFiltered(newData)
  }

  const filterOverRated = () => {
    const average = calcAverage(MovieData)
    const newData = MovieData.filter(movie => movie.rating >= average)
    setFiltered(newData)
  }

  return (
    <div className={styles.content}>
      <main>
        {filtered.map((movie) => {
          <div key={movie.title}>
            <p>{movie.title}</p>
            <Image src={movie.img} height={198} width={293} objectFit='cover' />
            <p>{movie.description}</p>
            <div className={styles.rating}>{movie.rating}</div>
            <p className={styles.cathegory}>{movie.cathegory}</p>
            <a href={movie.url} rel='noreferrer noopener' ></a>
          </div>
        })}
      </main>
      <footer>
        <h2>Filtre por qualificação do portal</h2>
        <div>
          <Button onClick={filterUnderRated}>abaixo da média</Button>
          <Button onClick={filterOverRated}>acima da média</Button>
        </div>
      </footer>
    </div>
  )
}