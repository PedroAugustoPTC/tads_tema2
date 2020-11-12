import React from 'react';

import { View, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './styles';

function Rates() {
    const navigation = useNavigation();

    function handleToChangePassword() {
        navigation.navigate('ChangePassword')
        console.log('asdf');
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={styles.background}>
                    <TextInput style={styles.input}>

                    </TextInput>

                    <View style={styles.areaRate}>
                        <Text style={styles.subjectText}>Matéria</Text>
                        <Text style={styles.teacherText}>Professor</Text>
                        <Text style={styles.percentRateText}>25%</Text>
                        <Text style={styles.subjectText}>Matéria</Text>
                        <Text style={styles.teacherText}>Professor</Text>
                        <Text style={styles.percentRateText}>25%</Text>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Rates;
