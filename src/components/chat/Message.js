import { StyleSheet, View, Text } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const now = dayjs();
  const createdAt = dayjs(message.createdAt);
  const diffDays = now.diff(createdAt, 'day')

  const isMyMessage = () => {
    return message.user.id === 'u1';
  }

  return (
    <View style={[styles.container, {
      backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
      alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
    }]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>
        {diffDays != 0  ? createdAt.format('DD/MM/YYYY HH:mm:ss') : createdAt.format('HH:mm')}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 3,
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  },
});

export default Message;