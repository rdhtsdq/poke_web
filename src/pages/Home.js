import axios from "axios"
import { useState,useEffect } from "react"
import Card from "./components/Card"

const Home = () => {
  const [allPokemon,setAllPokemon] = useState([])
  const [loadMore,setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemon = async () => {
    const res = await axios.get(loadMore)
    setLoadMore(res.data.next)
    // console.log(res);

    Array.from(res.data.results).forEach( async(pokemon) => {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      // console.log(poke.data);

      setAllPokemon(lastdata => [...lastdata,poke.data])

      console.log(allPokemon);

    })
  }


  useEffect(() => {
    getAllPokemon()
  })
  
  return <div className="z-10 w-[78vw] p-3 overflow-y-hidden">
    <div className="flex flex-col space-y-6 overflow-y-hidden">
      <div className="flex justify-between">
        <span className="ml-2 text-xl">
          POKEDEX
        </span>
        
        <button className="mr-10" onClick={getAllPokemon()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5 fill-[#25ccaa]" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
        </button>
      </div>
      <div className="flex flex-wrap overflow-y-auto h-[80vh]">
        {allPokemon.map((pokemon,index) => <Card 
        id={pokemon.id} 
        name={pokemon.name} 
        image={pokemon.sprites.other.dream_world.front_default} 
        type={pokemon.types[0].type.name}
        key={index}
        />)}
      </div>
    </div>
  </div>
}

export default Home