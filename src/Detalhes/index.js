import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Detalhes(props) {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
                    <Text style={{ color: '#FFF', fontSize: 16, textAlign: 'right', paddingRight: 10 }}>FECHAR</Text>
                </TouchableOpacity>
                <ScrollView persistentScrollbar={true}>
                    <Text style={styles.titulo}>{props.filme.nome}</Text>
                    <Text style={styles.sinopse}>Sinopse:</Text>
                    <Text style={styles.descricao}>
                        {props.filme.sinopse}
                    </Text>
                </ScrollView>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer: {
        width: '100%',
        height: '60%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    btnVoltar: {
        padding: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#1E90FF'
    },
    titulo: {
        textAlign: 'center',
        color: '#FFF',
        padding: 15,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    sinopse: {
        color: '#FFF',
        fontSize: 20,
        marginBottom: 25,
        marginLeft: 10
    },
    descricao: {
        color: '#FFF',
        fontSize: 25,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'justify'
    }
})