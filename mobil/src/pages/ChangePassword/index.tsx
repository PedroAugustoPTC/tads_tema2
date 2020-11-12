import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import styles from './styles';
import { Feather } from '@expo/vector-icons';


function ChangePassword() {
    const nav = useNavigation();

    function handleToRates() {
        nav.navigate('Rates');
    }

    return (
        <KeyboardAvoidingView>
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.passwordText}>Senha Atual</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.passwordText}>Nova senha</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.passwordText}>Confirme a nova senha</Text>
                    <TextInput style={styles.input}></TextInput>

                    <View style={styles.areaButton}>
                        <RectButton
                            onPress={handleToRates}
                            style={styles.contactButton}
                        >
                            <Text style={styles.contactButtonText}>Salvar</Text>
                        </RectButton>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ChangePassword;
