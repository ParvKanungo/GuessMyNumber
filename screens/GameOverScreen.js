import {View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/CustomButton";

function GameOverScreen ({userNumber, rounds, onStartNewGame})
{
    return(
       <View style={styles.rootContainer}>
        <Text style={styles.title}>Game Over!</Text>
        <View style={styles.ImageContainer}>
            <Image style={styles.image} source={require('../assets/success.jpg')} />
        </View>
        <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.nestedText}>{rounds}</Text> rounds to guess the number <Text style={styles.nestedText}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
       </View>
    );
}
export default GameOverScreen;

const styles=StyleSheet.create({
    rootContainer:{
        alignItems:'center',
        margin:60,
        flex:1,
        justifyContent:'center'
    },
    image:{
        height:'100%',
        width:'100%',
    },
    ImageContainer:{
        height:350,
        width:350,
        borderRadius:175,
        overflow:'hidden',
        borderWidth:3,
        margin:46
    },
    title:{
        fontSize:40,
        // fontWeight:'bold',
        color:'#FFCC33',
        textAlign:'center',
        borderWidth:2,
        borderColor:'#FFCC33',
        padding:10,
        fontFamily:'big-dex',
        paddingHorizontal:60
    },
    summaryText:{
        fontFamily:'quik',
        fontSize:24,
        marginVertical:20,
        

    },
    nestedText:{
        fontFamily:'cyb',
        fontSize:20,
        color:'#4e021f'
    }
});