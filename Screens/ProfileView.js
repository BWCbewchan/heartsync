import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileView = ({ route, navigation }) => {
  const { profile } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.headerButton}
          >
            <Ionicons name="arrow-back" size={24} color="#171A1F" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Main Profile Image */}
        <Image 
          source={{ uri: profile.image }} 
          style={styles.profileImage}
        />

        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{profile.name}, {profile.age}</Text>
            {profile.verified && (
              <Ionicons name="checkmark-circle" size={20} color="#1DA1F2" />
            )}
          </View>

          <View style={styles.pronounTag}>
            <Text style={styles.pronounText}>{profile.pronouns}</Text>
          </View>

          <View style={styles.jobRow}>
            <Ionicons name="briefcase-outline" size={16} color="#666" />
            <Text style={styles.jobTitle}>{profile.job}</Text>
          </View>
        </View>

        {/* Location */}
        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color="#666" />
            <Text style={styles.locationText}>2.0 kilometres away</Text>
          </View>
          <Text style={styles.addressText}>Las Vegas, NV 89104</Text>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About me</Text>
          <Text style={styles.aboutText}>
            It would be wonderful to meet someone who appreciates the arts and enjoys exploring the vibrant culture of the city. I value open-mindedness, good communication, and a shared passion for classical music and fine arts. Also, mother of 2 cats ;)
          </Text>
        </View>

        {/* Interests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.tagsContainer}>
            {["Classical Music", "Art", "Cats", "Technology", "Baking"].map((interest, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{interest}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.tagsContainer}>
            {["English (Native)", "Spanish (Fluent)"].map((language, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{language}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Report Button */}
        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.reportText}>Hide and Report Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  profileImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  profileInfo: {
    padding: 16,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginRight: 8,
  },
  pronounTag: {
    backgroundColor: '#F5F0FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  pronounText: {
    color: '#8023EB',
    fontSize: 14,
  },
  jobRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  jobTitle: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  locationContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  addressText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#F5F0FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#8023EB',
    fontSize: 14,
  },
  reportButton: {
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  reportText: {
    color: '#FF3B30',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ProfileView;