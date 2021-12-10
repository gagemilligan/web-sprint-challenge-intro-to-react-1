// Write your Character component here
import React from "react";
import styled from 'styled-components'

const Container = styled.container`
display: flex;
justify-content: space-around;

`

const Character = (props) => {
    console.log(props)

    return(
        <Container>
            <h2 key = {"characterArticle-" + props.character.id} >{props.character.id}</h2>
            <p>{props.character.birth_year}</p>
        </Container>
    )
}

export default Character