import {useEffect, useState} from "react"
import {Genre, Video} from "../types"
import {getSortedYears} from "../utils/getSortedYears";
import {getGenresSorted} from "../utils/getGenresSorted";

export const useFetch = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [videos, setVideos] = useState<Video[]>([])
  const [genres, setGenres] = useState<Genre[]>([])
  const [years, setYears] = useState<number[]>([])

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch("https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json")
        const data = await response.json()

        setLoading(false)
        setVideos(data.videos)
        /* Sort genres alphabetically */
        setGenres(getGenresSorted(data.genres))
        /* Reorder years descending */
        setYears(getSortedYears(data.videos))

      } catch (e) {
        setError(e.message)
      }

    }

    fetchData()
  }, [])

  return {loading, videos, genres, error, years}
}
