/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Block from './components/block'

function App() {
  const [turn, setTurn] = useState(Array(9).fill(null))
  const [currentTurn, setCurrentTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleBlockClick = (index) => () => {
    if (turn[index] || winner) return;
  
    const copyTurn = [...turn];
    copyTurn[index] = currentTurn;
    setTurn(copyTurn);
  
    const updatedWinner = checkWinner(copyTurn);
    if (updatedWinner) {
      setWinner(updatedWinner);
      alert(`Winner is ${updatedWinner}`);
      return;
    }
  
    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
  };
  
  const checkWinner = (updatedTurn) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < 8; i++) {
      const [a, b, c] = win[i];
      if (updatedTurn[a] && updatedTurn[a] === updatedTurn[b] && updatedTurn[a] === updatedTurn[c]) {
        return updatedTurn[a];
      }
    }
    if (!updatedTurn.includes(null)) {
      return 'draw';
    }
    return null;
  };
  

  return (
    <>
      <div className='text-center text-5xl text-bold mt-10 text-purple-700 font-bold'>Tic Tac Toe</div>
      <div className='text-center text-xl font-bold text-purple-500'>Current Player: {currentTurn}</div>
      <div className='flex flex-wrap justify-center align-center'>
        <Block value={turn[0]} onClick={handleBlockClick(0)}/>
        <Block value={turn[1]} onClick={handleBlockClick(1)}/>
        <Block value={turn[2]} onClick={handleBlockClick(2)}/>
      </div>
      <div className='flex flex-wrap justify-center align-center'>
        <Block value={turn[3]} onClick={handleBlockClick(3)}/>
        <Block value={turn[4]} onClick={handleBlockClick(4)}/>
        <Block value={turn[5]} onClick={handleBlockClick(5)}/>
      </div>
      <div className='flex flex-wrap justify-center align-center'>
        <Block value={turn[6]} onClick={handleBlockClick(6)}/>
        <Block value={turn[7]} onClick={handleBlockClick(7)}/>
        <Block value={turn[8]} onClick={handleBlockClick(8)}/>
      </div>
    </>
  )
}

export default App;
