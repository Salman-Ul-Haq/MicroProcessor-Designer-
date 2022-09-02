import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';




const FDE = ({navigation}) => {
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
      <View style={{flexDirection:'row', flex: 1, backgroundColor: "#4EAF53",}} > 

        <View >
        <TouchableOpacity 
        style={styles.playbtn}
        
        >
        <Text style={{fontFamily: 'MalayalamSangamMN-Bold', fontWeight: 'bold', textAlign:'center', fontSize:30, color: 'green' }}>▶</Text>
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
    
      </View>

      <View style={{ flex: 0.7, backgroundColor: "yellow", borderWidth:2, borderColor: 'black'}}>
        <TextInput editable={false} style={styles.textes }>PC</TextInput> 
      </View>
      <View style={{ flex: 0.7, backgroundColor: "#60D25F", borderWidth:2, borderColor: 'black', marginTop:0.4 }}>
      <TextInput editable={false} style={styles.textes}>MAR</TextInput>

      </View>
      <View style={{ flex: 0.7, backgroundColor: "#4CDBE5", borderWidth:2, borderColor: 'black', marginTop:0.5, marginBottom:1   }}>
      <TextInput editable={false} style={styles.textes}>MDR</TextInput>

      </View>

      <View style={{ flex: 0.8, backgroundColor: "green" , flexDirection:'row'}}>

        <View style={{flex: 1, backgroundColor:'lightgrey', borderWidth:2, borderColor: 'black'}}>
        <TextInput editable={false} style={styles.textes}>R1</TextInput>
        </View>
        <View style={{flex: 1, backgroundColor:'lightgrey',borderWidth:2, borderColor: 'black'}}>
        <TextInput editable={false} style={styles.textes}>R2</TextInput>
        </View>
      </View>
      <View style={{ flex: 0.8, backgroundColor: "green" , flexDirection:'row'}}>
        <View style={{flex: 1, backgroundColor:'lightgrey', borderWidth:2, borderColor: 'black'}}>
        <TextInput editable={false} style={styles.textes}>R3</TextInput>
        </View>
        <View style={{flex: 1, backgroundColor:'lightgrey',borderWidth:2, borderColor: 'black'}}>
        <TextInput editable={false} style={styles.textes}>R4</TextInput>
        </View>
      </View>  
      <View style={{flex: 1, backgroundColor:'lightgrey',borderWidth:2, borderColor: 'black', marginTop: 1}}>
        <TextInput editable={false} style={styles.textes}>ALU</TextInput>
        </View>
        
      <View style={{ flex: 1.5, backgroundColor: "#E7F7EB" }}>
      <Text style={styles.decoderflagtxt} >DECODER</Text>
      <TextInput editable={false} style={{marginTop: 6, borderWidth:2, borderColor: 'black', backgroundColor:'orange', fontSize:20}}>110101</TextInput>

      </View>
      <View style={{ flex: 1.7, backgroundColor: "#E7F7EB" }}>
      <Text style={styles.decoderflagtxt}>FLAGS</Text>
      <View style={{flexDirection:'row'}}>
      <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'#F26D70', width:45, height: 50, marginLeft: 12, padding:19, color:'grey', fontSize:11, marginTop:5}}>S</TextInput>
      <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'#F26D70', width:45, height: 50, marginLeft: 12, padding:19, color:'grey', fontSize:11, marginTop:5}}>Z</TextInput>
      <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'#F26D70', width:45, height: 50, marginLeft: 12, padding:15, color:'grey', fontSize:11, marginTop:5}}>AC</TextInput>
      <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'#F26D70', width:45, height: 50, marginLeft: 12, padding:19, color:'grey', fontSize:11, marginTop:5}}>P</TextInput>
      <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'#F26D70', width:45, height: 50, marginLeft: 12, padding:15, color:'grey', fontSize:11, marginTop:5}}>CY</TextInput>
      <TextInput editable={false} style={{borderWidth:1, borderColor: 'black', backgroundColor:'#F26D70', width:45, height: 50, marginLeft: 12, padding:19, color:'grey', fontSize:11, marginTop:5}}>O</TextInput>

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
     color:'blue',
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
  color:'grey',
},
decoderflagtxt:{
  textAlign:'center',
  fontFamily: "Cochin",
  fontSize:12,
  color:'black',
  fontWeight: 'bold',
}
});

export default FDE;