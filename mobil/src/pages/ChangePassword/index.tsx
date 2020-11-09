import React from 'react';
import { Button, KeyboardAvoidingView, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import styles from './styles';

function ChangePassword () {
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
                            onPress={() => { }}
                            style={styles.button}
                        >
                            <Text>Salvar</Text>
                        </RectButton>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ChangePassword;
