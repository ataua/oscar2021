import { useState } from 'react'
import { Button } from '../atoms'
import { Card } from '../'
import Image from 'next/image'
import styles from './styles.module.scss'
import movieData from 'oscar.json'

const calcAverage = (listToReduce) => {
  const values = listToReduce.map(item => parseInt(item.rating))
  const avrg = values.reduce((a, b) => (a + b)) / values.length
  return avrg
}

export const MovieList = () => {
  const [filtered, setFiltered] = useState(movieData)

  const filterUnderRated = () => {
    const average = calcAverage(movieData)
    const newData = movieData.filter(movie => movie.rating <= average)
    setFiltered(newData)
  }

  const filterOverRated = () => {
    const average = calcAverage(movieData)
    const newData = movieData.filter(movie => movie.rating >= average)
    setFiltered(newData)
  }
  console.table(filtered)
  return (
    <div className={styles.content}>
      <main>
        <div className={styles.empty} />
        {filtered.map((movie, idx) =>
          <Card key={idx} {...movie} />
        )}
        <div className={styles.empty} />
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