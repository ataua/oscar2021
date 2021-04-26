import { GetStaticProps } from 'next'
import { api } from '../../services/api'

type Movie = {
  title: string
  description: string
  img: string
  rating: number
  cathegory: string
  url: string
}

const tempList = [{
  title: 'El Filmo',
  description: 'um filme',
  img: 'nonon.jpg',
  rating: 4,
  cathegory: 'coisa',
  url: 'http:www'
}]

export const getStaticProps: GetStaticProps = async () => {
  const movieData: Movie[] = await api.get('oscar')
  console.log(movieData)

  // return {
  //   props: { movieData }, // will be passed to the page component as props,
  //   revalidate: 60 * 60 * 24 // update once a day
  // }
  return {
    props: { movieData: tempList }, // will be passed to the page component as props,
    revalidate: 60 * 60 * 24 // update once a day
  }
}

const MovieList = () => {
  return (
    <>
      <h1>Oscar 2021</h1>
      {tempList.map(movie => {
        <p key={movie.title}>{movie.title}</p>
      })}
    </>
  )
}
export default MovieList