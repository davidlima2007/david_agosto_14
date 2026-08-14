import {View , Text , StyleSheet} from 'react-native'

export default  function Sobre() {

    return (
        <View  >
            <Text style={Estilo.text} >Olá Mundo</Text>
        </View>
    );
}

const Estilo = StyleSheet.create(
    {
        text: {
            fontSize: 20,
            color: 'blue',
        },
    }
);