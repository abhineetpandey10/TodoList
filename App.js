import React,{useState} from 'react'
import {View,Text,TouchableOpacity, TextInput, StyleSheet,FlatList,ScrollView} from 'react-native'
const styles=StyleSheet.create(
  {
    header:
    {
      backgroundColor:'orange',
      borderBottomColor:'linen',
      borderBottomWidth:3
    },
    headerText:
    {
      
      color:'ivory',
      fontWeight:'bold',
      fontSize:25,
      alignSelf:'center',
      alignContent:'center',
      justifyContent:'center',
      paddingHorizontal:20,
      paddingVertical:10
    },
    input:
    {
      backgroundColor:'lightgoldenrodyellow',
      marginTop:0,
      borderTopColor:'ivory',
      borderTopWidth:4,
      marginHorizontal:8,
      marginVertical:10,
      borderRadius:10,
      height:200
    },
    inputText:
    {
      fontSize:20,
      alignSelf:'center',
      paddingHorizontal:10,
      paddingVertical:10,
      color:'brown'
    },
    addButtonContainer:
    {
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:'30%',
    },
    addButton:
    {
      position:'relative',
      justifyContent:'space-evenly',
      backgroundColor:'lightsalmon',
      width:'99%',
      marginBottom:15,
      borderRadius:6

    },
    addButtonText:
    {
      color:'white',
      fontWeight:'bold',
      paddingVertical:8,
      paddingHorizontal:10,
      alignSelf:'center'
    },
    listItem:
    {
      backgroundColor:'ivory',
      flex:1,
      marginHorizontal:10,
      marginTop:8,
      borderRadius:8,
      height:75,
      
      borderTopWidth:2,
      borderColor:'palegoldenrod'
    },
    listItemText:
    {
      paddingVertical:20,
      alignSelf:'center',
      fontWeight:'bold',
      fontSize:15
    },
    footer:
    {
      backgroundColor:'lightgoldenrodyellow',
      marginTop:'8%'
    },
    footerText:
    {
      alignSelf:'center',
      color:'lightgrey',
      padding:10
    },
    deleteButton:
    {
      position:'relative',
      justifyContent:'space-evenly',
      backgroundColor:'lightyellow',
      width:'94%',
      alignSelf:'center',
      marginBottom:15,
      borderRadius:6,
      borderBottomWidth:2,
      borderBottomColor:'palegoldenrod'
    },
    deleteButtonText:
    {
      color:'lightsalmon',
      paddingVertical:4,
      paddingHorizontal:10,
      alignSelf:'center' 
    }
  }
)
export default function App()
{
  const [todos,setTodos]=useState([]);
  var currentInput="";
  const onChangeTextHandler=(text)=>
  {
    currentInput=text;
  }
  const onAddHandler=()=>
  {
    if(currentInput.toString().trim()==='') ;
    else
    {
      var d=Math.random();
      setTodos((todos)=>
      {
        return [{key:d.toString(),name: currentInput},...todos]
      })
    }
  }
  const onDeleteHandler=(key)=>
  {
    setTodos((todos)=>
    {
      return todos.filter((item)=>(item.key)!=key)
    })
  }
  return(
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>TodoList</Text>
      </View>
      <View style={styles.input}>
        <TextInput style={styles.inputText} placeholder={"Type something here..."} onChangeText={(text)=>onChangeTextHandler(text)}/>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={()=>onAddHandler()}>
            <Text style={styles.addButtonText} >ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList style={{height:'50%'}}
        data={todos}
        renderItem={({item})=>
            (
              <View>
                <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{item.name}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.9} style={styles.deleteButton} onPress={()=>onDeleteHandler(item.key)}>
                    <Text style={styles.deleteButtonText}>DELETE</Text>
                </TouchableOpacity> 
              </View>
            )
          }
        />
      <View style={styles.footer}>
          <Text style={styles.footerText}>Have a good Day!</Text>
      </View>
    </View>
  )
}
