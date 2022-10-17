import  {StyleSheet}  from 'react-native';

const stile = StyleSheet.create({
    cookingTxt : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexEnd : {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    container : {
        flex: 1
    },
    image : {
        flex: 1
    },
    text : {
        fontFamily: 'Times New Roman',
        fontSize: 50,
        fontWeight: 600,
        lineHeight: 60,
        textAlign: 'center',
        color: '#fff'
    },
    texte : {
        fontFamily: 'Times New Roman',
        fontSize: 12,
        fontWeight: 200,
        textAlign: 'center',
        color: '#fff'
    },
    textes : {
        fontFamily: 'Times New Roman',
        fontSize: 12,
        fontWeight: 200,
        textAlign: 'center',
        color: '#129575'
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
    register : {
        width : 243,
        height : 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1
    }  
})

export default stile;