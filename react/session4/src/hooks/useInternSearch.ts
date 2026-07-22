import { useState, useMemo } from 'react'

interface Intern {
  id: number
  name: string
  score: number
  role: string
  isPresent: boolean
}

interface UseInternSearchReturn {
  search: string
  setSearch: (value: string) => void
  filtered: Intern[]
  stats: {
    total: number
    present: number
    avg: number
  }
}

function useInternSearch(interns: Intern[]): UseInternSearchReturn {

  const [search, setSearch] = useState<string>('')

  const filtered = useMemo<Intern[]>(() =>
    interns.filter(i =>
      i.name.toLowerCase().includes(search.toLowerCase())
    ),
    [interns, search]
  )

  const stats = useMemo(() => ({
    total: interns.length,

    present: interns.filter(i => i.isPresent).length,

    avg:
      interns.length > 0
        ? Math.round(
            interns.reduce((sum, i) => sum + i.score, 0) /
              interns.length
          )
        : 0,
  }), [interns])

  return {
    search,
    setSearch,
    filtered,
    stats,
  }
}
// Without useMemo, the filtering logic runs on every component render,
// even when the interns list and search text have not changed.
// useMemo caches the filtered result and recalculates it only when
// 'interns' or 'search' changes, improving performance for large lists.
export default useInternSearch