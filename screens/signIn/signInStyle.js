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
        marginVertical: 39,
        flexDirection : 'column',
    },
    textInput : {
        borderRadius: 10,
        height: 60,
        width: 309,
        marginVertical: 10,
        borderColor: '#111',
        borderWidth: 1,
        padding: 10
    },
    formStyle : {
        alignItems: 'center'
    },
    text : {
        fontSize: 30,
        fontWeight: '900',
        color: '#111'
    },
    texte : {
        fontSize: 20,
        fontWeight: '600',
        color: '#111',
        marginRight: 200
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
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff'
    },
    texte2 : {
        fontSize: 20,
        fontWeight: '600',
        color: '#111',
    },
    texteEmail  : {
        fontSize: 20,
        fontWeight: '600',
        color: '#111',
        marginRight: 230
    },
    texteConfirmPassword  : {
        fontSize: 20,
        fontWeight: '600',
        color: '#111',
        marginRight: 140
    }
    
});

export default style;