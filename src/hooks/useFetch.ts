import { useState, useEffect } from 'react'

type UseFetchResult<T> = [T | undefined, boolean, Error | undefined]

const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | undefined>()

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    // eslint-disable-next-line
    fetchData()
  }, [url])

  return [data, loading, error]
}

export default useFetch
