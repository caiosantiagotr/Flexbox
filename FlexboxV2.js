import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#ff801a' />
            <Quadrado cor='#50d1f6' />
            <Quadrado cor='#dd22c1' />
            <Quadrado cor='#8312ed' />
            <Quadrado cor='#36c9a7' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        // Eixo princiapl
        flex: 1,
        //Define a largura do contêiner como 100% do tamanho do pai
        width: '100%', 
        // Distribui os itens com espaços iguais entre eles e nas extremidades do contêiner
        justifyContent: "space-evenly",
        // Alinha os itens flexíveis ao longo do eixo cruzado (perpendicular) do contêiner
        alignItems: 'flex-end',
       // Define a cor de fundo do contêiner como preto
        backgroundColor: '#000'
    }
})