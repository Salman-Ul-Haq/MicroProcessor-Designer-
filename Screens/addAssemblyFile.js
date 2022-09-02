import * as React from 'react';
import { FlatList, Text, View, StyleSheet, SafeAreaView, TouchableHighlight, Button, ScrollView} from 'react-native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



const addAssemblyFile = ({navigation}) => {
  return (
    
    <View style={{flex:1, backgroundColor: '#EAE2B7'}}>
    <Text>SELECT FILE</Text>
    </View>
  )}

export default addAssemblyFile;