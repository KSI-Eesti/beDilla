import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems:'center',
        backgroundColor: '#fff',
        height: '100%'
    },
    textinput : {
        height: 46,
        width: 200,
        borderColor: '#111',
        borderWidth: 1,
        padding: 10,
        marginVertical: 15
    },
    text : {
        fontSize: 20,
        fontWeight: '900',
        color: '#110',
        marginTop: 5,
        marginRight: 18
    },
    login : {
        width : 243,
        height : 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#129575',
        borderRadius: 10,
        borderWidth: 1
    },
    textes : {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff'
    }
});

export default estilo;