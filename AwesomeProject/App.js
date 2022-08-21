import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [cnt, setCnt] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.assa}>숫자 카운터</Text>
      <Text style={styles.cnt}>{cnt}</Text>
      <Button title='더하기' onPress={ () => setCnt(cnt+1) }/>
      <Text/>
      <Button title=' 빼 기 ' onPress={ () => setCnt(cnt-1) }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  assa:{
    color:'#009dff',
    fontSize: 20,
  },
  cnt:{
    fontSize: 50,
    marginTop: 20,
    marginBottom: 20,
  },
});
