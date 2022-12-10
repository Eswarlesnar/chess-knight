import boardArr from './data/boardArr';
import Block from './components/Block';
import './App.css';
import { useEffect, useState } from 'react';
import Appbar from './components/Appbar';
import Moves from './components/Moves';

function App() { 
  const [pending , setPending ] = useState(false)
  const [selectedBlock , setSelectedBlock] = useState({})
  const [moves , setMoves] = useState([])
 

  const handleBlockClick =(e, item )=> {
    e.stopPropagation()
    if (pending === false) {
      
      setSelectedBlock(item);
      document.getElementById(JSON.stringify(item)).classList.add('selected');
      let j = 2;
      let arr = [];

      for (let i = 1; i < 3; i++) {
     
        arr.push({ row : item.row - i, col: item.col + j });
        arr.push({ row : item.row - i, col: item.col - j });
        arr.push({ row : item.row + i, col: item.col + j });
        arr.push({ row : item.row + i, col: item.col - j });
        setMoves(
          arr.filter((val) => {
            let inValidMove = true;
            if (val.col < 1 || val.col > 8) {
              inValidMove = false;
            } else if (val.row < 1 || val.row > 8) {
              inValidMove = false;
            }
            return inValidMove;
          })
        );
        j--;
      }
      setPending(true);
    } else {
      setPending(false);
     
      document
        .getElementById(JSON.stringify(selectedBlock))
        .classList.remove('selected');
    }
  };

  useEffect(() => {
    if (pending === true) {
      if (!moves) {
        setTimeout(() => {}, 500);
      } else {
        console.log(moves);
        moves.forEach((x) => {
          document.getElementById(JSON.stringify(x)).classList.add('moves');
        });
      }
    } else {
      if (!moves) {
      } else {
        moves.forEach((x) => {
          document.getElementById(JSON.stringify(x)).classList.remove('moves');
        });
      }

    }
  }, [moves , pending]);
  
  return (
    <div className="App" style ={{background : "rgba(228, 241, 227, 0.7)" }}>
       <Appbar />
       <div className='content'>
         <div className='chessBoard'>
           {boardArr.map(val => {
             return <div className='row' key ={JSON.stringify(val)}>
                 {
                  val.map(item => {
                     let blockcolor = ""
                     if(item.row % 2 === 0 ){
                        if(item.col % 2 ===0){
                          blockcolor = "white"
                        }else{
                          blockcolor ="black"
                        }
                     }else{
                      if(item.col % 2 ===0){
                        blockcolor = "black"
                      }else{
                        blockcolor ="white"
                      }
                     }
                     return <Block 
                          key ={JSON.stringify(item)} 
                          item = {item}
                          blockcolor  ={blockcolor}
                          handleBlockClick ={handleBlockClick}>
                         </Block>
                  })
                 }
             </div>
           })}
         </div>
         {pending &&  <div className='moves-container'>
          <h3>Possible moves of Knight are :</h3>
          <Moves moves = {moves} />
         </div>}
       </div>
    </div>
  );
}

export default App;
