import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/CustomButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

function StartGameScreen({onConfirmedInput}) {
    const [enteredText, setEnteredText]=useState('');

    function numberInputHandler(enteredText)
    {
        setEnteredText(enteredText);
    }

    function resetMode()
    {
        setEnteredText('');
    }

    function confirmInputNumber()
    {
        const inputNumber=parseInt(enteredText);
        if(isNaN(inputNumber) || inputNumber <=0 || inputNumber===(''))
        {
            Alert.alert('Invalid Input!',
             'enter the number which is number between 1 to 99',
             [{text: 'ok', style:'destructive', onPress:resetMode}])
        }
        onConfirmedInput(inputNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Guess My Number</Text>
         <Card>
            <InstructionText>
                Enter a Number
            </InstructionText>
            <TextInput style={styles.Inputext}
                maxLength={2}
                keyboardType='number-pad'
                onChangeText={numberInputHandler}
                value={enteredText}
            />

            <View style={styles.inputInnerContainer}>
                <View style={styles.buttonElement}>
                    <PrimaryButton onPress={resetMode}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonElement}>
                    <PrimaryButton onPress={confirmInputNumber}>Enter</PrimaryButton>
                </View>
            </View>
         </Card>
        </View>
    );
}
export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        alignItems:'center',
        marginTop: 100,
    },
    
    title:{
        fontSize:30,
        // fontWeight:'bold',
        color:'#FFffff',
        textAlign:'center',
        borderWidth:2,
        borderColor:'#FFffff',
        padding:10,
        fontFamily:'big-dex'
    },
    Inputext: {
        marginVertical: 10,
        borderBottomColor: '#FFCC33',
        borderBottomWidth: 3,
        fontSize: 30,
        width: 60,
        height: 50,
        color: '#FFCC33',
        textAlign: 'center',
        fontWeight:'bold'
    },
    
    inputInnerContainer: {
        flexDirection: 'row'
    },
    buttonElement: {
        flex: 1
    }
});