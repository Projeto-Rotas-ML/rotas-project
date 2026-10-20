import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

function Contador() {
  const [entregues, setEntregues] = useState(0);

  return (
    <Pressable onPress={() => setEntregues(entregues + 1)}>
      <Text>Entregues: {entregues}</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Funcionou</Text>

      <Contador />

      <Image
        source={require('../../../assets/expo.icon/Assets/logo.svg')}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}