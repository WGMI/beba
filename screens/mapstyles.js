import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#fff"
  },
  options:{
    height: '50%',
    width: '100%',
    position:'absolute'
  },
  container: {
    height: '80%',
    width: '100%',
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  },
  whereTo:{
    width: '100%', 
    height: '20%', 
    backgroundColor: '#CBC3E3', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  input:{
    backgroundColor:'white',
    justifyContent:'center',
    height:40,
    width:'90%',
    paddingLeft:20,
    borderRadius:10,
    marginBottom:5
  }
});

export default styles