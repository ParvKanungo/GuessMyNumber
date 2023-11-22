
import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({children, onPress})
{
   
    return(
        <View style={styles.container }>
        <Pressable style={styles.buttonContainer} onPress={onPress} android_ripple={{color:'#62063c'}}>
            <Text style={styles.btext}>{children}</Text>
        </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container:{
        borderRadius:25,
        margin:10,
        overflow:'hidden',
        
    },
    buttonContainer:{
        backgroundColor:'#92173c',
        paddingVertical:10,
        paddingHorizontal:15,
        elevation:2,
        
    },
    btext:{
        textAlign:'center',
        color:'white'
    }
});
