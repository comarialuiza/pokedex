import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    background-color: #8BBE8A;
    border-radius: 10px;
    height: 115px;
    position: relative;

    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

export const Name = styled.h2`

`;

export const Image = styled.div`
    position: absolute;
    top: -20px;
    right: 20px;
    max-width: 130px;
    max-height: 130px;
`;