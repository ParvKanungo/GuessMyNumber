import { View, StyleSheet } from "react-native";


function Card({children}){
    return(
        <View style={styles.Card}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    Card: {
        padding: 10,
        marginTop: 40,
        marginHorizontal: 20,
        backgroundColor: '#72063c',
        borderRadius: 10,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

export default Card;