import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { Dimensions, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

function VideoCallScreen({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const userProfile = route.params?.userProfile || {
    name: "Ava Jones",
    avatar: "https://default-avatar-url.com",
    age: 25
  };

  // Hàm xử lý khi nhấn nút end call
  const handleEndCall = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]} accessible={true} accessibilityRole="main">
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']} style={styles.backgroundGradient}>
        <Image 
          source={{ uri: userProfile.avatar }}
          style={styles.backgroundVideo} 
          blurRadius={2} 
          accessible={true} 
          accessibilityLabel="Video call background" 
        />
      </LinearGradient>

      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.headerButton} accessibilityRole="button" accessibilityLabel="Switch camera">
            <Ionicons name="camera-reverse" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.minimizeButton} accessibilityRole="button" accessibilityLabel="Minimize call" onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-down" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContent}>
          <View style={styles.profileContainer}>
            <Image 
              source={{ uri: userProfile.avatar }}
              style={styles.profileImage} 
              accessible={true} 
              accessibilityLabel={`Profile picture of ${userProfile.name}`} 
            />
            <View style={styles.nameContainer}>
              <Text style={styles.nameText} accessibilityRole="text">
                {userProfile.name}
              </Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText} accessibilityRole="text">Calling...</Text>
            </View>
          </View>

          <View style={styles.controlsContainer}>
            <View style={styles.controlsWrapper}>
              <TouchableOpacity style={styles.controlButton} accessibilityRole="button" accessibilityLabel="Mute microphone">
                <Ionicons name="mic-off" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.controlButton, styles.endCallButton]} accessibilityRole="button" accessibilityLabel="End call" onPress={handleEndCall}>
                <MaterialIcons name="call-end" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.controlButton} accessibilityRole="button" accessibilityLabel="Toggle video">
                <Ionicons name="videocam-off" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomIndicator} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundGradient: {
    position: 'absolute',
    width: width,
    height: height,
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  contentWrapper: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerButton: {
    padding: 10,
  },
  headerImage: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  minimizeButton: {
    padding: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  nameContainer: {
    marginTop: 20,
  },
  nameText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  statusContainer: {
    marginTop: 8,
  },
  statusText: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
    textAlign: 'center',
  },
  controlsContainer: {
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? 40 : 20,
  },
  controlsWrapper: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 42,
    padding: 20,
    marginBottom: 30,
  },
  controlButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  endCallButton: {
    backgroundColor: '#FF3B30',
  },
  controlIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  bottomIndicator: {
    width: 160,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    opacity: 0.3,
  },
});

export default VideoCallScreen;