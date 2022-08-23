import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [txt, setTxt] = useState('안녕하세요.');

  useEffect(() => {
    console.log('프로그램 시작');
  }, []);

  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem('assa', value)
      console.log('저장');
    } catch (e) {
      // Saving error
    }
  }

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem('assa')
      if(value !== null) {
        setTxt(value);
      }
    } catch (e) {
      // error reading value
    }
  }

  return (
    <View style={{ flex:1, }}> 
      <SafeAreaView style={{ flex:1, }}>
        <StatusBar style={{flex:1,}}/>
        <View style={{ padding:10, flexDirection: 'row', 
                      alignItems: 'center', justifyContent: 'space-between', }}>
          <Button title='저장' onPress={() => saveData(txt)} />
          <Text style={{ textAlign: 'center', fontSize: 18, }}>메모장</Text>
          <Button title='불러오기' onPress={() => loadData()}/>
        </View>
        
        <View style={{backgroundColor: '#eeeeee', flex: 1, padding: 10, }}>
          <TextInput value={txt} 
            onChangeText={txt => setTxt(txt)} 
            multiline
          />
        </View>
      </SafeAreaView>
    </View>
  );
}