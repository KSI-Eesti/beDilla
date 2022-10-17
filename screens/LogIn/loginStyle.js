import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
        backgroundColor : '#fff'
    },
    headerText : {
        alignItems: 'center',
        justifyContent : 'flex-start',
        marginTop: 20,
        flexDirection : 'column',
    },
    textInput : {
        borderRadius: 10,
        height: 60,
        width: 309,
        marginVertical: 20,
        borderColor: '#111',
        borderWidth: 1,
        padding: 10
    },
    formStyle : {
        alignItems: 'center'
    },
    text : {
        fontSize: 30,
        fontWeight: '300',
        color: '#111'
    },
    texte : {
        fontSize: 10,
        fontWeight: '400',
        color: '#111'
    },
    login : {
        width : 243,
        height : 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        backgroundColor: '#129575',
        borderRadius: 10,
        borderWidth: 1
    },
    textes : {
        fontFamily: 'Times New Roman',
        fontSize: 12,
        fontWeight: 200,
        textAlign: 'center',
        color: '#fff'
    },
    
});

export default style;