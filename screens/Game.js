import React ,{useState,useEffect} from 'react';
import { StyleSheet,Text,View,Button,Alert,TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnimatedButton from '../components/AnimatedButton';





export default function Game(){


const navigation = useNavigation()

 const baseNumber = Math.floor(Math.random()*100);
 const score = Math.floor(Math.random() * 100);

 const [choice,setChoice] = useState('');




useEffect(() => {

    if(choice){
         const winner = (choice === 'higher' && score > baseNumber)|| (choice === 'lower' && baseNumber > score)
         Alert.alert(`You've ${winner ? 'won' : 'lost'}`)
         navigation.goBack()
    }




},[baseNumber,score,choice])
 


return(
   <View style={Styles.container}>
       <Text style={Styles.baseNumber}>Base:{baseNumber}</Text>



       {/* <TouchableHighlight onPress={() => setChoice('higher')} title='higher' style={[Styles.button,Styles.buttonGreen]}>
           <Text style={[Styles.buttonText]} > Higher</Text>
       </TouchableHighlight>

       <TouchableHighlight onPress={() => setChoice('lower')} title='lower' style={[Styles.button,Styles.buttonRed]}>
           <Text  style={Styles.buttonText}>
               Lower
           </Text>
       </TouchableHighlight> */}
       <AnimatedButton  action="higher" onPress={setChoice}/>
       <AnimatedButton action="lower" onPress={setChoice} />
       
   </View>
)
}




const Styles = StyleSheet.create({

   container:{
   flex:1,
   backgroundColor:'#fff',
   alignItems:'center',
   justifyContent:'center'},

   baseNumber:{
       fontSize:48,
       marginBottom:30
   },

   button:{
       display:'flex',
       alignItems:'center',
       justifyContent:'space-around',
       borderRadius:15,
       padding:30,
       marginVertical:5
   },

   buttonText:{
       color:'white',
       fontSize:24
   },
   buttonRed:{
       backgroundColor:'red'
   },
   buttonGreen:{
       backgroundColor:'green'
   }


})
