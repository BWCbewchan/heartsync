import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function ChatScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const chatData = route.params?.chat || {};

  const userProfileData = {
    name: chatData.name || "Ava Jones",
    age: 25,
    pronouns: "she/ her/ hers",
    occupation: "Business Analyst at Tech",
    avatar: chatData.avatar || "https://cdn.builder.io/api/v1/image/assets/TEMP/51115e35d34be8c524d418c09bb235ae46f4e92389a7305c1673b378e2bad81c"
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileSection} onPress={() => {}}>
          <View style={styles.profileInfo}>
            <Image source={{ uri: userProfileData.avatar }} style={styles.avatar} />
            <View style={styles.nameSection}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>{`${userProfileData.name}, ${userProfileData.age}`}</Text>
                <Ionicons name="checkmark-circle" size={16} color="#8023EB" />
              </View>
              <Text style={styles.pronouns}>{userProfileData.pronouns}</Text>
              <View style={styles.occupationRow}>
                <Ionicons name="briefcase-outline" size={16} color="#666" />
                <Text style={styles.occupation}>{userProfileData.occupation}</Text>
              </View>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={() => navigation.navigate('VideoCallScreen', {
              userProfile: {
                name: userProfileData.name,
                avatar: userProfileData.avatar,
                age: userProfileData.age
              }
            })}
          >
            <Ionicons name="videocam-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="ellipsis-vertical" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Area */}
      <ScrollView style={styles.chatArea}>
        <Text style={styles.dateLabel}>Today</Text>
        
        <View style={styles.messageContainer}>
          <Text style={styles.timeText}>08:42 PM</Text>
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>Hi there!</Text>
          </View>
          <Text style={styles.statusText}>Sent</Text>
        </View>

        {/* Game Invitation Card */}
        <View style={styles.gameCard}>
          <View style={styles.gameIconRow}>
            <Ionicons name="game-controller-outline" size={20} color="#8023EB" />
            <Text style={styles.gameTitle}>Invite your match to play a mini-game.</Text>
          </View>
          <Text style={styles.gameDescription}>
            Break the ice and find out if you both sync on a deeper level.
          </Text>
        </View>
      </ScrollView>

      {/* Input Section */}
      <View style={styles.inputSection}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor="#999"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity>
            <Ionicons name="happy-outline" size={24} color="#8023EB" />
          </TouchableOpacity>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="happy-outline" size={24} color="#8023EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="game-controller-outline" size={24} color="#8023EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="image-outline" size={24} color="#8023EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="camera-outline" size={24} color="#8023EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="mic-outline" size={24} color="#8023EB" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    marginBottom: 8,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  nameSection: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  pronouns: {
    fontSize: 14,
    color: '#8023EB',
    marginTop: 2,
  },
  occupationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  occupation: {
    fontSize: 14,
    color: '#666',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
  chatArea: {
    flex: 1,
    padding: 16,
  },
  dateLabel: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 16,
  },
  messageContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  timeText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  messageBubble: {
    backgroundColor: '#8023EB',
    padding: 12,
    borderRadius: 16,
    borderBottomRightRadius: 4,
  },
  messageText: {
    color: '#FFF',
    fontSize: 16,
  },
  statusText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  gameCard: {
    backgroundColor: 'rgba(128, 35, 235, 0.1)',
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  gameIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  gameTitle: {
    color: '#8023EB',
    fontSize: 14,
    fontWeight: '500',
  },
  gameDescription: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },
  inputSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginRight: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
  },
});

export default ChatScreen;