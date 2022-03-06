import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from "react"
import { SmallPokemon } from "../../interfaces"


interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemon}) => {


    const {id, name, img} = pokemon;

    const router = useRouter();

    const onPokeClick = () =>{
      router.push(`/name/${pokemon.name}`);
    }


  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
    <Card hoverable clickable
      onClick={onPokeClick}
    >
      <Card.Body css={{p: 1}}>
        <Card.Image 
          src={img}
          width={'100%'}
          height={'140px'}
        />
      </Card.Body>
      <Card.Footer>
        <Row justify='space-between'>
        <Text transform='capitalize'>
          {name}
        </Text>
        <Text>
          #{id}
        </Text>
        </Row>
      </Card.Footer>
    </Card>
  </Grid>
  )
}
