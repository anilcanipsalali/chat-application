import { FlatList } from 'react-native';
import ChatListItem from '../chat/ChatListItem';
import NotFound from './NotFound.js'
import chats from '../../assets/chats.json';
import { useState } from 'react';

const ChatsScreen = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {chatRooms.length ?
        <FlatList
          data={chatRooms}
          renderItem={({ item }) => <ChatListItem chat={item.chatRoom} />}
          style={{ backgroundColor: "white" }}
          refreshing={loading}
          //onRefresh={chatRooms}
        />
      :
        <NotFound />
      }
    </>
  );
}

export default ChatsScreen;