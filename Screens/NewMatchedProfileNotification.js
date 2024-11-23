import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function ChatScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredChats, setFilteredChats] = React.useState([]);
  
  const matchesData = [
    { id: 1, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a8d3946aba7b10d3c3c5df569cf94a123b4c2609cec8167b29705a4382dc5ec", name: "Maria White" },
    { id: 2, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/58ca6c4dbe4b1191a0ce4eeedbc7b91c551dcc91e5c60ffb09540f63227ce23c", name: "Charles Morris" },
    { id: 3, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d79fd9d17ab11581f387e2d278eb2b5fe9a802a95e777b5de6a927f6fe5f0e35", name: "Isabella Allen" },
    { id: 4, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7e526bc7a8e87b3408ea062a4948315373b9f4723bcc1127f957141062fa607", name: "Ava Jones" }
  ];

  const [chatsData] = React.useState([
    { id: 1, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/49ff9719e7be2a7530b5d969803cee64ea880b407a998b043a8faae8c8156818", name: "Isabella Allen", lastMessage: "You: Knock knock!", time: "1 hours ago" },
    { id: 2, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/de69055c5653a537eddf73867c687641e131caa5cb95321b387e3bb0e012a66b", name: "Ava Jones", lastMessage: "It makes me wonder...", time: "2 hours ago" },
    { id: 3, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/393e8bce4cff52bfbe7ec5b5f68fdb0fa448f67b9ed9a40a0d72686325f64218", name: "Brian Martinez", lastMessage: "You: Hi ;D", time: "19 hours ago" },
    { id: 4, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/d95fdff4028a7e0259a8fb217783803ed7898766c75760f8c828012f9aa17792", name: "Emily Taylor", lastMessage: "Haha I don't think so...", time: "22 hours ago" }
  ]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredChats(chatsData);
    } else {
      const filtered = chatsData.filter(chat => 
        chat.name.toLowerCase().includes(text.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredChats(filtered);
    }
  };

  React.useEffect(() => {
    setFilteredChats(chatsData);
  }, [chatsData]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search messages"
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity 
              onPress={() => handleSearch('')}
              style={styles.clearButton}
            >
              <Ionicons name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>

        {searchQuery.length === 0 && (
          <View style={styles.matchesSection}>
            <View style={styles.matchesHeader}>
              <Text style={styles.matchesTitle}>New Matches</Text>
              <Text style={styles.matchesCount}>(7)</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.matchesContainer}>
                {matchesData.map((match) => (
                  <Pressable key={match.id} style={styles.matchItem}>
                    <Image source={{ uri: match.image }} style={styles.matchAvatar} />
                    <Text style={styles.matchName}>{match.name}</Text>
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          </View>
        )}

        <View style={styles.chatList}>
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <Pressable 
                key={chat.id} 
                style={styles.chatItem}
                onPress={() => navigation.navigate('ChatScreen', { 
                  chat: {
                    id: chat.id,
                    name: chat.name,
                    avatar: chat.avatar,
                    lastMessage: chat.lastMessage,
                    time: chat.time
                  }
                })}
              >
                <Image source={{ uri: chat.avatar }} style={styles.avatar} />
                <View style={styles.chatContent}>
                  <View style={styles.chatHeader}>
                    <Text style={styles.name}>{chat.name}</Text>
                    <Text style={styles.time}>{chat.time}</Text>
                  </View>
                  <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
                </View>
              </Pressable>
            ))
          ) : (
            <View style={styles.noResults}>
              <Text style={styles.noResultsText}>No messages found</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="home-outline" size={24} color="#666" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.footerItem}
          onPress={() => navigation.navigate('Match')}
        >
          <Ionicons name="heart-outline" size={24} color="#666" />
          <Text style={styles.footerText}>Matches</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="chatbubble" size={24} color="#8023EB" />
          <Text style={[styles.footerText, { color: '#8023EB' }]}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.footerItem}
          onPress={() => navigation.navigate('SubscriptionPlans')}
        >
          <Ionicons name="person-outline" size={24} color="#666" />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#171A1F',
  },
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  matchesSection: {
    padding: 16,
  },
  matchesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  matchesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#171A1F',
  },
  matchesCount: {
    fontSize: 18,
    color: '#666',
    marginLeft: 8,
  },
  matchesContainer: {
    flexDirection: 'row',
  },
  matchItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  matchAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  matchName: {
    marginTop: 8,
    fontSize: 12,
    color: '#171A1F',
  },
  chatList: {
    paddingTop: 16,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatContent: {
    flex: 1,
    marginLeft: 12,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#171A1F',
  },
  time: {
    fontSize: 12,
    color: '#666',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  clearButton: {
    padding: 4,
  },
  noResults: {
    padding: 20,
    alignItems: 'center',
  },
  noResultsText: {
    color: '#666',
    fontSize: 16,
  },
});

export default ChatScreen;