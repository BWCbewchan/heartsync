import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 120;

function Match() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;
  const [profiles, setProfiles] = useState([]);
  const swipeDirection = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/profiles');
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  // Xử lý refresh profiles
  const handleRefresh = useCallback(() => {
    setCurrentIndex(0);
    position.setValue({ x: 0, y: 0 });
    swipeDirection.setValue(0);
  }, []);

  // Tối ưu PanResponder với useCallback
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
        // Cập nhật hướng vuốt để hiển thị indicator
        swipeDirection.setValue(gesture.dx);
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe('left');
        } else {
          resetPosition();
        }
      }
    })
  ).current;

  const forceSwipe = useCallback((direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH + 100 : -SCREEN_WIDTH - 100;
    Animated.parallel([
      Animated.timing(position, {
        toValue: { x, y: 0 },
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(swipeDirection, {
        toValue: direction === 'right' ? 1 : -1,
        duration: 250,
        useNativeDriver: false,
      })
    ]).start(() => onSwipeComplete(direction));
  }, []);

  const onSwipeComplete = useCallback(async (direction) => {
    const item = profiles[currentIndex];
    if (direction === 'right') {
      try {
        const response = await fetch(`http://localhost:3000/api/profiles/${item.id}/like`, {
          method: 'POST'
        });
        const data = await response.json();
        if (data.isMatch) {
          // Handle match
          console.log('It\'s a match!');
        }
      } catch (error) {
        console.error('Error liking profile:', error);
      }
    }
    setCurrentIndex(prevIndex => prevIndex + 1);
    position.setValue({ x: 0, y: 0 });
    swipeDirection.setValue(0);
  }, [currentIndex, profiles]);

  const resetPosition = useCallback(() => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      friction: 4,
      tension: 40,
      useNativeDriver: false,
    }).start();
    Animated.spring(swipeDirection, {
      toValue: 0,
      friction: 4,
      tension: 40,
      useNativeDriver: false,
    }).start();
  }, []);

  // Tối ưu các interpolations
  const getCardStyle = useCallback(() => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    });

    const scale = swipeDirection.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0.95, 1, 0.95],
      extrapolate: 'clamp',
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }, { scale }],
    };
  }, []);

  const getLikeOpacity = useCallback(() => {
    return position.x.interpolate({
      inputRange: [0, SCREEN_WIDTH / 4],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
  }, []);

  const getNopeOpacity = useCallback(() => {
    return position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 4, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
  }, []);

  // Xử lý các button actions
  const handleLike = useCallback(() => {
    forceSwipe('right');
  }, []);

  const handleNope = useCallback(() => {
    forceSwipe('left');
  }, []);

  // Thêm hàm xử lý khi bấm vào profile
  const handleProfilePress = useCallback((profile) => {
    navigation.navigate('ProfileView', { profile });
  }, [navigation]);

  const renderCard = useCallback(() => {
    if (currentIndex >= profiles.length) {
      return (
        <View style={[styles.cardStyle, styles.noMoreCards]}>
          <Text style={styles.noMoreCardsText}>No more profiles!</Text>
          <TouchableOpacity 
            style={styles.refreshButton}
            onPress={handleRefresh}
          >
            <Text style={styles.refreshButtonText}>Refresh</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return profiles.map((item, i) => {
      if (i < currentIndex) return null;

      if (i === currentIndex) {
        return (
          <Animated.View
            key={item.id}
            style={[getCardStyle(), styles.cardStyle]}
            {...panResponder.panHandlers}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              
              {/* Thêm nút xem chi tiết */}
              <TouchableOpacity 
                style={styles.viewDetailsButton}
                onPress={() => handleProfilePress(item)}
                activeOpacity={0.9}
              >
                <Ionicons name="information-circle" size={28} color="#FFF" />
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>
            </View>
            
            {/* Like/Nope Indicators */}
            <Animated.View style={[styles.indicator, styles.likeIndicator, {
              opacity: getLikeOpacity()
            }]}>
              <View style={[styles.indicatorCircle, styles.likeCircle]}>
                <Ionicons name="checkmark" size={32} color="#4CD964" />
              </View>
            </Animated.View>

            <Animated.View style={[styles.indicator, styles.nopeIndicator, {
              opacity: getNopeOpacity()
            }]}>
              <View style={[styles.indicatorCircle, styles.nopeCircle]}>
                <Ionicons name="close" size={32} color="#FF3B30" />
              </View>
            </Animated.View>

            {/* Card Content */}
            <View style={styles.cardContent}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>{item.name}, {item.age}</Text>
                {item.verified && (
                  <Ionicons name="checkmark-circle" size={20} color="#1DA1F2" />
                )}
              </View>
              <View style={styles.pronounTag}>
                <Text style={styles.pronounText}>{item.pronouns}</Text>
              </View>
              <View style={styles.jobRow}>
                <Ionicons name="briefcase-outline" size={16} color="#FFF" />
                <Text style={styles.jobTitle}>{item.job}</Text>
              </View>
            </View>
          </Animated.View>
        );
      }

      // Next card preview
      return (
        <Animated.View
          key={item.id}
          style={[styles.cardStyle, { 
            top: 10 * (i - currentIndex),
            zIndex: -i,
          }]}
        >
          <Image source={{ uri: item.image }} style={styles.cardImage} />
        </Animated.View>
      );
    }).reverse();
  }, [currentIndex, profiles, getCardStyle, handleProfilePress, getLikeOpacity, getNopeOpacity]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="menu-outline" size={24} color="#171A1F" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={handleRefresh}
          >
            <Ionicons name="refresh-outline" size={24} color="#171A1F" />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.headerTitle}>HeartSync</Text>
        
        <TouchableOpacity 
          style={[styles.headerButton, styles.filterButton]}
          onPress={() => navigation.navigate('FiltersForProfile')}
        >
          <Ionicons name="options-outline" size={24} color="#8023EB" />
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>

      {/* Cards Container */}
      <View style={styles.cardContainer}>
        {renderCard()}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => navigation.navigate('SubscriptionPlans')}
        >
          <Ionicons name="person-outline" size={24} color="#666" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Match')}>
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
    </SafeAreaView>
  );
}

// Thêm styles mới và cập nhật styles cũ
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH - 20,
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '600',
    marginRight: 8,
  },
  pronounTag: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  pronounText: {
    color: '#FFF',
    fontSize: 14,
  },
  jobRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobTitle: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 8,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    padding: 8,
    borderRadius: 8,
  },
  filterButton: {
    backgroundColor: '#F5F0FF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#171A1F',
  },

  progressBar: {
    height: 3,
    backgroundColor: '#F5F0FF',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 2,
  },
  progressFill: {
    width: '30%',
    height: '100%',
    backgroundColor: '#8023EB',
    borderRadius: 2,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
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
  indicator: {
    position: 'absolute',
    top: '40%',
    transform: [{ translateY: -25 }],
  },
  likeIndicator: {
    right: 30,
  },
  nopeIndicator: {
    left: 30,
  },
  indicatorCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  likeCircle: {
    borderColor: '#4CD964',
    borderWidth: 2,
  },
  nopeCircle: {
    borderColor: '#FF3B30',
    borderWidth: 2,
  },
  noMoreCards: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  noMoreCardsText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  refreshButton: {
    backgroundColor: '#8023EB',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  refreshButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  viewDetailsButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewDetailsText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Match;
  