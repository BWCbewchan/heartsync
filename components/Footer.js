import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Footer({ navigation, activeRoute }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('ProfileView')}
      >
        <Ionicons 
          name="person-outline" 
          size={24} 
          color={activeRoute === 'ProfileView' ? '#8023EB' : '#000'} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('Favorites')}
      >
        <Ionicons 
          name="heart-outline" 
          size={24} 
          color={activeRoute === 'Favorites' ? '#8023EB' : '#000'} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('Bookmarks')}
      >
        <Ionicons 
          name="bookmark-outline" 
          size={24} 
          color={activeRoute === 'Bookmarks' ? '#8023EB' : '#000'} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('Messages')}
      >
        <Ionicons 
          name="paper-plane-outline" 
          size={24} 
          color={activeRoute === 'Messages' ? '#8023EB' : '#000'} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    alignItems: 'center',
    padding: 10,
  },
});

export default Footer;
