import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import Message from '../chat/Message';
import bg from '../../images/BG.png';
import InputBox from '../chat/InputBox';
import { useEffect } from 'react';

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: route.params.name });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox chatroom={chatRoom} />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,   
    },
    list: {
      padding: 10,
    },
});

export default ChatScreen