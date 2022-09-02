import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
  tableHead: ['ADDRESS', 'DATA', "MEMONICS"],
  tableData: [
    ['0', '0001 0100' ,'LOAD 4'],
    ['1', '0010 0101' ,'ADD 5'],
    ['2', '0110 0110' ,'STORE 6'],
    ['3', '  ' ,'  '],
    ['4', '0100' ,'4'],
    ['5', '1000' ,'8'],
    ['6', '  ' ,'  '],

  ],
};

export default function Add2num({navigation}) {
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.tableTitle}
            textStyle={styles.text}
          />
          <Rows
            data={CONTENT.tableData}
            flexArr={[1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
      <View style={{flex:1}}>
      <View style={{width:80, marginLeft:130, marginTop:100, borderRadius:49, alignContent:'center', alignItems:'center'}}>
      <TouchableOpacity 
           onPress={()=>{
        navigation.navigate('A2nr')}}
        style={styles.runbtn}   
        
        >
        <Text style={{fontFamily: 'Bold', fontWeight: 'bold'}}>SELECT</Text>
         </TouchableOpacity>     
          </View>
      
    </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 10, backgroundColor: "#E7F7EB" },
  head: { height: 50, backgroundColor: 'orange', fontWeight:'bold'},
  wrapper: { flexDirection: 'row', backgroundColor: 'white', },
  row: { height: 28 },
  text: { textAlign: 'center' },
  runbtn:{
    marginVertical:20,
    height:50,
    width:110,
    marginHorizontal:100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:100,
    borderRadius:39,
    backgroundColor:'#4CB050'
  },

});