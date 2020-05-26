import React from 'react';

import { Container, Name, Image } from './styles';

function Pokemon({ pokemon }) {
    return(
        <Container>
            <Name>
                { pokemon.name }
            </Name>
            <Image>
                <img src={ pokemon.image } alt={ pokemon.name } />
            </Image>
        </Container>
    );
}

export default Pokemon;