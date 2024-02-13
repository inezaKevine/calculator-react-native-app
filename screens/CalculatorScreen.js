import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Row from '../components/Row';
import calculator, { initialState } from '../util/calculator';

const CalculatorScreen = () => {
  const [state, setState] = useState(initialState);

  const handleTap = (type, value) => {
    setState(prevState => calculator(type, value, prevState));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.expression}>{state.currentValue}</Text>
      <Row>
        <Button text="C" onPress={() => handleTap('clear')} theme="secondary" />
        <Button text="+/-" onPress={() => handleTap('posneg')} theme="secondary" />
        <Button text="%" onPress={() => handleTap('percentage')} theme="secondary" />
        <Button text="/" onPress={() => handleTap('operator', '/')} theme="accent" />
      </Row>
      <Row>
        <Button text="7" onPress={() => handleTap('number', 7)} />
        <Button text="8" onPress={() => handleTap('number', 8)} />
        <Button text="9" onPress={() => handleTap('number', 9)} />
        <Button text="X" onPress={() => handleTap('operator', '*')} theme="accent" />
      </Row>
      <Row>
        <Button text="4" onPress={() => handleTap('number', 4)} />
        <Button text="5" onPress={() => handleTap('number', 5)} />
        <Button text="6" onPress={() => handleTap('number', 6)} />
        <Button text="-" onPress={() => handleTap('operator', '-')} theme="accent" />
      </Row>
      <Row>
        <Button text="1" onPress={() => handleTap('number', 1)} />
        <Button text="2" onPress={() => handleTap('number', 2)} />
        <Button text="3" onPress={() => handleTap('number', 3)} />
        <Button text="+" onPress={() => handleTap('operator', '+')} theme="accent" />
      </Row>
      <Row>
        <Button text="0" onPress={() => handleTap('number', 0)} size="double" />
        <Button text="." onPress={() => handleTap('number', '.')} />
        <Button text="=" onPress={() => handleTap('equal', '=')} theme="primary" />
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expression: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default CalculatorScreen;
