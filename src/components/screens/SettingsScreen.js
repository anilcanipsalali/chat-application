import { View, Button } from 'react-native'

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => "Sign Out"} title="Sign out" />
    </View>
  );
}

export default SettingsScreen