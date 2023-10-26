import '../styles.css'

export const CardSpecies = ({ name }) => {
  return (
    <article className="c-card square c-card-species">
      <p className='title'>{name}</p>
    </article>
  )
}
