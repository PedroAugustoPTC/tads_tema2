import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#8257E5',
        color: '#8257E5'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 24,
    },
    passwordText: {
        fontWeight: 'bold',
        fontSize: 24
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Poppins_400Regular',
        backgroundColor: '#FAFAFC',
        borderColor: '#E6E6F0',
        borderStyle: 'solid',
        alignSelf: 'center',
        paddingLeft: 24,
        borderWidth: 1,
        width: '100%',
        height: 64,
    },
    areaButton: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        paddingBottom: 30,
    },
    button: {
        width: '40',
        backgroundColor: '#fff',
    },
})

export default styles;
