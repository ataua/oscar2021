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
  email: string
  password?: string
}

type UserPayload = {
  action: string
  user: User
}

type Message = {
  type: string | null
  text: string
}

type ContextType = {
  user: User
  updateUser: ({ action, user }: UserPayload) => any
  message: Message
  showMessage: (msg: Message) => void
}

export type { Message, Movie, MovieList, MoviePayload, User, UserPayload, ContextType }