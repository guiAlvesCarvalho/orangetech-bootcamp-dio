
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from './styles'
import { useState } from 'react';


const App = () => {
  
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('0')
  
  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultiplyNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivideNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handlePercentNumbers = () => {
    const percent = Number(currentNumber) / 100;
    setCurrentNumber(percent)
  }

  const handleSquareNumbers = () => {
    const square = Math.sqrt(Number(currentNumber));
    setCurrentNumber(square)
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleMinusNumbers()
          break;
        case '*':
          handleMultiplyNumbers()
          break;
        case '/':
          handleDivideNumbers()
          break;
        default:
          break;
      }
    } 
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row marginTop>
          <Button info="operator" label="√" onClick={handleSquareNumbers}  />
          <Button info="operator" label="%" onClick={handlePercentNumbers}  />
          <Button info="operator" label="C" onClick={handleClear} />
          <Button info="operator" label="/" onClick={handleDivideNumbers}  />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button info="operator" label="x" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button info="operator" label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button info="operator" label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button info="equal" label="=" onClick={handleEquals} />
        </Row>
        
      </Content>
    </Container>
  );
}

export default App;
