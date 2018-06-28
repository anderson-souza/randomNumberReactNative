import React from 'react';
import { Text, AppRegistry, View, Button } from 'react-native';

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);

  alert(numeroAleatorio);
};

const App = () => {
  return (
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button 
        title="Gerar um número aleatório"
        onPress={geraNumeroAleatorio}
      />
    </View>
    
  );
};

AppRegistry.registerComponent('app1', () => App);
