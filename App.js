import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      name: 'Iniciar',
      ultimo: null
    };

    this.timer = null;
    this.inicia = this.inicia.bind(this);
    this.encerra = this.encerra.bind(this);
  }

  inicia() {

    if(this.timer != null ) {
      clearInterval(this.timer);
      this.timer = null

      this.setState({name: 'Iniciar'});
    } else {
      this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);

      this.setState({name: 'Pausar'});
    }

  };

  encerra() {

    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      name: 'Iniciar'
    })

  };

  render(){
    return (
    <View style={styles.container}>

      <Image
      source={require('./src/cronometro.png')}
      style={styles.relogio}
      />


      <Text style = {styles.timer}>
        {this.state.numero.toFixed(1)}
      </Text>

      <View style = {styles.btnArea}>

        <TouchableOpacity style = {styles.btn} onPress = {this.inicia}>
          <Text style = {styles.btnTexto}>{this.state.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.btn} onPress = {this.encerra}>
          <Text style = {styles.btnTexto}>Encerrar</Text>
        </TouchableOpacity>

      </View>

        <Text style = {styles.textResults}> 
        {this.state.ultimo > 0 ? 'Último tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''} 
        </Text>
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db70b8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timer: {
    marginTop: -170,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 65
  },

  btnArea: {
    flexDirection: 'row',
    marginTop: 100,
    height: 50
  },

  btn: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 17,
    height: 50,
    borderRadius: 9
  },

  btnTexto: {
    color: '#db70b8',
    fontSize: 20,
    fontWeight: 'bold'
  },

  textResults: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100
  },

});

export default App;