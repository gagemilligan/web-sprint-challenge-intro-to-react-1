// Write your Character component here
import React from "react";
import styled from 'styled-components'

const Container = styled.a`
display: flex;
justify-content: center;
color: white;
font-size: 2rem;
`

function Character(props) {
    console.log(props);

    return (
        <Container>
            <h2 key={"characterArticle-" + props.character.id}>{props.character.id}</h2>
            <p>{props.character.name}</p>
        </Container>
    );
}

export default Character