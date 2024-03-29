import { useState } from 'react';
import Button from './components/Button';
import Input from './components/input';
import { Container, Content, Row, Column } from "./styles";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('0');

  const handleSum = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSub = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  const handleDiv = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else {
      const division = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(division))
      setOperation('')
    }
  }

  const handleTimes = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else {
      const division = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(division))
      setOperation('')
    }
  }

  const handleEquals = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation){
        case '+':
          handleSum();
        break;

        case '-':
          handleSub();
        break;

        case '/':
          handleDiv();
        break;

        case '*':
          handleTimes();
        break;

          default: 
          break;
      }
    }
  }

  const handleOnOff = () => {
    setCurrentNumber('')
    setFirstNumber('0')
  };

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  };

  const handleAddNUmber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>

        <Row>
        <Button label="X" onClick={handleTimes}/>
        <Button label="OFF" onClick={(handleOnOff)}/>
        <Button label="CE" onClick={(handleOnClear)}/>
        <Button label="/" onClick={handleDiv}/>
        </Row>

        <Row>
        <Button label="7" onClick={() => handleAddNUmber ('7')}/>
        <Button label="9" onClick={() => handleAddNUmber ('9')}/>
        <Button label="8" onClick={() => handleAddNUmber ('8')}/>
        <Button label="-" onClick={handleSub}/>
        </Row>

        <Row>
        <Button label="4" onClick={() => handleAddNUmber ('4')}/>
        <Button label="5" onClick={() => handleAddNUmber ('5')}/>
        <Button label="6" onClick={() => handleAddNUmber ('6')}/>
        <Button label="+" onClick={(handleSum)}/>
        </Row>
        
        <Row>
        <Button label="1" onClick={() => handleAddNUmber ('1')}/>
        <Button label="2" onClick={() => handleAddNUmber ('2')}/>
        <Button label="3" onClick={() => handleAddNUmber ('3')}/>
        <Button label="0" onClick={() => handleAddNUmber ('0')}/>
        
        </Row>

        <Column>
        <Button label="=" onClick={handleEquals}/>
        </Column>
        
      </Content>
    </Container>
  );
}

export default App;
