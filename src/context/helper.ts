type Movie = {
  title: string
  description: string
  img: string
  rating: number
  cathegory: string
  url: string
}
type MovieList = Movie[]
type MoviePayload = {
  action: string,
  movie: Movie
}

type User = {
  name?: string
  token?: string
  email?: string
  password?: string
}
type UserPayload = {
  action: string
  user: User
}

type ContextType = {
  user: User
  updateUser: ({ action, user }: UserPayload) => boolean
  movieList: MovieList
  updateMovieList: ({ action, movie }: MoviePayload) => boolean
}

export type { Movie, MovieList, MoviePayload, User, UserPayload, ContextType }