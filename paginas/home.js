import {View, Text, Button, TextInput} from 'react-native'
import {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {estilos} from '../css/estilos'

export default function Home(){

  return(
    <View> 
      <Text style={estilos.tituloMenu}> Tela de Home</Text>
      <View style={estilos.telaMenus}>
        <View style={estilos.itemMenuPrincipal}>
         <View style={estilos.iconeStyle}>
          <Icon name="user" size={50} color="#191970" />
         </View>
        <Text style={estilos.tituloItemMenu}>Cadastro de Produtos</Text>
        </View>        
        <View style={estilos.itemMenuPrincipal}>
         <View style={estilos.iconeStyle}>
          <Icon name="share" size={50} color="#191970" />
         </View>
        <Text style={estilos.tituloItemMenu}>Cadastro de Produtos</Text>
      </View>
        <View style={estilos.itemMenuPrincipal}>
         <View style={estilos.iconeStyle}>
          <Icon name="folder" size={50} color="#191970" />
         </View>
         <Text style={estilos.tituloItemMenu}>Cadastro de Produtos</Text>
        </View>
        <View style={estilos.itemMenuPrincipal}>
         <View style={estilos.iconeStyle}>
          <Icon name="gear" size={50} color="#191970" />
         </View>
         <Text style={estilos.tituloItemMenu}>Cadastro de Produtos</Text>
      </View>     
           

      </View>
    </View>
    

    
  )
}