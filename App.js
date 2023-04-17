import { StatusBar } from 'expo-status-bar';
import { Button, Animated, FlatList, onPress, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

  const [ativar, setAtivar] = useState(true);
  const [texto, setTexto] = useState('PRÓXIMO TEXTO');
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
  const [opacity] = useState(new Animated.Value(0));
  const [itens, setItens] = useState([
    { nome: 'LOGIN', key: 1 },
    { nome: 'CADASTRO', key: 2 },
    { nome: 'FALE CONOSCO', key: 3 },
    { nome: 'TUDO SOBRE NOSSO APP', key: 4 },
    { nome: 'ALERTA', key: 5 },
  ])
  const clicarBotao = () => {
    setAtivar(!ativar);
    if (ativar == false) {
      setTexto('PRÓXIMO TEXTO')

    } else if (ativar == true) {
      setTexto('TEXTO ANTERIOR')

    }
  

  }

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 0,

        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 2,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start()

  }, []);






  return (

    <ScrollView style={styles.container}>

      <Animated.View style={[styles.animaçao,
      {
        opacity: opacity,
        transform: [
          { translateY: offset.y }
        ]


      }
      ]}>
        <StatusBar style="auto" />

        <View style={styles.view1} >
          <MaterialIcons name="local-florist" size={80} color="brown" />
          <Text style={styles.texto1}> BEM VINDA </Text>
          <MaterialIcons name="local-florist" size={80} color="brown" />
        </View>



        {ativar ?
          <View style={styles.mensagem1}>
            <Text style={styles.textomsg}> Olá! Seja bem vinda ao novo sistema para entender melhor o seu "período menstrual", se voce tiver precisando de ajuda na sua situação se conecte a uma conta ou preencha  suas informações. Para entender melhor clique em "próximo texto".</Text>
          </View>
          :

          <View style={styles.mensagem2}>
            <Text style={styles.textomsg}>Nosso app foi desenvolvido para fazer você entender melhor o seu corpo e cuidar da sua saúde. O app também vai te acompanhar no seu dia a dia para saber como andam as coisas com voçê e lhe dar o apoio no que precisar. Para mais informações acesse a aba "TUDO SOBRE NOSSO APP".  </Text>

          </View>

        }
        <View style={styles.botao}>
          <Button color='brown' title={texto} onPress={clicarBotao} />
        </View>

        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.key}
          data={itens}
          renderItem={({ item }) => (
            <View style={styles.itens}>
              <Text style={styles.texto2}>{item.nome}</Text>
            </View>
          )}
        />



      </Animated.View>

    </ScrollView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',


  },
  animaçao: {

    alignItems: 'center',

  },

  mensagem1: {
    backgroundColor: '#eee',
    width: '95%',
    height: 135,
    borderRadius: 25,
    marginTop: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 5,
    marginBottom: 40,

  },

  mensagem2: {
    backgroundColor: '#eee',
    width: '95%',
    height: 155,
    borderRadius: 25,
    marginTop: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 5,
    marginBottom: 40,
    
  },
  textomsg: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: -12,
    marginRight: 10,
    marginStart: 10,

  },
  botao: {
    marginBottom: 5,
    width: '50%',
    



  },


  view1: {
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 50,


  },

  texto1: {
    fontWeight: 'bold',
    fontSize: 40,
  },

  itens: {
    marginTop: 80,
    marginBottom: -19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe4e1',
    width: 350,
    padding: 10,
    borderWidth: 5,
    borderRadius: 30,

  },


  texto2: {
    fontWeight: 'bold',
    fontSize: 18,


  },
});