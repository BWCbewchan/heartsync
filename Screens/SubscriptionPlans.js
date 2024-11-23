import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SubscriptionPlans = () => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState('SubscriptionPlans');

  const handleNavigateToMatch = () => {
    setActiveScreen('Like');
    navigation.navigate('Match');
  };

  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/06292c9caac2ced3d72e541a6f106854f8ceb72cc7126375979e88f6e2a6f1c3?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
            }}
            style={styles.icon}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6b3f6a317c1820129270a274059debefc6827cb723df20c35aa7c6671d5c0b6?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
              }}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5480b09014259928ea02fd0070b07ff9ebcb0c71c75b4f6cdf728308f57ab851?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
            }}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <View style={styles.profileInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Joshua Edwards, 29</Text>
              <Image
                source={{
                  uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/deffe76a5933dd44d3683789cdca2191be322ebb8d2848072f6e641eeea0eeb2?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
                }}
                style={styles.verifiedIcon}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity 
              style={styles.editButton} 
              onPress={() => navigation.navigate('EditProfileScreen')}
            >
              <Text style={styles.editButtonText}>Edit your profile</Text>
              <Image
                source={{
                  uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e6f67a04533918f603226f9b898993572b9ee40c7458f0318ef34e999d8489af?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
                }}
                style={styles.chevronIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.banner}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e1459726-680a-4f42-a986-1257b0f5bbe9?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
            }}
            style={styles.bannerIcon}
            resizeMode="contain"
          />
          <View style={styles.bannerContent}>
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerText}>
                Verification adds an extra layer of authenticity and trust to
                your profile.
              </Text>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c438570e6c11920c7dad024547c104b38140417631400ba2fb335917af4166d?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
                  }}
                  style={styles.chevronIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.verifyText}>Verify your account now!</Text>
          </View>
        </View>

        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5799d530672623b3875f82e471662902917c7f1175ad4f1267258524e95f6a4d?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
          }}
          style={styles.divider}
          resizeMode="contain"
        />

        <View style={styles.planMenu}>
          <View style={styles.activeTab}>
            <Text style={styles.activeTabText}>Plans</Text>
            <View style={styles.activeIndicator} />
          </View>
          <View style={styles.inactiveTab}>
            <Text style={styles.inactiveTabText}>Safety</Text>
          </View>
        </View>

        <View style={styles.premiumPlan}>
          <View style={styles.planHeader}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13434eac63685339fa82e2ac72f495a4baf75e3abd258897689815bbca87acbb?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
              }}
              style={styles.headerIcon}
              resizeMode="contain"
            />
            <Text style={styles.planTitle}>HeartSync Premium</Text>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d0c45c1595d37e3266431574920298d98a9af08dc6443b0961008efbcb403dd3?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
              }}
              style={styles.headerIcon}
              resizeMode="contain"
            />
          </View>
          <View style={styles.planDescription}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7ced013395534937585b34e60cc501cb3b39c1b698f90b049420bd2ad408890?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
              }}
              style={styles.descriptionIcon}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.descriptionText}>
                Unlock exclusive features and supercharge your dating
                experience.
              </Text>
              <Image
                source={{
                  uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d9f37e278c3479ce791d993fb62e6fa6049a3c346748f60625c1489b872a05c5?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
                }}
                style={styles.descriptionIcon}
                resizeMode="contain"
              />
            </View>
          </View>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/28dcee0452f969a5b1b593cf5596eb5ad8e19aafe295bb7950d43907d35bf463?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
            }}
            style={styles.planDivider}
            resizeMode="contain"
          />
          <View style={styles.upgradeSection}>
            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeButtonText}>Upgrade from $7.99</Text>
            </TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d85c6c43546fdbccfccca6d934e9affdd72a0edc7f84db506841b275555bf5f5?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1',
              }}
              style={styles.upgradeIcon}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderTitle}>What's included</Text>
            <Text style={styles.tableHeaderColumn}>Free</Text>
            <Text style={[styles.tableHeaderColumn, styles.premiumColumn]}>Premium</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.featureText}>Unlimited swipes</Text>
            <View style={styles.checkboxColumn}>
              <View style={styles.checkbox}>
                <Ionicons name="checkmark" size={16} color="#8023EB" />
              </View>
            </View>
            <View style={styles.checkboxColumn}>
              <View style={styles.checkbox}>
                <Ionicons name="checkmark" size={16} color="#8023EB" />
              </View>
            </View>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.featureText}>Advanced filters</Text>
            <View style={styles.checkboxColumn}>
              <View style={styles.checkbox}>
                <Ionicons name="checkmark" size={16} color="#8023EB" />
              </View>
            </View>
            <View style={styles.checkboxColumn}>
              <View style={styles.checkbox}>
                <Ionicons name="checkmark" size={16} color="#8023EB" />
              </View>
            </View>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.featureText}>Remove ads</Text>
            <View style={styles.checkboxColumn}>
              <View style={styles.emptyCheckbox} />
            </View>
            <View style={styles.checkboxColumn}>
              <View style={styles.checkbox}>
                <Ionicons name="checkmark" size={16} color="#8023EB" />
              </View>
            </View>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.featureText}>Undo accidental left swipes</Text>
            <View style={styles.checkboxColumn}>
              <View style={styles.emptyCheckbox} />
            </View>
            <View style={styles.checkboxColumn}>
              <View style={styles.checkbox}>
                <Ionicons name="checkmark" size={16} color="#8023EB" />
              </View>
            </View>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.featureText}>Push your profile to more viewers</Text>
            <View style={styles.checkboxColumn}>
              <View style={styles.emptyCheckbox} />
            </View>
            <View style={styles.checkboxColumn}>
              <View style={styles.checkbox}>
                <Ionicons name="checkmark" size={16} color="#8023EB" />
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => navigation.navigate('SubscriptionPlans')}
        >
          <Ionicons name="person-outline" size={24} color="#666" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerButton}
        onPress={() => navigation.navigate('Match')}>
          <Ionicons name="heart" size={24} color="#8023EB" />
          
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="bookmark-outline" size={24} color="#666" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerButton}
        onPress={() => navigation.navigate('NewMatchedProfileNotification')}>
          <View style={styles.badgeContainer}>
            <Ionicons name="chatbubble-outline" size={24} color="#666" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    alignItems: 'center',
    maxWidth: 480,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 350,
    marginTop: 26,
  },
  icon: {
    width: 24,
    aspectRatio: 1,
  },
  profileSection: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 350,
    marginTop: 20,
    gap: 20,
  },
  profileImage: {
    width: 132,
    aspectRatio: 0.97,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  name: {
    fontFamily: 'Epilogue, sans-serif',
    fontSize: 18,
    color: 'rgba(23, 26, 31, 1)',
    lineHeight: 36,
  },
  verifiedIcon: {
    width: 12,
    aspectRatio: 1,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginTop: 8,
  },
  editButtonText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11,
    color: 'rgba(128, 35, 235, 1)',
    lineHeight: 22,
  },
  chevronIcon: {
    width: 12,
    aspectRatio: 1,
    marginLeft: 5,
  },
  banner: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 350,
    borderRadius: 4,
    padding: 16,
    marginTop: 32,
    alignItems: 'center',
  },
  bannerIcon: {
    width: 48,
    aspectRatio: 1,
    borderRadius: 24,
  },
  bannerContent: {
    flex: 1,
    marginLeft: 16,
  },
  bannerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11,
    color: 'rgba(110, 119, 135, 1)',
    lineHeight: 18,
    flex: 1,
  },
  verifyText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11,
    color: 'rgba(55, 154, 230, 1)',
    fontWeight: '500',
    lineHeight: 22,
    marginTop: 4,
  },
  divider: {
    width: '100%',
    aspectRatio: 333.33,
    marginTop: 24,
  },
  planMenu: {
    flexDirection: 'row',
    justifyContent:'center',
    width: 162,
    marginTop: 7,
  },
  activeTab: {
    borderRadius: 4,
    paddingTop: 15,
    alignItems: 'center',
  },
  activeTabText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    color: 'rgba(128, 35, 235, 1)',
    fontWeight: '700',
    lineHeight: 32,
  },
  activeIndicator: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(128, 35, 235, 1)',
    borderRadius: 2,
    marginTop: 11,
  },
  inactiveTab: {
    borderRadius: 4,
    padding: 15,
  },
  inactiveTabText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    color: 'rgba(86, 94, 108, 1)',
    fontWeight: '400',
    lineHeight: 32,
  },
  premiumPlan: {
    width: '100%',
    maxWidth: 350,
    borderRadius: 6,
    padding: 16,
    marginTop: 32,
    backgroundColor: '#8023EB',
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcon: {
    width: 12,
    aspectRatio: 1,
  },
  planTitle: {
    fontFamily: 'Epilogue, sans-serif',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    lineHeight: 36,
  },
  planDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  descriptionIcon: {
    width: 16,
    aspectRatio: 1,
    marginRight: 18,
  },
  descriptionText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11,
    color: 'rgba(255, 255, 255, 1)',
    lineHeight: 18,
    width: 245,
    textAlign:'center'
  },
  planDivider: {
    width: '100%',
    height: 1,
  },
  upgradeSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upgradeButton: {
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  upgradeButtonText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11,
    color: 'rgba(50, 56, 66, 1)',
    lineHeight: 22,
    padding:10, borderRadius:20, backgroundColor:'white'
  },
  upgradeIcon: {
    width: 8,
    aspectRatio: 1,
  },
  tableContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 24,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tableHeaderTitle: {
    flex: 2,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  tableHeaderColumn: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  premiumColumn: {
    color: '#8023EB',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    alignItems: 'center',
  },
  featureText: {
    flex: 2,
    fontSize: 14,
    color: '#333',
  },
  checkboxColumn: {
    flex: 1,
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    padding: 8,
  },
  badgeContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default SubscriptionPlans;
