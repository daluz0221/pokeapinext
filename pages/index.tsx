

import { Grid, Image } from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon';
import { PokemonList, SmallPokemon } from '../interfaces';


interface Props {
  pokemons: SmallPokemon[];
}


const Home: NextPage<Props> = ({pokemons}) => {


  
  

  return (
  
      <Layout title={'PokeApp'}>

        
       
        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map( (poke) => (
             <PokemonCard pokemon={poke} key={poke.id} />
            ))
          }
        </Grid.Container>
      </Layout>
   
  )
}




export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonList>('/pokemon?limit=151')
  
  
  


  
    const pokemons: SmallPokemon[] = data.results.map( (poke, i) =>({
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }) )
    
  


  return {
    props: {
      pokemons
    }
  }
}



export default Home
