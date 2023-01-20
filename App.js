import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import MainStack from './navigation/MainStack';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

//<></>
//rnfe

function App() {
  return (
    <View style={{ flex: 1 }}>
          <MainStack/>
    </View>
  );
}

export default App;