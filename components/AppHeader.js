import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
 
class AppHeader extends React.Component{
  render(){
    return(
   <View style={styles.textContainer}>
     <Text style={styles.text}>SCHOOL ATTENDANCE APP</Text>
     </View>

    )
  }
}
const styles= StyleSheet.create({
  textContainer:{
    backgroundColor:"pink",
    padding:40
    
  },
  text:{
   color:"black",
   fontSize:17,
   fontWeight:"bold",
   fontFamily:"sans-serif",
   textAlign:"center"
  }
});
export default AppHeader;
