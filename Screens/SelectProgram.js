import * as React from 'react';
import { FlatList, Text, View, StyleSheet, SafeAreaView, TouchableHighlight, Button, ScrollView} from 'react-native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



const SelectProgram = ({navigation}) => {
  return (
    
    <View style={{flex:1, backgroundColor: '#E7F7EB'}}>

    <View style={{flex:0.25, backgroundColor: '#4EAF53'}}>
    <Text style={styles.mptext}>MICROPROCESSOR</Text>

    </View>

<View style={{marginTop:10, }}>
<ScrollView >
    <View style={{marginTop:1, borderRadius: 5, width: 340, height: 45, marginLeft:10}}>
    <Button title='ADD TWO NUMBERS' color='orange' onPress={()=>navigation.navigate('A2n')}>
    </Button>
    </View>
    <View style={{marginTop:1, borderRadius: 5, width: 340, height: 45, marginLeft:10}}>
    <Button title='SUBTRACT TWO NUMBERS' color='orange' onPress={()=>navigation.navigate('S2n')}> </Button>
    </View>
    <View style={{marginTop:1, borderRadius: 5, width: 340, height: 45, marginLeft:10}}>
    <Button title='MULTIPLY TWO NUMBERS' color='orange' onPress={()=>navigation.navigate('M2n')}> </Button>
    </View>
    <View style={{marginTop:1, borderRadius: 5, width: 340, height: 45, marginLeft:10}}>
    <Button title='DIVIDE TWO NUMBERS' color='orange' onPress={()=>navigation.navigate('D2n')}> </Button>
    </View>
    <View style={{marginTop:1, borderRadius: 5, width: 340, height: 45, marginLeft:10}}>
    <Button title='ADD THREE NUMBERS' color='orange' onPress={() => { alert('Please Select Large Microprocessor! Cannot perform this on 8 BIT Microprocessor')}}> </Button>
    </View>
    <View style={{marginTop:1, borderRadius: 5, width: 340, height: 45, marginLeft:10}}>
    <Button title='SUBTRACT THREE NUMBERS' color='orange' onPress={() => { alert('Please Select Large Microprocessor! Cannot perform this on 8 BIT Microprocessor')}}> </Button>
    </View>
    <View style={{marginTop:1, borderRadius: 5, width: 340, height: 45, marginLeft:10}}>
    <Button title='MULTIPLY THREE NUMBERS' color='orange' onPress={() => { alert('Please Select Large Microprocessor! Cannot perform this on 8 BIT Microprocessor')}}> </Button>
    </View>
    <View style={{marginTop:1, borderRadius: 5, width: 340, height: 45, marginLeft:10}}>
    <Button title='DIVIDE THREE NUMBERS' color='orange' onPress={() => { alert('Please Select Large Microprocessor! Cannot perform this on 8 BIT Microprocessor')}}> </Button>
    </View>
    <View style={{marginTop:1, borderRadius: 5, width: 340, height: 45, marginLeft:10}}>
    <Button title='STORE VALUE' color='orange' > </Button>
    </View>
    <View style={{marginTop:1, borderRadius: 5, width: 340, height: 45, marginLeft:10}}>
    <Button title='MOVE VALUE' color='orange' > </Button>
    </View>

  </ScrollView>
</View>
   
    


    </View>

  )}
  const styles = StyleSheet.create({
    btns: {
      width: 340,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'darkorange',
      marginRight:100,
      padding: 5,
      marginLeft:10,
      marginTop: 5,
      fontWeight: 'bold',

    },
    mptext: {
      fontFamily: "Cochin",
      fontSize:32,
      color:'#E7F7EB',
      fontWeight: 'bold',
      textAlign:'center',
      marginTop:14,
    }
  });
  

export default SelectProgram;