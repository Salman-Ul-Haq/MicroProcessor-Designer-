import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TouchableNativeFeedbackComponent, TouchableOpacity, Pressable} from "react-native";
import { Avatar } from "react-native-elements";
import { NavigationContainer, navigate } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';


const Run = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState("8 BIT");

  return (

    <View
      style={{
        flexDirection: "column",
        height:'100%',
        flex:1, alignContent:'center', justifyContent:'center'
      }}>

            <View style={{ backgroundColor: "#4EAF53", flex: 0.7 }} >
                <Text style={styles.mptext}>
                  MICROPROCESSOR
                </Text>

            </View>
            
            <View style={{ backgroundColor: "#E7F7EB", flex: 0.9 }} >
            
            <View>
      <Picker
        selectedValue={selectedValue}
        style={{marginLeft:90,
        marginTop:10,
        borderWidth: 10,
        borderRadius:10,
        width: 150,
        borderRadius: 15, borderWidth: 0, overflow: "hidden", height: 15, padding: 0, backgroundColor: "lightgrey", alignItems:'center', justifyContent:'center'

        
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        mode="dropdown"

        >
        
        <Picker.Item label="8 BIT" value="8b" />
        <Picker.Item label="16 BIT" value="16b" />
        <Picker.Item label="32 BIT" value="32b" />
        <Picker.Item label="64 BIT" value="64b" />
      </Picker>
      
    </View>
            </View>

            <View style={{ backgroundColor: "#E7F7EB", flex: 1.2 }} >
            <View >
            <TouchableOpacity 
           onPress={()=>{
        navigation.navigate('Sp')}}
        style={styles.addprobtn}
        
        >
        <Text style={{fontFamily: 'MalayalamSangamMN-Bold', fontWeight: 'bold', fontSize:11}}>SELECT PROGRAM</Text>
         </TouchableOpacity>           
          </View>
            </View>

            <View style={{ backgroundColor: "#E7F7EB", flex: 1.2 }} >
            <View style={styles.addafbtn}>           
         <TouchableOpacity 
          onPress={() => {
    alert('Yahan sy file add hoggi!');
  }}
        style={styles.addafbtn}
        
        >
        <Text style={{fontFamily: 'MalayalamSangamMN-Bold', fontWeight: 'bold', fontSize:11}}>ADD ASSEMBLY FILE</Text>
         </TouchableOpacity>
            </View>

            </View>
            
            <View style={{ backgroundColor: "#E7F7EB", flex: 2 }} >
            <View style={styles.runbtn }> 
            
          <TouchableOpacity 
           onPress={()=>{
        navigation.navigate('FDE')}}
        style={styles.runbtn}
        
        >
        <Text style={{fontFamily: 'MalayalamSangamMN-Bold', fontWeight: 'bold'}}>RUN</Text>
         </TouchableOpacity>

         
            </View>
            </View>
    </View>

  );	
};
const styles = StyleSheet.create({
	mptext: {
	  fontFamily: "Cochin",
	  fontSize:34,
	  color:'#E7F7EB',
	  fontWeight: 'bold',
	  textAlign:'center',
	  marginTop:25,
	  

	},
  container:{

    borderColor:"red",
    borderRadius:10
  },
	cbtn: {
		width: 95,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		backgroundColor: 'orange',
		marginRight:100,
		padding: 1,
		marginLeft: 136,
    marginTop: 5,
    fontWeight: 'bold',

	},
	ctxt:
	{
		fontSize:15,
		color:'black',
		fontWeight: 'bold',
		textAlign:'center',
    fontWeight: 'bold',
	},
  size:
	{
    width:75,
    height: 30,
		color:'black',
    borderColor: 'orange',
    borderRadius:1,
    fontWeight: 'bold',
    marginLeft:136,
    marginTop: 25




	},
  addprobtn: {
    marginVertical:20,
    height:70,
    width:120,
    marginHorizontal:100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:100,
    borderRadius:9,
    backgroundColor:'orange'




  },
  addafbtn: {
    marginVertical:20,
    height:70,
    width:120,
    marginHorizontal:100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:100,
    borderRadius:9,
    backgroundColor:'orange'



 
  },
  runbtn:{
    marginVertical:20,
    height:70,
    width:120,
    marginHorizontal:100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:100,
    borderRadius:49,
    backgroundColor:'lightgreen'
  },



  });
export default Run;