import { View, Text, StyleSheet} from "react-native";


function GuessLogItem({roundNumber, guess})
{
    return(
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles= StyleSheet.create({
    listItem:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#FFCC33',
        padding:12,
        justifyContent:'space-between',
        flexDirection:'row',
        marginVertical:8
    },
    itemText:{
        fontFamily:'quik',
        fontSize:30
    }
});