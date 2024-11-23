import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

const SwipeRightConfirmation = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/540f4066b3d0616b975a8a9c2e6a50d6d4d40d09417bc6e0844a2d6aba5ec7fc?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
              style={styles.logo}
              accessible={true}
              accessibilityLabel="HeartSync logo"
            />
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/35b8747943f22a665dfc9b56ac717bf9a56214bb40a6b6c3a9c520ee2ce3f0f2?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                style={styles.icon}
                accessible={true}
                accessibilityLabel="List icon"
              />
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/faa6bddc2bee192acb1dcaf8d807cf69aac6f9e1cbd2e02f1343f591f4c481c4?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                style={styles.icon}
                accessible={true}
                accessibilityLabel="Refresh icon"
              />
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>HeartSync</Text>
            <View style={styles.slider}>
              <View style={styles.sliderTrack}>
                <View style={styles.sliderThumb} />
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1b9314384c21ff19b18a6b2ea08f3f93580f4711765b40a811568af9296d39f?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
              style={styles.buttonImage}
              accessible={true}
              accessibilityLabel="Action button"
            />
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d75b1ebde142ae395b00dccdbf47ce5a271abccb886db5f58e99f1fdd5249502?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
              style={styles.roundButton}
              accessible={true}
              accessibilityLabel="Round action button"
            />
          </View>
        </View>
        <View style={styles.modalContainer}>
          <Image
            resizeMode="cover"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ea0a40c5c1dcd4e6e31b3adeffd4d4b038903000fe629012c1ef977222d28?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
            style={styles.backgroundImage}
            accessible={true}
            accessibilityLabel="Background image"
          >
            <View style={styles.contentContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb76d2b4458fe6f3c0051a4ae4b6e55031b0aea49aae24c13b93c5b70199773f?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                style={styles.iconImage}
                accessible={true}
                accessibilityLabel="Confirmation icon"
              />
              <Text style={styles.modalTitle}>You've just swiped right!</Text>
              <Text style={styles.description}>
                By swiping right, you're expressing interest in this person. If they also swipe right on your profile, it's a match! Do you want to continue?
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={styles.cancelButton} 
                  onPress={() => navigation.goBack()}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.continueButton}
                  onPress={() => {
                    // If it's a match
                    navigation.navigate('MatchFoundScreen');
                    // If not a match
                    navigation.goBack();
                  }}
                >
                  <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Image>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Rachel Miller</Text>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed62da59d0539a33a16ef17300f12fe78017ffcff6c9cb23bd7bae7a253ddcf0?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                style={styles.privacyIcon}
                accessible={true}
                accessibilityLabel="Privacy icon"
              />
            </View>
            <View style={styles.tagContainer}>
              <Text style={styles.tag}>she/ her/ hers</Text>
            </View>
            <View style={styles.occupationContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f9de14e1897b5512ceb3edc7e67a4280aa4497d7c679c7eae595c5d6bca5ca6?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                style={styles.folderIcon}
                accessible={true}
                accessibilityLabel="Occupation icon"
              />
              <Text style={styles.occupation}>Freelance model</Text>
            </View>
          </View>
        </View>
        <View style={styles.tabBarContainer}>
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c715fec901ab790431c25688f33d2de59c54cdeccb764becadbb0660e5349fe4?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
            style={styles.tabBarImage}
            accessible={true}
            accessibilityLabel="Tab bar menu"
          />
          <View style={styles.indicator} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
  },
  overlay: {
    width: '100%',
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    gap: 20,
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    width: 72,
    aspectRatio: 1.8,
  },
  iconContainer: {
    display: 'flex',
    marginTop: 26,
    marginLeft: 20,
    alignItems: 'stretch',
    gap: 12,
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    aspectRatio: 1,
  },
  titleContainer: {
    display: 'flex',
    marginTop: 67,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  title: {
    color: 'rgba(23, 26, 31, 1)',
    fontSize: 16,
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '400',
    lineHeight: 32,
    textAlign: 'center',
  },
  slider: {
    display: 'flex',
    marginTop: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  sliderTrack: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  sliderThumb: {
    width: 78,
    height: 6,
    backgroundColor: 'rgba(128, 35, 235, 1)',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  buttonImage: {
    width: 96,
    aspectRatio: 2.4,
  },
  roundButton: {
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 10,
    width: 36,
    aspectRatio: 1,
  },
  modalContainer: {
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 8,
    width: '100%',
    maxWidth: 350,
    overflow: 'hidden',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
  },
  backgroundImage: {
    aspectRatio: 0.58,
    width: '100%',
    paddingTop: 153,
  },
  contentContainer: {
    borderRadius: 6,
    zIndex: 10,
    marginHorizontal: 23,
    maxWidth: 304,
    padding: 24,
    alignItems: 'stretch',
  },
  iconImage: {
    borderRadius: 22,
    alignSelf: 'center',
    width: 44,
    aspectRatio: 1,
  },
  modalTitle: {
    color: 'rgba(23, 26, 31, 1)',
    fontSize: 16,
    fontFamily: 'Epilogue, sans-serif',
    lineHeight: 32,
    textAlign: 'center',
    marginTop: 24,
  },
  description: {
    color: 'rgba(23, 26, 31, 1)',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 26,
    justifyContent: 'space-between',
  },
  cancelButton: {
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 1,
    paddingHorizontal: 37,
    paddingVertical: 7,
  },
  cancelButtonText: {
    color: 'rgba(86, 94, 108, 1)',
    fontSize: 14,
    lineHeight: 28,
  },
  continueButton: {
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 7,
    backgroundColor: 'rgba(128, 35, 235, 1)',
  },
  continueButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    lineHeight: 28,
  },
  profileContainer: {
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'stretch',
    color: 'rgba(255, 255, 255, 1)',
  },
  infoContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 70,
    paddingTop: 72,
    paddingBottom: 24,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  name: {
    fontFamily: 'Epilogue, sans-serif',
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
  privacyIcon: {
    width: 20,
    aspectRatio: 1,
  },
  tagContainer: {
    marginTop: 8,
    width: 85,
  },
  tag: {
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 1,
    overflow: 'hidden',
    fontSize: 11,
    color: 'rgba(128, 35, 235, 1)',
    lineHeight: 22,
  },
  occupationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  },
  folderIcon: {
    width: 16,
    aspectRatio: 1,
  },
  occupation: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 1)',
  },
  tabBarContainer: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginTop: 8,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  tabBarImage: {
    width: 350,
    aspectRatio: 10.99,
  },
  indicator: {
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 32,
    width: 160,
    height: 5,
    backgroundColor: 'rgba(128, 35, 235, 0.2)',
  },
});

export default SwipeRightConfirmation;