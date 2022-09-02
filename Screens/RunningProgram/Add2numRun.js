import React, { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, props} from "react-native";
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const address = ['0', '1', '2','3', '4', '5','6' ]
const data = ['0001 0100', '0010 0101', '0110 0110',' ', '0100', '1000', ' ' ]



const CONTENT = {
    tableHead: ['ADDRESS', 'DATA', "MEMONICS"],
    tableData: [
      ['0', '0001 0100' ,'LOAD 4'],
      ['1', '0010 0101' ,'ADD 5'],
      ['2', '0110 0110' ,'STORE 6'],
      ['3', '  ' ,'  '],
      ['4', '0100' ,'4'],
      ['5', '1000' ,'8'],
      ['6', [ans] ,'  '],


  
    ],
  };

  let ans='';


const Add2numRun = ({navigation}) => {  


  let [pc, setPc] = useState(0);
  let mar=0;
  let mdr=0;
  let decoder=0;

  let R1='R1'
  let R2='R2'
  let R3='R3'
  let R4='R4'

  let ALU='ALU'

  let S='S';
  let Z='Z';
  let AC='AC';
  let P='P';
  let CY='CY';
  let O='O';


    if(pc==0){
       mar='MAR';
       mdr='MDR';
    }
    else if(pc==1){
      mar=0;
      mdr="0001 0100";
      decoder="0001 0100";
      R1=4;
   }
  else if(pc==2){
    mar=1;
    mdr="0010 0101";
    decoder="0010   0101";  
    R1=12;
    ALU="4+8";
    S=0;
    Z=0;
  AC=0;
  P=0;
  CY=0;
  O=0;

 }
 else if(pc==3){
  mar=2;
  mdr="0110 0110";
  decoder="0110 0110";
  S=0;
  Z=0;
AC=0;
P=0;
CY=0;
O=0;
ans='1100';

}
 else if(pc==4){
  mar=3;
  mdr="-";
  decoder="-"
  S=0;
  Z=0;
AC=0;
P=0;
CY=0;
O=0;
}
else if(pc==5){
  mar=4;
  mdr="0100";
  decoder="-"
  S=0;
  Z=0;
AC=0;
P=0;
CY=0;
O=0;

}
else if(pc==6){
  mar=5;
  mdr="1000";
  decoder="-"
  S=0;
  Z=0;
AC=0;
P=0;
CY=0;
O=0;

}
else{
  Alert.alert("Memory END");

}

      // function clear(){
      //   pc='-';
      //   mar='-';
      //   mdr="-";
      //   decoder="-"
      //   S='-';
      //   Z='-';
      // AC='-';
      // P='-';
      // CY='-';
      // O='-';
      // }

    return (
        <View style={[styles.container, {
    
          flexDirection: "column",
          flex:1, 
          padding:0,
          backgroundColor: "#E7F7EB",
          paddingTop:0,
          paddingBottom:0,
          paddingLeft:3,
          paddingRight:3
          
        }]}>
          <View style={{flexDirection:'row', flex: 1, backgroundColor: "#4EAF53", alignItems:'center', alignContent:'center', justifyContent:'center'}} > 
    
            <View >
            <TouchableOpacity 
            style={styles.playbtn}
            onPress={() => {setPc(pc + 1)
            }}
            >
            <Text style={{fontFamily: 'MalayalamSangamMN-Bold', fontWeight: 'bold', textAlign:'center', fontSize:30, color: 'yellow' }}>▶</Text>
             </TouchableOpacity>
            </View>


            <View style={{backgroundColor:'#4EAF53'}}>
            <TouchableOpacity 
            style={styles.stopbtn}
            
            >
            <Text style={{fontFamily: 'MalayalamSangamMN-Bold', fontWeight: 'bold', textAlign:'center', fontSize:29, color:'red' }}>■</Text>
             </TouchableOpacity>
            </View>
          </View>
    
          
          <View style={{ flex: 5, backgroundColor: "#E7F7EB",}}>
          <View style={styles.kontainer}>
      <ScrollView>
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
      </ScrollView>
    </View>
          </View>
    
          <View style={{ flex: 0.7, backgroundColor: "yellow", borderWidth:2, borderColor: 'black'}}>
            <TextInput  style={styles.textes} placeholder="PC">{pc}</TextInput> 
          </View>
          <View style={{ flex: 0.7, backgroundColor: "#4CDBE5", borderWidth:2, borderColor: 'black', marginTop:0.4 }}>
          <TextInput editable={false} style={styles.textes} placeholder="MAR">{mar}</TextInput>
    
          </View>
          <View style={{ flex: 0.7, backgroundColor: "#4CDBE5", borderWidth:2, borderColor: 'black', marginTop:0.5, marginBottom:1   }}>
          <TextInput editable={false} style={styles.textes} placeholder="MDR">{mdr}</TextInput>
    
          </View>
    
          <View style={{ flex: 0.8, backgroundColor: "green" , flexDirection:'row'}}>
    
            <View style={{flex: 1, backgroundColor:'lightgrey', borderWidth:2, borderColor: 'black'}}>
            <TextInput editable={false} style={styles.textes}>{R1}</TextInput>
            </View>
            <View style={{flex: 1, backgroundColor:'lightgrey',borderWidth:2, borderColor: 'black'}}>
            <TextInput editable={false} style={styles.textes}>{R2}</TextInput>
            </View>
          </View>
          <View style={{ flex: 0.8, backgroundColor: "green" , flexDirection:'row'}}>
            <View style={{flex: 1, backgroundColor:'lightgrey', borderWidth:2, borderColor: 'black'}}>
            <TextInput editable={false} style={styles.textes}>{R3}</TextInput>
            </View>
            <View style={{flex: 1, backgroundColor:'lightgrey',borderWidth:2, borderColor: 'black'}}>
            <TextInput editable={false} style={styles.textes}>{R4}</TextInput>
            </View>
          </View>  
          <View style={{flex: 1, backgroundColor:'lightgrey',borderWidth:2, borderColor: 'black', marginTop: 1}}>
            <TextInput editable={false} style={styles.textes}>{ALU}</TextInput>
            </View>
            
          <View style={{ flex: 1.5, backgroundColor: "#E7F7EB" }}>
          <Text style={styles.decoderflagtxt} >DECODER</Text>
          <TextInput editable={false} style={{alignItems:'center', textAlign:'center' ,marginTop: 6, borderWidth:2, borderColor: 'black', backgroundColor:'white', fontSize:20, color:"black"}}>{decoder}</TextInput>
    
          </View>
          <View style={{ flex: 1.7, backgroundColor: "#E7F7EB" }}>
          <Text style={styles.decoderflagtxt}>FLAGS</Text>
          <View style={{flexDirection:'row'}}>
          <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'lightgrey', width:45, height: 50, marginLeft: 12, padding:19, color:'grey', fontSize:11, marginTop:5}}>{S}</TextInput>
          <TextInput editable={false} style={{borderWidth:1, borderColor: 'black',backgroundColor:'lightgrey', width:45, height: 50, marginLeft: 12, padding:19, color:'grey', fontSize:11, marginTop:5}}>{Z}</TextInput>
          <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'lightgrey', width:45, height: 50, marginLeft: 12, padding:15, color:'grey', fontSize:11, marginTop:5}}>{AC}</TextInput>
          <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'lightgrey', width:45, height: 50, marginLeft: 12, padding:19, color:'grey', fontSize:11, marginTop:5}}>{P}</TextInput>
          <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'lightgrey', width:45, height: 50, marginLeft: 12, padding:15, color:'grey', fontSize:11, marginTop:5}}>{CY}</TextInput>
          <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'lightgrey', width:45, height: 50, marginLeft: 12, padding:19, color:'grey', fontSize:11, marginTop:5}}>{O}</TextInput>
    
          </View>


    
    
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
      },
      playbtn:{
        width:38,
        height:38,
      marginLeft:270,
        borderRadius:29,
         borderColor: 'black',
         marginTop:7,
         backgroundColor:'black'
         
      },
    
      stopbtn:{
        width:38,
        height:38,
        marginLeft:0,
        borderRadius:29,
        marginTop:7,
         borderColor: 'black',
         color:'blue',
         backgroundColor:'black',
         marginLeft:4
         
      },
    textes:{
      textAlign:'center',
      fontFamily: "Cochin",
      fontSize:11,
      color:"black"    },
    decoderflagtxt:{
      textAlign:'center',
      fontFamily: "Cochin",
      fontSize:12,
      color:'black',
      fontWeight: 'bold',
    },
    kontainer: { flex: 1, padding: 1, paddingTop: 1, backgroundColor: '#E7F7EB' },
    head: { height: 30, backgroundColor: 'orange', fontWeight:'bold', color:"white"},
    wrapper: { flexDirection: 'row',},
    row: { height: 28,backgroundColor: 'white',  },
    text: { textAlign: 'center',},
    });
    
export default Add2numRun;