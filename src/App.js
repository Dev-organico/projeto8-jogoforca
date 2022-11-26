import { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";


function App() {
  const [count , setCount] = useState(0)
  const [randWord,setRandWord] = useState("")
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [isDisabled,setIsDisabled] = useState(false)
  const [letterList,setLetterList] = useState([])
  const [arrayWord,setArrayWord] = useState([])
  const [isLetterDisabled ,setIsLetterDisabled] = useState(true)
  const [underLined,setUnderLined] = useState([])
  

  function showWord(){
    const rand = palavras[Math.floor(Math.random()*palavras.length)]
    console.log(rand)
    const randArray = Array.from(rand)
    setArrayWord(Array.from(rand))
    const randArrayMap = randArray.map(()=> "_")
    setUnderLined(randArrayMap)
    setRandWord(randArrayMap)
    setIsDisabled(true)
    setIsLetterDisabled(false)
    
}

  
  
  return (
    <main>

      <Jogo 
      count={count}
      randWord={randWord}
      isDisabled={isDisabled}
      showWord={showWord}
      setRandWord={setRandWord}
      underLined={underLined}
      
      />
      <Letras 
      alfabeto={alfabeto}
      letterList={letterList}
      setLetterList={setLetterList}
      arrayWord={arrayWord}
      setRandWord={setRandWord}
      isLetterDisabled={isLetterDisabled}
      setUnderLined={setUnderLined}
      underLined={underLined}
      count={count}
      setCount={setCount}
      
      


      />
      <Chute />
    </main>
   
  );
}

export default App;

