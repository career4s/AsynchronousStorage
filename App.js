// AsyncStorage in React Native to Store Data in Session
// https://aboutreact.com/react-native-asyncstorage/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

// import AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  // To get the value from the TextInput
  const [textInputValue, setTextInputValue] = useState('');
  // To set the value on Text
  const [getValue, setGetValue] = useState('');
  const [firstname,setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [coins,setCoins] = useState('');
  const [points, setPoints] = useState('');
  const [wins,setWins] = useState('');
  const [loses, setLoses] = useState('');
  const [hits,setHits] = useState('');
  const [misses, setMisses] = useState('');
  const [odibatsmenlevel,setOdibatsmenlevel] = useState('');
  const [odibowlerslevel, setOdibowlerslevel] = useState('');
  const [odibatswomenlevel,setOdibatswomenlevel] = useState('');
  const [tbatsmenlevel, setTbatsmenlevel] = useState('');
  const [tbowlerslevel,setTbowlerslevel] = useState('');
  const [testbatsmenlevel, setTestbatsmenlevel] = useState('');
  const [testbowlerslevel,setTestbowlerslevel] = useState('');
  const [frandomlevel, setFrandomlevel] = useState('');
  const [odibatsmendeck,setOdibatsmendeck] = useState('');
  const [odibowlersdeck, setOdibowlersdeck] = useState('');
  const [odibatswomendeck,setOdibatswomendeck] = useState('');
  const [tbatsmendeck, setTbatsmendeck] = useState('');
  const [tbowlersdeck,setTbowlersdeck] = useState('');
  const [testbatsmendeck, setTestbatsmendeck] = useState('');
  const [testbowlersdeck,setTestbowlersdeck] = useState('');  
  const [frandomdeck,setFrandomdeck] = useState('');
  
  const saveValueFunction = () => {
    // Function to save the value in AsyncStorage
    if (textInputValue) {
      // To check the input not empty
      AsyncStorage.setItem('any_key_here', textInputValue);
      // Setting a data to a AsyncStorage with respect to a key
      setTextInputValue('');
      // Resetting the TextInput
      alert('Data Saved');
      // Alert to confirm
    } else {
      alert('Please fill data');
    }
    AsyncStorage.setItem('Firstname', textInputValue);
    AsyncStorage.setItem('Lastname', textInputValue); 
    AsyncStorage.setItem('Coins', JSON.stringify(100));
    AsyncStorage.setItem('Points', JSON.stringify(0)); 
    AsyncStorage.setItem('Wins', JSON.stringify(0));
    AsyncStorage.setItem('Loses',JSON.stringify(0) ); 
    AsyncStorage.setItem('hits', JSON.stringify(0));
    AsyncStorage.setItem('misses', JSON.stringify(0)); 
    AsyncStorage.setItem('odibatsmenlevel',JSON.stringify(1));
    AsyncStorage.setItem('odibowlerslevel',JSON.stringify(1) ); 
    AsyncStorage.setItem('odibatswomenlevel',JSON.stringify(1) );
    AsyncStorage.setItem('tbatsmenlevel',JSON.stringify(1) ); 
    AsyncStorage.setItem('tbowlerslevel', JSON.stringify(1));
    AsyncStorage.setItem('testbatsmenlevel',JSON.stringify(1) ); 
    AsyncStorage.setItem('testbowlerslevel',JSON.stringify(1) );
    AsyncStorage.setItem('frandomlevel',JSON.stringify(1) ); 
    AsyncStorage.setItem('odibatsmendeck',JSON.stringify(1));
    AsyncStorage.setItem('odibowlersdeck',JSON.stringify(1) ); 
    AsyncStorage.setItem('odibatswomendeck',JSON.stringify(1) );
    AsyncStorage.setItem('tbatsmendeck',JSON.stringify(1) ); 
    AsyncStorage.setItem('tbowlersdeck', JSON.stringify(1));
    AsyncStorage.setItem('testbatsmendeck', JSON.stringify(1)); 
    AsyncStorage.setItem('testbowlersdeck',JSON.stringify(1) );
    AsyncStorage.setItem('frandomdeck',JSON.stringify(1) );  
  };

  const getValueFunction = () => {
    // Function to get the value from AsyncStorage
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
        setGetValue(value),
    );
    AsyncStorage.getItem('Firstname').then(
        (value1) =>
          setFirstname(value1),
      );
      AsyncStorage.getItem('Lastname').then(
        (value2) =>
          setLastname(value2),
      );
      AsyncStorage.getItem('Coins').then(
        (value3) =>
          setCoins(value3),
      );
      AsyncStorage.getItem('Points').then(
        (value4) =>
          setPoints(value4),
      );
      AsyncStorage.getItem('Wins').then(
        (value5) =>
          setWins(value5),
      );
      AsyncStorage.getItem('Loses').then(
        (value6) =>
          setLoses(value6),
      );
      AsyncStorage.getItem('hits').then(
        (value7) =>
          setHits(value7),
      );
      AsyncStorage.getItem('misses').then(
        (value8) =>
          setMisses(value8),
      );       
      AsyncStorage.getItem('odibatsmenlevel').then(
        (value9) =>
          setOdibatsmenlevel(value9),
      );
      AsyncStorage.getItem('odibowlerslevel').then(
        (value10) =>
          setOdibowlerslevel(value10),
      );
      AsyncStorage.getItem('odibatswomenlevel').then(
        (value11) =>
          setOdibatswomenlevel(value11),
      );
      AsyncStorage.getItem('tbatsmenlevel').then(
        (value12) =>
          setTbatsmenlevel(value12),
      );
      AsyncStorage.getItem('tbowlerslevel').then(
        (value13) =>
          setTbowlerslevel(value13),
      );
      AsyncStorage.getItem('testbatsmenlevel').then(
        (value14) =>
          setTestbatsmenlevel(value14),
      );
      AsyncStorage.getItem('testbowlerslevel').then(
        (value15) =>
          setTestbowlerslevel(value15),
      );
      AsyncStorage.getItem('frandomlevel').then(
        (value16) =>
          setFrandomlevel(value16),
      );  
    
      AsyncStorage.getItem('odibatsmendeck').then(
        (value17) =>
          setOdibatsmendeck(value17),
      );
      AsyncStorage.getItem('odibowlersdeck').then(
        (value18) =>
          setOdibowlersdeck(value18),
      );
      AsyncStorage.getItem('odibatswomendeck').then(
        (value19) =>
          setOdibatswomendeck(value19),
      );
      AsyncStorage.getItem('tbatsmendeck').then(
        (value20) =>
          setTbatsmendeck(value20),
      );
      AsyncStorage.getItem('tbowlersdeck').then(
        (value21) =>
          setTbowlersdeck(value21),
      );
      AsyncStorage.getItem('testbatsmendeck').then(
        (value22) =>
          setTestbatsmendeck(value22),
      );
      AsyncStorage.getItem('testbowlersdeck').then(
        (value23) =>
          setTestbowlersdeck(value23),
      );
      AsyncStorage.getItem('frandomdeck').then(
        (value24) =>
          setFrandomdeck(value24),          
      );   

  };
  global.Firstname =  firstname;
  global.Lastname = lastname;
  global.Coins =  Number(coins);
  global.Points = Number(points);
  global.Wins = Number(wins);
  global.Loses = Number(loses); 
  global.hits = Number(hits);
  global.misses =Number(misses);   
  global.hitrate = (parseInt((global.hits * 100)/(global.hits+global.misses))).toFixed(2);  
  {global.hitrate="NaN"?global.hitrate="":null}
  global.Odibatsmenlevel =  Number(odibatsmenlevel);
  global.Odibowlerslevel =  Number(odibowlerslevel); 
  global.Odibatswomenlevel =  Number(odibatswomenlevel); 
  global.Ttwentybatsmenlevel = Number(tbatsmenlevel);
  global.Ttwentybowlerslevel =  Number(tbowlerslevel);
  global.Testbatsmenlevel =  Number(testbatsmenlevel);
  global.Testbowlerslevel =  Number(testbowlerslevel);
  global.Frandomlevel =  Number(frandomlevel);
  global.Odibatsmendeck =  Number(odibatsmendeck);
  global.Odibowlersdeck =  Number(odibowlersdeck); 
  global.Odibatswomendeck =  Number(odibatswomendeck); 
  global.Ttwentybatsmendeck =  Number(tbatsmendeck);
  global.Ttwentybowlersdeck = Number(tbowlersdeck);
  global.Testbatsmendeck =  Number(testbatsmendeck) ;
  global.Testbowlersdeck =  Number(testbowlersdeck);
  global.Frandomdeck =  Number(frandomdeck);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          AsyncStorage in React Native to Store Data in Session
        </Text>
        <TextInput
          placeholder="Enter Some Text here"
          value={textInputValue}
          onChangeText={(data) => setTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            SAVE VALUE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            GET VALUE
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {getValue}
          {frandomdeck}         
          {firstname}
          {global.Frandomdeck}
          {firstname}
          {global.Coins+9};
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default App;