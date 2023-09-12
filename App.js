import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const BMRCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBMR] = useState(null);

  const calculateBMR = () => {
    if (age && weight && height) {
      let bmrValue;

      if (gender === 'male') {
        bmrValue = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        bmrValue = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }

      setBMR(bmrValue);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Male" onPress={() => setGender('male')} />
        <Button title="Female" onPress={() => setGender('female')} />
      </View>
      <Button title="Calculate BMR" onPress={calculateBMR} />
      {bmr && <Text>BMR: {bmr.toFixed(2)} kcal/day</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf5e6', // Set your desired background color here
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 10,
  },
});

export default BMRCalculator;


  
  