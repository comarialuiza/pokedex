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
            { /* <div className="pokemon__attacks">
                { pokemon.attacks.special.slice(0, 3).map(attack => (
                    <span key={ `${attack.name} - ${attack.damage}` }>{ attack.name }</span>
                )) }
                </div> */ }
        </Container>
    );
}

export default Pokemon;