import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
    'Estudar ingles',
    'estudar banco de dados',
    'estudar react'
  ]);
  const[input, setInput] = useState('');

  //usando callback

/*function handleAdd(){
  setTarefas([...tarefas, input])
  setInput('');
}*/
const handleAdd = useCallback(()=>{
  setTarefas([...tarefas,input]);
  setInput('');
},[input,tarefas]);

const[contador, setContador] = useState(0);


useEffect(()=>{
  const tarefasStorage = localStorage.getItem('tarefas');

  if(tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage));
  }

  
},[]);


useEffect(() =>{
  localStorage.setItem('tarefas', JSON.stringify(tarefas));

}, [tarefas])

const totalTarefas = useMemo(()=> tarefas.length,[tarefas]);

  return (
    <div >
      <h1>Hooks</h1>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br />
      <strong>Voce tem {totalTarefas} tarefas</strong> <br />
          <input type="text" value={input} onChange={
            e => setInput(e.target.value)} />
        <button type='button' onClick={handleAdd}>Adicionar</button>
        <div>
          <p> you cliked { contador } times </p>
          <button onClick={() => setContador(contador + 1)}>
            Aumentar</button>
          
          </div>    

     
    </div>
  );
}

export default App;
