import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff'
    },
    view : {
        alignItems: 'center',
        justifyContent: 'center'
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
        color: '#211',
        fontSize: 18,
        fontWeight: '500',
        padding: 10,
        textAlign: "justify"
    }

});

export default style;