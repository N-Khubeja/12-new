const Todonetasks = ({key,id,task,action,action2}) => {
    return(
        <div>
            <div className='do-one-task' key={key}>
                  <h2>TASK:{task}</h2>
                  <h2>ID:{id}</h2>
                  <button onClick={() => action(id)}>BACK TO DO</button>
                  <button onClick={() => action2(id)}>REMOVE</button>
            </div>
        </div>
    )
}

export default Todonetasks