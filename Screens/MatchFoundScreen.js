import * as React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';

function MatchScreen({ navigation }) {
  const [message, setMessage] = React.useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image
            accessible={true}
            accessibilityLabel="Match header banner"
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/83e2cfedd27ce98c5b64843a55da69d2e58c49bd195caa8ef10b33974edfdeda?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
            style={styles.headerImage}
          />

          <View style={styles.navigationIcons}>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Navigate back"
              accessibilityRole="button">
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f34bb8284a5e93de394a94b2a4f4146cd31e683a78eddd533f9571e28241a5e?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                style={styles.navIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Close match screen"
              accessibilityRole="button">
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4aff28caecb48c825e2de3aada160cf816fdcef9d478619bdd92ba1168c7748?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                style={styles.navIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.matchContent}>
            <Text style={styles.matchTitle} accessibilityRole="header">Match found!</Text>
            <Image
              accessible={true}
              accessibilityLabel="Match profile picture"
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8a46f4f-0017-4271-94b6-0453270fcd11?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
              style={styles.matchImage}
            />
          </View>

          <View style={styles.messageSection}>
            <Text style={styles.matchPrompt}>
              You've both shown interest in each other! Now go send that first message. Don't wait too long!
            </Text>

            <TouchableOpacity
              accessible={true}
              accessibilityLabel="View conversation starters"
              accessibilityRole="button"
              style={styles.startersContainer}>
              <View style={styles.startersTextContainer}>
                <Text style={styles.startersText}>
                  Stuck on what to say? Choose from these conversation starters!
                </Text>
              </View>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/acad9aa8ac672f89234bf7a2e85140d5fa2e58840023279b50a1e6fdceef3150?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                style={styles.startersIcon}
              />
            </TouchableOpacity>

            <View style={styles.inputContainer}>
              <View style={styles.messageInputWrapper}>
                <Image
                  resizeMode="contain"
                  source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d96788b60563d756e7f6cd58f2073d697b9765fb868d9a36df905c6ad2b3429?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Type a message..."
                  placeholderTextColor="rgba(158, 87, 239, 1)"
                  value={message}
                  onChangeText={setMessage}
                  accessible={true}
                  accessibilityLabel="Message input"
                  accessibilityRole="textbox"
                />
              </View>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Send message"
                accessibilityRole="button">
                <Image
                  resizeMode="contain"
                  source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1e0b5c0e6608c34433112fb2fb9c648585a5c6f30e95cd7986d815247317a0f?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                  style={styles.sendIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottomBar} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingBottom: 20,
  },
  headerImage: {
    width: '100%',
    aspectRatio: 9.71,
  },
  navigationIcons: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 26,
    width: '100%',
    maxWidth: 350,
    justifyContent: 'space-between',
    gap: 20,
  },
  navIcon: {
    width: 24,
    aspectRatio: 1,
  },
  matchContent: {
    marginTop: 49,
    alignItems: 'center',
  },
  matchTitle: {
    fontFamily: 'Epilogue',
    fontSize: 32,
    color: 'rgba(128, 35, 235, 1)',
    textAlign: 'center',
  },
  matchImage: {
    width: '100%',
    aspectRatio: 1.6,
    borderRadius: 4,
    marginTop: 37,
  },
  messageSection: {
    paddingHorizontal: 27,
    marginTop: 9,
  },
  matchPrompt: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    color: 'rgba(23, 26, 31, 1)',
    fontFamily: 'Inter',
  },
  startersContainer: {
    borderRadius: 4,
    width: 200,
    maxWidth: '100%',
    marginTop: 105,
  },
  startersTextContainer: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: 'rgba(128, 35, 235, 0.1)',
  },
  startersText: {
    fontSize: 11,
    color: 'rgba(23, 26, 31, 1)',
    lineHeight: 18,
  },
  startersIcon: {
    width: 14,
    marginLeft: 12,
  },
  inputContainer: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(158, 87, 239, 0.3)',
    marginTop: 9,
    paddingHorizontal: 16,
    paddingVertical: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  inputIcon: {
    width: 20,
    aspectRatio: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'rgba(23, 26, 31, 1)',
    padding: 0,
  },
  sendIcon: {
    width: 20,
    aspectRatio: 1,
  },
  bottomBar: {
    width: 160,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#E5E5E5',
    alignSelf: 'center',
    marginTop: 49,
  },
});

export default MatchScreen;