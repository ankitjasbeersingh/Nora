import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="sign-in"
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen 
          name="sign-up"
          options={{
            headerShown: false
          }}
          />
      </Stack>
      <StatusBar backgroundColor='#161622' style='light'/>
    </>
  );
}

const styles = StyleSheet.create({
});
