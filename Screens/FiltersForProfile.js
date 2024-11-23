import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FilterScreen = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);
  const [ageRange, setAgeRange] = useState({ min: 18, max: 80 });
  const [distanceRange, setDistanceRange] = useState({ min: 10, max: 80 });
  const [currentAgeValue, setCurrentAgeValue] = useState(18);
  const [currentDistanceValue, setCurrentDistanceValue] = useState(10);
  const [extendedRangeEnabled, setExtendedRangeEnabled] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState(['English']);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleAgeRangeChange = (value) => {
    setCurrentAgeValue(Math.round(value));
    setAgeRange(prev => ({
      min: Math.min(Math.round(value), prev.max),
      max: Math.max(Math.round(value), prev.min)
    }));
  };

  const handleDistanceRangeChange = (value) => {
    setCurrentDistanceValue(Math.round(value));
    setDistanceRange(prev => ({
      min: Math.min(Math.round(value), prev.max),
      max: Math.max(Math.round(value), prev.min)
    }));
  };

  const handleLanguageSelect = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter(lang => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleClearAll = () => {
    setSelectedGender(null);
    setAgeRange({ min: 18, max: 80 });
    setDistanceRange({ min: 10, max: 80 });
    setCurrentAgeValue(18);
    setCurrentDistanceValue(10);
    setExtendedRangeEnabled(false);
    setSelectedLanguages([]);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleApplyFilters = () => {
    console.log({
      selectedGender,
      ageRange,
      distanceRange,
      extendedRangeEnabled,
      selectedLanguages
    });
    
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        
        <View style={styles.titleContainer}>
          <TouchableOpacity
            onPress={handleGoBack}
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityRole="button">
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f34bb8284a5e93de394a94b2a4f4146cd31e683a78eddd533f9571e28241a5e?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Filters</Text>
        </View>

        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/27881bcab985ddb18a9cc67c8666d3d00a594c5cb173f23fda21068eb5399daf?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
          style={styles.divider}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>What is your preferred gender?</Text>
          <View style={styles.genderContainer}>
            {['Male', 'Female', 'Nonbinary'].map((gender) => (
              <TouchableOpacity
                key={gender}
                style={styles.genderOption}
                onPress={() => handleGenderSelect(gender)}
                accessible={true}
                accessibilityLabel={`Select ${gender}`}
                accessibilityRole="radio"
                accessibilityState={{ checked: selectedGender === gender }}>
                <Text style={styles.genderText}>{gender}</Text>
                <View style={[
                  styles.checkbox,
                  selectedGender === gender && styles.checkboxSelected
                ]} />
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Age range:</Text>
          <View style={styles.rangeContainer}>
            <View style={styles.rangeValues}>
              <Text style={styles.rangeText}>{ageRange.min}</Text>
              <Text style={styles.rangeText}>{ageRange.max}</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={18}
              maximumValue={80}
              value={currentAgeValue}
              onValueChange={handleAgeRangeChange}
              minimumTrackTintColor="#8023EB"
              maximumTrackTintColor="#DEE1E6"
              thumbTintColor="#8023EB"
              step={1}
              accessible={true}
              accessibilityLabel="Age range slider"
              accessibilityRole="adjustable"
            />
          </View>

          <Text style={styles.sectionTitle}>Distance:</Text>
          <View style={styles.rangeContainer}>
            <View style={styles.rangeValues}>
              <Text style={styles.rangeText}>{distanceRange.min} km</Text>
              <Text style={styles.rangeText}>{distanceRange.max} km</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={10}
              maximumValue={80}
              value={currentDistanceValue}
              onValueChange={handleDistanceRangeChange}
              minimumTrackTintColor="#8023EB"
              maximumTrackTintColor="#DEE1E6"
              thumbTintColor="#8023EB"
              step={1}
              accessible={true}
              accessibilityLabel="Distance range slider"
              accessibilityRole="adjustable"
            />
            <TouchableOpacity
              style={styles.extendedRangeOption}
              onPress={() => setExtendedRangeEnabled(!extendedRangeEnabled)}
              accessible={true}
              accessibilityRole="switch"
              accessibilityState={{ checked: extendedRangeEnabled }}>
              <Text style={styles.extendedRangeText}>
                Show profiles within a 15-km range when run out of matches.
              </Text>
              <View style={[
                styles.toggle,
                extendedRangeEnabled && styles.toggleEnabled
              ]} />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Languages:</Text>
          <View style={styles.languageSelector}>
            <TouchableOpacity style={styles.languageDropdown}>
              <View style={styles.languageDropdownHeader}>
                <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae680f3d13bce53fcb58e95867e697eb1929c31602e17c01959b1a03f06ae26d?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }} style={styles.languageIcon} />
                <Text style={styles.languageDropdownText}>Select languages</Text>
              </View>
              <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbae8e5331e3d5c236b8ac4731e263ad96ea149cc291ec452b9bbb604dfc279c?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }} style={styles.dropdownIcon} />
            </TouchableOpacity>
            <View style={styles.selectedLanguages}>
              {selectedLanguages.map((language) => (
                <View key={language} style={styles.languageTag}>
                  <Text style={styles.languageTagText}>{language}</Text>
                  <TouchableOpacity
                    onPress={() => handleLanguageSelect(language)}
                    accessible={true}
                    accessibilityLabel={`Remove ${language}`}>
                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9f641a5c27c7c596b839429665982a3c110ea182d9da74da797021129a84c9b?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }} style={styles.removeIcon} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </View>

        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5799d530672623b3875f82e471662902917c7f1175ad4f1267258524e95f6a4d?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
          style={styles.footerDivider}
        />

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearAll}
            accessible={true}
            accessibilityLabel="Clear all filters"
            accessibilityRole="button">
            <Text style={styles.clearButtonText}>Clear all</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={handleApplyFilters}
            accessible={true}
            accessibilityLabel="Apply filters"
            accessibilityRole="button">
            <Text style={styles.applyButtonText}>Apply filters</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomBar} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    aspectRatio: 9.71,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  titleText: {
    fontFamily: 'Epilogue',
    fontSize: 20,
    fontWeight: '700',
    color: '#171A1F',
  },
  divider: {
    width: '100%',
    height: 1,
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Inter',
    color: '#8023EB',
    marginBottom: 12,
    lineHeight: 24,
  },
  genderContainer: {
    borderRadius: 4,
    borderColor: '#DEE1E6',
    borderWidth: 1,
    marginBottom: 32,
  },
  genderOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#DEE1E6',
  },
  genderText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#171A1F',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#565E6C',
  },
  checkboxSelected: {
    backgroundColor: '#8023EB',
    borderColor: '#8023EB',
  },
  rangeContainer: {
    borderRadius: 4,
    borderColor: '#DEE1E6',
    borderWidth: 1,
    padding: 16,
    marginBottom: 32,
  },
  rangeValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  rangeText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#171A1F',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  extendedRangeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  extendedRangeText: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#171A1F',
    lineHeight: 22,
  },
  toggle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#565E6C',
  },
  toggleEnabled: {
    backgroundColor: '#8023EB',
    borderColor: '#8023EB',
  },
  languageSelector: {
    marginBottom: 32,
  },
  languageDropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
    borderColor: '#DEE1E6',
    borderWidth: 1,
  },
  languageDropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  languageIcon: {
    width: 14,
    height: 14,
  },
  languageDropdownText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#171A1F',
  },
  dropdownIcon: {
    width: 14,
    height: 14,
  },
  selectedLanguages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 13,
  },
  languageTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: '#F4EEFF',
  },
  languageTagText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#8023EB',
  },
  removeIcon: {
    width: 20,
    height: 20,
  },
  footerDivider: {
    width: '100%',
    height: 1,
    marginVertical: 24,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 20,
    marginBottom: 48,
  },
  clearButton: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
    backgroundColor: '#F5F6F7',
  },
  clearButtonText: {
    fontFamily: 'Inter',
    fontSize: 18,
    color: '#565E6C',
  },
  applyButton: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
    backgroundColor: '#8023EB',
  },
  applyButtonText: {
    fontFamily: 'Inter',
    fontSize: 18,
    color: '#FFFFFF',
  },
  bottomBar: {
    width: 160,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#DEE1E6',
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default FilterScreen;