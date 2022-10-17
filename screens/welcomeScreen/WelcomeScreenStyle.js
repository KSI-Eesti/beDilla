import  {StyleSheet}  from 'react-native';

const stile = StyleSheet.create({
    cookingTxt : {
        top: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexEnd : {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 350
    },
    container : {
        flex: 1,
        flexDirection: 'column'
    },
    image : {
        flex: 1
    },
    text : {    
        fontSize: 50,
        fontWeight: '600',
        lineHeight: 60,
        textAlign: 'center',
        color: '#fff'
    },
    texte : {
        fontSize: 23,
        fontWeight: '500',
        textAlign: 'center',
        color: '#fff'
    },
    textes : {
        fontSize: 23,
        fontWeight: '500',
        textAlign: 'center',
        color: '#129575'
    },
    login : {
        width : 243,
        height : 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: '#129575',
        borderRadius: 10,
        borderWidth: 1
    },
    register : {
        width : 243,
        height : 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1
    }  
})

export default stile;