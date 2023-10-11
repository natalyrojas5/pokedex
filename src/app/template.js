import { PokemonProvider } from "@/context"
import { Header } from "@/components"

const Template = ({ children }) => {
  return (
    <main className='app'>
      <Header />
      <PokemonProvider>
        {children}
      </PokemonProvider>
    </main>
  )
}

export default Template