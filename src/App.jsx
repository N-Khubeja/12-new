
import './App.css';
import { Component } from 'react';
import Todotasks from './Components/Todotask';
import Todonetasks from './Components/Todonetask';

class App extends Component {

    state = {
      todotasks : [],
      todonetasks : [],
      inputtask : ''
    }

    onchange =(event) => {
      const value = event.target.value
      this.setState({
        inputtask : value
      })  
    }

    addtask = (event) => {
      event.preventDefault()

      if(this.state.inputtask === ''){
        alert('type task')
        return
        
      }
      

     const newtask = {
      task:this.state.inputtask,
      id:this.state.todotasks.length + 1
     }

     this.setState({
      todotasks:[...this.state.todotasks,newtask],
      inputtask:''
     })
    }

    alreadydone = (id) => {
        const donetask = this.state.todotasks.find((e) => e.id === id)
        const donetaskuser = {
          task:donetask.task,
          id:this.state.todonetasks.length + 1
        }

        // this.setState({
        //   todotasks:this.state.todotasks.filter((e) => e.id !== id),
        //   todonetasks:[...this.state.todonetasks,donetaskuser]
        // })

        this.setState((prevstate) => ({
            todotasks:prevstate.todotasks.filter((e) => e.id !== id),
            todonetasks:[...prevstate.todonetasks,donetaskuser]
        }))
    }

    backtodo = (id) => {
        const tobacktask = this.state.todonetasks.find((e) => e.id === id)
        const tobacktask2 = {
          task:tobacktask.task,
          id:this.state.todotasks.length + 1
        }

        this.setState((prevstate) =>({
          todonetasks: prevstate.todonetasks.filter((e) => e.id !== id),
          todotasks:[...prevstate.todotasks,tobacktask2]
        }))
    }

    removetask = (id) => {
      this.setState({
        todonetasks:this.state.todonetasks.filter((e) => e.id !== id)
      })
    }


  render(){
    return (
      <div className="App">
        <div className='main'>

          <div className='forinput'>
            <h1>TYPE NEW TASK</h1>
            <input type="text" placeholder='new task' onChange={this.onchange} value={this.state.inputtask}/>
            <button className='btn' onClick={this.addtask} >click</button>
          </div>

          <div className='boxes'>

            <div className='todobox box'>
              <h1>TO DO LIST</h1>
              {this.state.todotasks.map(e => 
                <Todotasks key={e.id} task={e.task} id={e.id} action={this.alreadydone}/>
              )}
            </div>

            <div className='donebox box'>
              <h1>DONE LIST</h1>
              {this.state.todonetasks.map(e => 
                <Todonetasks key={e.id} task={e.task} id={e.id} action={this.backtodo} action2={this.removetask}/>
              )}
            </div>


          </div>


        </div>
      </div>
    );

  }
}

export default App;
