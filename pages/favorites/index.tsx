
import { FC, useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'

import {NoFavorites} from '../../components/ui';
import { localFavorites } from '../../utils';
import {FavoritePokemons} from '../../components/pokemon';


const Favorites: FC = () => {


    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);


    useEffect(() => {
      
        setFavoritePokemons( localFavorites.pokemons() );

    }, [])
    

  return (
    <Layout title='Favoritos'>

        {
            favoritePokemons.length === 0
            ? (<NoFavorites />)
            : ( <FavoritePokemons favoritePokemons={favoritePokemons} />)
        }
        
    </Layout>
  )
}


export  default Favorites;