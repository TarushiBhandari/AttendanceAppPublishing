import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component{

  constructor(){
    super();
    this.state={
      allStudents: [],
      presentPressed: [],
      absentPressed: [],
      MELISSA: '',
      TASHA: '',
      DENISE: '',
      JULYN: ''
    }
  }

  compoenentDidMount= async ()=>{
    var class_ref= await db.ref('/').on("value", data=>{
      var students= []
      var class_a= data.val();

      for(var i in class_a){
        students.push(class_a[i])
      }

      students.sort((function(x, y){
        return x.roll_no- y.roll_no;
      }));
console.log(students);
      this.setState({allStudents: students});
      console.log(this.allStudents);
    })
  }

  updateAttendance(roll_no, status){
    var id= '';
    if(roll_no<=9){
      id= '0' + roll_no
    }else {
      id= roll_no;
    }
    console.log(id);

    var today= new Date();
    var dd= today.getDate();
    var mm= today.getMonth()+1;
    var yyyy= today.getFullYear();

    if(dd<10){
      dd= '0'+ dd;
    }

    if(mm<10){
      mm= '0'+ mm;
    }

    today= dd+ '-'+ mm+ '-'+ yyyy;
    var ref_path= 'students/'+id;
    var class_ref= db.ref(ref_path);
      class_ref.update({
        [today]: status
      });
  }

  submitAttendance=()=>{
    this.props.navigation.navigate('SummaryScreen');
  }

  render(){
    return(

      <View>
        <AppHeader/>

         <View>
   <View>
   
   </View>
   <Text style={{marginTop:20 ,
    color:"red",fontSize:20}}
    >01.MELISSA</Text>
     <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ MELISSA: 'Present' });
            var rollNo= 1;
            this.updateAttendance(rollNo, 'present')
            
          }}>
          <Text style={styles.text}>PRESENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ MELISSA: 'Absent' });
            var rollNo= 1;
            this.updateAttendance(rollNo, 'absent')
          }}>
            <Text style={styles.text}>ABSENT</Text>
          </TouchableOpacity>

   <Text style={{marginTop:50,color:"red",fontSize:20}}>02.TASHA</Text>
    <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ TASHA: 'Present' });
            var rollNo= 2;
            this.updateAttendance(rollNo, 'present')
          }}>
          <Text style={styles.text}>PRESENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ TASHA: 'Absent' });
            var rollNo= 2;
            this.updateAttendance(rollNo, 'present')
          }}>
            <Text style={styles.text}>ABSENT</Text>
          </TouchableOpacity>

   <Text style={{marginTop:50,color:"red",fontSize:20}}>03.DENISE</Text>
    <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ DENISE: 'Present' });
            var rollNo= 3;
            this.updateAttendance(rollNo, 'present')
          }}>
          <Text style={styles.text}>PRESENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ DENISE: 'Absent' });
            var rollNo= 3;
            this.updateAttendance(rollNo, 'absent')
          }}>
            <Text style={styles.text}>ABSENT</Text>
          </TouchableOpacity>

   <Text style={{marginTop:50,color:"red",fontSize:20}}>04.JULYN</Text>
    <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ JULYN: 'Present' });
            var rollNo= 4;
            this.updateAttendance(rollNo, 'present')
          }}>
          <Text style={styles.text}>PRESENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ JULYN: 'Absent' });
            var rollNo= 4;
            this.updateAttendance(rollNo, 'absent')
            
          }}>
            <Text style={styles.text}>ABSENT</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>{
            this.submitAttendance();
            
            }}
            >

            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
 
 </View>
      </View>
 
 )}}

 const styles= StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth:2,
    borderRadius: 15,
    marginTop: 50,
    width: 170,
    height: 50,
    backgroundColor: 'cyan'
  },

  buttonText :{
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Times New Roman',
    fontSize: 20,
    fontWeight: 'bold'
    },

  presentContainer: {
    borderWidth: 2,
    width: 80,
    height: 30,
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 125,
    marginTop: -30,
    backgroundColor: 'green',
    fontWeight: 'bold'
  },

  absentContainer: {
    borderWidth: 2,
    width: 80,
    height: 30,
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 225,
    marginTop: -30,
    backgroundColor: 'red',
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 3
  },
  })