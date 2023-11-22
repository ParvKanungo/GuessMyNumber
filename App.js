import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';


import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userName, setUserName] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [FontsLoaded]=useFonts({
    'big-dex': require('./assets/fonts/Bigdex.ttf'),
    'cyb':require('./assets/fonts/CyborgPunk.ttf'),
    'quik':require('./assets/fonts/Quikhand.ttf'),
  });

  if(!FontsLoaded)
  {
    return null;
  }

  function onConfirmedInputHandler(pickedNumber) {
    setUserName(pickedNumber);
     setGameOver(false);
  }
 function gameOverHandler(Gamerounds)
 {
  setGameOver(true);
  setGuessRounds(Gamerounds);
 }

 function startNewGameHandler()
 {
  setUserName(null);
  setGuessRounds(0);
 }

  let screen = <StartGameScreen onConfirmedInput={onConfirmedInputHandler} />
 
  if (userName) {
    screen = (<GameScreen userNumber={userName} onGameOver={gameOverHandler} />);
  }
  if(gameOver && userName)
  {
    screen = (<GameOverScreen userNumber={userName} rounds={guessRounds} onStartNewGame={startNewGameHandler}/>);
  }

  return (
    <LinearGradient colors={['#4e021f', '#ddb52f']} style={styles.mainContainer}>
      <ImageBackground source={require('./assets/dice.jpg')} resizeMode='cover' style={styles.mainContainer} imageStyle={styles.backImage}>
        <SafeAreaView style={styles.mainContainer}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backImage: {
    opacity: 0.15
  }
});
