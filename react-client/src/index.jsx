import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import {Button} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
     // this.handleChange = this.handleChange.bind(this);
     // this.handleAdd = this.handleAdd.bind(this);
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/add', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
    
  // }

  // handleChange(){
  //   this.setState({items:})

  // }

  // handleAdd(){
  //   console.log("run function handleadd")

  //   $.ajax({
  //     url: '/add', 
  //     method : 'POST',
  //     data :{"ticket":"18"},
  //     success: (ress) => {
  //       console.log('response from server: ', ress);
  //       //add one item 

  //       var a=this.state.items
  //       a.push(ress)


  //       this.setState({items:a})
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }



  // hadleView(){
  //   console.log("12333")
  // }
handleClick(){
  console.log('HHHHHHHHHHHHHHHHH')
    $.ajax({
      url: '/add', 
      method : 'POST',
      data :{text:$('.text').val()},
      success: (ress) => {
        console.log('response from server: ', ress);
        //add one item 

        var a=this.state.items
        a.push(ress)


        this.setState({items:a})
      },
      error: (err) => {
        console.log('err', err);
      }
    });
}
handleView(){
    $.ajax({
      url: '/items', 
      success: (data) => {
        console.log('rrrrr',data)
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
}

  render () {
    return (
    <div >

      <center> <h1> Ticketing System </h1></center>

      <Col smOffset={20} sm={10}>
      <FormControl
      className='text'
            type="text"
            value={this.state.value}
            placeholder="Enter your ticket"
            onChange={this.handleChange}
          />
      </Col>


        <FormGroup>
        <Col smOffset={50} sm={10}>
        <Button onClick ={()=>{this.handleClick()}} type="add" 
        > Add A Ticket</Button>
        </Col>
         </FormGroup>

      <Col smOffset={20} sm={10}>
        <Button onClick = {() => {this.handleView()}}bsStyle="info" >View All Tickets </Button>
      </Col>


      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));