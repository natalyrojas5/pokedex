import { PokemonProvider } from "@/context"
import { Header } from "@/components"

const Template = ({ children }) => {
  return (
    <main className='app'>
      <Header />
      <PokemonProvider>
        <section className="app-body">
          {children}
        </section>
      </PokemonProvider>
    </main>
  )
}

export default Template