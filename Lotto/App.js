import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [lotto, setLotto] = useState([]);

  function makeLotto() {
    let lnumber = [];
    let rnumber = 0;

    let lottos = [];
    for(let i=1; i<=45; i++) {
      lottos.push(i);
    }

    for(let i=0; i<=44; i++) {
      rnumber = Math.floor(Math.random() * 45);
      a = lottos[i];
      lottos[i] = lottos[rnumber];
      lottos[rnumber] = a;
    }

    for(let i=0; i<6; i++) {
      lnumber.push(lottos[i]);
    }

    setLotto(lnumber);
  }

  useEffect(() => {
    makeLotto();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 100,}}>로또앱</Text>
      <Button title="로또번호 생성" onPress={() => makeLotto()} />
      <Text style={{fontSize:25,}}>{lotto.toLocaleString()}</Text>
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
});
