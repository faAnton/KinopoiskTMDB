import style from './Rating.module.css';

type props = {
  rating: number
  positionAbsolute: boolean
}

export const Rating = ({ rating, positionAbsolute }: props) => {

  const voteAverage = Math.round(rating * 10) / 10
  const ratingColor = rating < 4 ? 'Red' : rating < 7 ? 'Yellow' : 'Green'

  return (
    <div style={{position: positionAbsolute ? 'absolute' : 'unset'}} className={`${style.rating} ${style[ratingColor]}`}><span>{voteAverage}</span></div>
  )
}
