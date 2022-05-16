import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { useRef } from 'react'
import { Movie } from '../types'
import Thumbnail from './Thumbnail'

interface RowProps {
  title: string
  movies: Movie[]
}

const Row: React.FC<RowProps> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = React.useState(false)

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="curs w-56 text-sm font-semibold text-[#e5e5e5]  transition hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="relative group md:-ml-2">
        <ChevronLeftIcon
          onClick={() => handleClick('left')}
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {/* Thumbnail */}
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          onClick={() => handleClick('right')}
          className="absolute top-0 bottom-0 z-40 m-auto opacity-0 cursor-pointer right-2 h-9 w-9 hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  )
}

export default Row
