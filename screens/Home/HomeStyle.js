import { StyleSheet } from "react-native";

const leStyle = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    img : {
        height: 110,
        width: 110,
        borderRadius: 125,
        borderColor: '#1f9',
        borderWidth: 20,
        marginVertical: 20,
        overflow: 'hidden'
    },
    item : {
        color: '#1f9',
        fontSize: 18,
        fontWeight: '500',
        padding: 10
    },
    createRecipe: {
        height: 56,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f7',
        marginVertical: 20
    },
    text : {
        fontSize: 20,
        fontWeight: '900',
        color: '#fef'
    },
    view : {
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default leStyle;