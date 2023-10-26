import '../styles.css'

export const CardAbility = ({ ability, is_hidden, slot }) => {
  return (
    <article className="c-card c-card-ability square">
      <div className="texts">
        <p className='title'>{ability.name}</p>
      </div>
      <div className="texts">
        <strong>
          <p>Oculto:</p>
        </strong>
        <p>{is_hidden ? 'Si' : 'No'}</p>
      </div>
      <div className="texts">
        <strong>
          <p>Slot:</p>
        </strong>
        <p>{slot}</p>
      </div>
    </article>
  )
}
