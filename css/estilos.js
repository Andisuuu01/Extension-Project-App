import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#191970',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35
  },
  inputStyleText:{
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 15,
    padding: 8
  },
  tituloLogin:{
    color: '#DCDCDC',
    marginBottom:10,
    textAlign: 'center',
    fontSize: 24
  },
  tituloMenu:{
    color: '#3740fe',
    marginBottom:10,
    textAlign: 'center',
    fontSize: 16
  },
  telaMenus:{
   margin:5,
   direction: 'column',
   display: 'block'  
  },

  itemMenuPrincipal:{
    backgroundColor: 'white',
    height: 100,
    width: '45%',
    borderRadius: 8,
    display:'inline-block',
    margin:5
  },
  tituloItemMenu:{
    textAlign: 'center',
    padding: 5
  },
  iconeStyle:{
    alignItems: 'center',
    marginTop: 5,
  }
})