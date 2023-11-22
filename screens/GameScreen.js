import { View, Text, StyleSheet, Alert, FlatList} from "react-native";
import { useState, useEffect } from "react";
import {Ionicons } from '@expo/vector-icons'

import NumberContainer from "../components/game/NumberConatiner";
import PrimaryButton from "../components/CustomButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  
  let minBoundary = 1;
  let maxBoundary = 100;
  
  function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(
      1,
      100,
      userNumber
    );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([]);

    useEffect(() => {
      if (currentGuess === userNumber) {
        onGameOver(guessRounds.length);
      }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(()=> {
      minBoundary=1;
      maxBoundary=100;
    }, [])
  
    function nextGuessHandler(direction) {
      // direction => 'lower', 'greater'
      if (
        (direction === 'lower' && currentGuess < userNumber) ||
        (direction === 'greater' && currentGuess > userNumber)
      ) {
        Alert.alert("Don't lie!", 'You know that this is wrong...', [
          { text: 'Sorry!', style: 'cancel' },
        ]);
        return;
      }
  
      if (direction === 'lower') {
        maxBoundary = currentGuess;
      } else {
        minBoundary = currentGuess + 1;
      }
  
      const newRndNumber = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
      );
      setCurrentGuess(newRndNumber);
      setGuessRounds(prevGuessRound=>[newRndNumber, ...prevGuessRound]);
    }
    
    const guessroundlistlength=guessRounds.length;

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
              <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>
                    Higher or Lower?
                </InstructionText>
                <View style={styles.Buttons}>
                  <View style={styles.button}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                      <Ionicons name='md-remove' size={20} color='white' />
                    </PrimaryButton>
                  </View>
                  <View style={styles.button}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                      <Ionicons name='md-add' size={20} color='white' />
                    </PrimaryButton>
                  </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
              {/* {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */}
              <FlatList data={guessRounds} renderItem={(itemData)=> <GuessLogItem  roundNumber={guessroundlistlength-itemData.index} 
              guess={itemData.item} />} 
               />
            </View>
        </View>
    );
}

export default GameScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:40
    },
    title:{
        fontSize:30,
        // fontWeight:'bold',
        color:'#FFCC33',
        textAlign:'center',
        borderWidth:2,
        borderColor:'#FFCC33',
        padding:10,
        marginTop:60,
        fontFamily:'big-dex'
    },
    Buttons:{
      flexDirection:'row'
    },
    button:{
      flex:1
    },
    listContainer:{
      flex:1,
      margin:10
    }
    
});