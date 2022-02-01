import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import { Button } from 'react-native-paper';

export default function App() {
  console.log("HOLA");
  return (
    <PaperProvider>
      <SafeAreaView>
        <Text>Hola Word!</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </SafeAreaView>
    </PaperProvider>
  );
}