import './styles.css';
import { CardAbility, CardPokemon, CardSpecies, CardType } from "../Card"

export const CARD_ITEMS = {
  'POKEMON': CardPokemon,
  'ABILITY': CardAbility,
  'SPECIES': CardSpecies,
  'TYPE': CardType
}

export const CARD_NAMES = {
  'POKEMON': 'POKEMON',
  'ABILITY': 'ABILITY',
  'SPECIES': 'SPECIES',
  'TYPE': 'TYPE',
}

export const Grid = ({ title, itemName, items = [], showLine = true }) => {
  const Component = CARD_ITEMS[itemName];

  return (
    <section className='c-grid scroll'>
      <h3 className='title'>{title}</h3>
      <div className='items'>
        {items.map((item, index) => <Component key={index} {...item} />)}
      </div>
      {showLine && <div className='line'></div>}
    </section>
  )
}
