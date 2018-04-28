// Develeoped by futureApps
// Developer: Subhodip
// About: A demo Calculator App using react-native

import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Content, Form, Textarea, Text, List, ListItem, Button, Input, Right, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Foundation';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      val: "0",
      result:"0"
    }
  }
calculate = ()=>{
this.setState({
 result: eval(this.state.val)
})
}

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#FF9800'}}>
          <Text style={styles.header}>Calci</Text>
          <Right>
          <Icon name="paw" style={{color:'#FFF', fontSize: 40}}  />
          </Right>
          </Header>
        <Content >
        <Grid style={{ height: 135, width: 408, }}>
        <Row style={{justifyContent: 'flex-end', flexWrap:'wrap'}}>
        <Text style={{ textAlignVertical:'top', fontSize: 40}}>{this.state.val}</Text>
        </Row>
       <Row style={{justifyContent: 'flex-end', flexWrap:'wrap'}}>
       <Text style={{ textAlignVertical:'bottom', fontSize: 40}}>{this.state.result}</Text>
         </Row>
          </Grid>
          <Grid style={{marginHorizontal:6, marginBottom: 2}}>
            <Row>
          <Button warning  style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }} onPress={()=> this.setState({val: this.state.val == "0"? "1": this.state.val + "1"})}>    
          <Text  style={{fontSize: 21, }}>1</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }} onPress={()=> this.setState({val: this.state.val =="0"? "2": this.state.val + "2"})}>    
            <Text style={{fontSize: 21, }}>2</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }} onPress={()=> this.setState({val: this.state.val == "0"? "3": this.state.val+ "3"})}>    
            <Text style={{fontSize: 21, }}>3</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }}  onPress={()=> this.setState({result: eval(this.state.val),val: this.state.val + "+"})}>    
            <Text style={{fontSize: 21, }}>+</Text>
              </Button>
              </Row>
              </Grid>
              <Grid style={{marginHorizontal:6, marginBottom: 2}}>
                <Row>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }}  onPress={()=> this.setState({val: this.state.val == "0"? "4": this.state.val + "4"})}>    
            <Text style={{fontSize: 21, }}>4</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }}  onPress={()=> this.setState({val: this.state.val == "0"? "5": this.state.val +"5"})}>    
            <Text style={{fontSize: 21, }}>5</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }}   onPress={()=> this.setState({val: this.state.val == "0"? "6": this.state.val + "6"})}>    
            <Text style={{fontSize: 21, }}>6</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }}  onPress={()=> this.setState({result: eval(this.state.val),val: this.state.val + "-"})}>    
            <Text style={{fontSize: 21, }}>--</Text>
              </Button>
              </Row></Grid>
              <Grid style={{marginHorizontal:6, marginBottom: 2}}>
                <Row>
                <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }}   onPress={()=> this.setState({val: this.state.val == "0" ? "7": this.state.val0 + "7"})} >    
            <Text style={{fontSize: 21, }}>7</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }}  onPress={()=> this.setState({val: this.state.val == "0" ? "8": this.state.val + "8"})}>    
            <Text style={{fontSize: 21, }}>8</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }}  onPress={()=> this.setState({val: this.state.val == "0" ?"9": this.state.val + "9"})}>    
            <Text style={{fontSize: 21, }}>9</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }}  onPress={()=> this.setState({result: eval(this.state.val),val: this.state.val + "*"})}>    
            <Text style={{fontSize: 21, }} >X</Text>
              </Button>
                  </Row>
                </Grid>
                <Grid style={{marginHorizontal:6, marginBottom: 4}}>
                <Row>
              <Button warning style={{height: 100, width: 200, borderRadius:100, justifyContent: 'center', }}  onPress={()=> this.setState({val: this.state.val == "0"? "0": this.state.val + "0"})}>    
            <Text style={{fontSize: 21, }}>0</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }}  onPress={()=> this.setState({val: "0", prevVal: "0", operator: null})}>    
            <Text style={{fontSize: 21, }}>AC</Text>
              </Button>
              <Button warning style={{height: 100, width: 100, borderRadius:100, justifyContent: 'center', }} onPress={()=> this.setState({result: eval(this.state.val),val: this.state.val + "/"})}>    
            <Text style={{fontSize: 21, }}>/</Text>
              </Button>
                  </Row>
                </Grid>
                <Grid style={{marginHorizontal:6, justifyContent: 'center', marginBottom:4}}>
                  
                  <Button success style={styles.button} onPress={this.calculate} >
                      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> Calculate </Text>
                  </Button>                
                   
                  </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'left',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF', 
    
  },
  button: {
    
    padding: 10,
    width: 400,
    height: 49,
    justifyContent: 'center'
  },
});
