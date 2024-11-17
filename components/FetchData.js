import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function FetchData() {
  const { data, error } = useSWR('/api/data', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h2>Data from API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}