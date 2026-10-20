import { Image, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Funcionou</Text>

      <Image
        source={require('../../assets/expo.icon/Assets/logo.svg')}
        style={{ width: 100, height: 100 }}
      />
    </View>    
  );
}