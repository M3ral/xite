export interface Genre {
  id: number
  name: string
}

interface ObjectKeys {
  [key: string]: string | number;
}

export interface Video extends ObjectKeys {
  id: number,
  artist: string,
  title: string,
  release_year: number,
  genre_id: number,
  image_url: string
}


export interface QueryProps {
  textSearchQuery: string
  genre_id: number[]
  release_year: number[]
}
