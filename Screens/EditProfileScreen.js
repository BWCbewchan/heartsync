import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              data-layername="chevronLeftLarge1"
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/44bce137105992818e005c05de811a51b0d0e0842832451d566f3d97f76f2396?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <View data-layername="editProfile" style={styles.editProfileText}>
            <Text style={styles.editProfileTitle}>Edit profile</Text>
          </View>
        </View>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4af739b993278a259495617219af43c7fb30fc27a5fd15a5274226ac121feab2?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
          style={styles.dividerImage}
        />
      </View>

      <View style={styles.completionContainer}>
        <View style={styles.completionTextContainer}>
          <View data-layername="profileCompletion" style={styles.completionLabel}>
            <Text>Profile completion:</Text>
          </View>
          <View data-layername="45" style={styles.completionPercentage}>
            <Text>45%</Text>
          </View>
        </View>
        <View data-layername="slider2" style={styles.sliderContainer}>
          <View data-layername="frame" style={styles.sliderFrame}>
            <View data-layername="rectangle" style={styles.sliderRectangle} />
          </View>
        </View>
      </View>

      <View style={styles.photoSectionContainer}>
        <Text style={styles.sectionTitle}>Photos</Text>
        <Text style={styles.sectionDescription}>
          The main photo is how you appear to others on the swipe view.
        </Text>
        <View style={styles.photoGrid}>
          <Image
            data-layername="image11"
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cdc7d3a5456fa096a6be72d23572b768975d183dd68349af1e91967a5c22c63?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
            style={styles.mainPhoto}
          />
          <View style={styles.smallPhotoContainer}>
            <Image
              data-layername="container9"
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e958900d11c7c088509211897ece1535cad11f45fce8f6074b59296d16d2e07f?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
              style={styles.smallPhoto}
            />
            <Image
              data-layername="container10"
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e958900d11c7c088509211897ece1535cad11f45fce8f6074b59296d16d2e07f?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
              style={styles.smallPhoto}
            />
            <Image
              data-layername="container11"
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e958900d11c7c088509211897ece1535cad11f45fce8f6074b59296d16d2e07f?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
              style={styles.smallPhoto}
            />
          </View>
          
        </View>
      </View>

      <View style={styles.aboutMeContainer}>
        <Text style={styles.sectionTitle}>About me</Text>
        <Text style={styles.sectionDescription}>
          Make it easy for others to get a sense of who you are.
        </Text>
        <View data-layername="textarea1" style={styles.textareaContainer}>
          <Text style={styles.placeholderText}>
            Share a few words about yourself, your interests, and what you're looking for in a connection...
          </Text>
          <Image
            data-layername="resizingHandle"
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e9b5d0830a0f6d444e6f10594b28906655136ac7c5cc1679b428251bd55bab4?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
            style={styles.resizeHandle}
          />
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>My details</Text>
        <View data-layername="table2" style={styles.detailsTable}>
          {[
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/51aace6dfdfdf0ca72c44663c2ac2e0fae715b87c20c964848900828fbd227db?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Occupation" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cdcc24149aa6499f990e95e685e9b15e1bb22b9b18f8db3688d70f7156921b0?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Gender & Pronouns" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/729ed538d3bb2f61a1d884121aa4db55318721987ea50b5736894ebf0252c995?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Education" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/081fc8812a77210438cf2f66213f1fc6cfa3ad9908544cb2df3871f0aa577b36?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Location", value: "NV 89104", chevron: true },
          ].map((detail, index) => (
            <View key={index} style={styles.detailRow}>
              <Image
                data-layername="frame"
                resizeMode="contain"
                source={{ uri: detail.icon }}
                style={styles.detailIcon}
              />
              <View data-layername="frame" style={styles.detailLabel}>
                <Text>{detail.label}</Text>
              </View>
              {detail.value ? (
                <View data-layername="frame" style={styles.detailValue}>
                  <View data-layername="button" style={styles.detailButton}>
                    <Text style={styles.detailButtonText}>{detail.value}</Text>
                    {detail.chevron && (
                      <Image
                        data-layername="chevronRightLarge"
                        resizeMode="contain"
                        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f15e0b8a54d4df6c1d6fa6916972d68e689878fd2a6d015b25d20cbf3c33f147?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                        style={styles.chevronIcon}
                      />
                    )}
                  </View>
                </View>
              ) : (
                <Image
                  data-layername="frame"
                  resizeMode="contain"
                  source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/55d90318-9726-4cf4-a126-b8b76c4af46c?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                  style={styles.emptyValueIcon}
                />
              )}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.additionalInfoContainer}>
        <Text style={styles.sectionTitle}>Most people also want to know:</Text>
        <View data-layername="table3" style={styles.infoTable}>
          {[
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/420dc68de77add5fa77261df874901e19c625cb349b72f760c3d27c9f3f4c0eb?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Height" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbaec878d3ec37071a878b99b108a47f456173419a9330a3f40a43c8940269d6?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Smoking" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3348060fea3f683b5c25d744c35b6c81518846269571c1df328bce5ae32eb4a2?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Drinking" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/81930a4a7fcaeb28a6104702e9771ed2407215b4ee3de926f567b9527176b556?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Pets" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57f5714929f424652daf3955c0011e64b1b117f66d0d30524164f983df392089?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Children" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0d0a36efd27a9110e60171cb8e6ef0489e03e052336ec08fa7a538ac58f7cbb?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Zodiac sign" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/457cdcbd6ed9748eeaf597f3f4a015788f0d5354a0c7946d4baf259ff4506648?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Religion" },
          ].map((info, index) => (
            <View key={index} style={styles.infoRow}>
              <Image
                data-layername="frame"
                resizeMode="contain"
                source={{ uri: info.icon }}
                style={styles.infoIcon}
              />
              <View data-layername="frame" style={styles.infoLabel}>
                <Text>{info.label}</Text>
              </View>
              <View data-layername="frame" style={styles.infoValue}>
                <Image
                  data-layername="button"
                  resizeMode="contain"
                  source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff2eb440-013b-4520-a980-45c4b41dbbca?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                  style={styles.addButton}
                />
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.interestsContainer}>
        <Text style={styles.sectionTitle}>I enjoy</Text>
        <Text style={styles.sectionDescription}>
          Adding your interest is a great way to find like-minded connections.
        </Text>
        <TouchableOpacity style={styles.dropdownButton}>
          <Text>Sci-fi movies</Text>
          <Image
            data-layername="chevronDownLarge"
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbae8e5331e3d5c236b8ac4731e263ad96ea149cc291ec452b9bbb604dfc279c?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
            style={styles.chevronIcon}
          />
        </TouchableOpacity>
        <View style={styles.interestTagsContainer}>
          {["Coffee brewing", "Trekking"].map((interest, index) => (
            <View key={index} style={styles.interestTag}>
              <View style={styles.interestTagFrame}>
                <Text style={styles.interestTagText}>{interest}</Text>
                <TouchableOpacity>
                  <Image
                    data-layername="eRemove"
                    resizeMode="contain"
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/439466167434aa381d22d7dd6006d898146e793b35ed63d06c2bc16bda525500?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                    style={styles.removeIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.languagesContainer}>
        <Text style={styles.sectionTitle}>I communicate in</Text>
        <TouchableOpacity style={styles.dropdownButton}>
          <View style={styles.languageSelection}>
            <Image
              data-layername="globe"
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d6acdac86f32d2eca3dc26b71753b55fb7b529c407bf790a643a4e1d54017f7?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
              style={styles.globeIcon}
            />
            <Text style={styles.selectedLanguage}>English</Text>
          </View>
          <Image
            data-layername="chevronDownLarge"
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9324ac780a15e50c2559e0a9ec4bf529c722de5c9cd690592e6c385756e3a48?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
            style={styles.chevronIcon}
          />
        </TouchableOpacity>
        <View style={styles.languageTag}>
          <View style={styles.languageTagFrame}>
            <Text style={styles.languageTagText}>Finnish</Text>
            <TouchableOpacity>
              <Image
                data-layername="eRemove"
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/439466167434aa381d22d7dd6006d898146e793b35ed63d06c2bc16bda525500?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" }}
                style={styles.removeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.linkedAccountsContainer}>
        <Text style={styles.sectionTitle}>Linked accounts</Text>
        <View data-layername="table4" style={styles.accountsTable}>
          {[
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd077d24034d8acb39317ec6c75c8bb590706d02aa1a032eee555859ee2193fa?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Instagram", toggleIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/72d2958d-ea48-40f8-8ab6-734fa016930d?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fc120c33347161291088315bdba9997def77bebf94fbc0bb5abcaf945c74786?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Facebook", toggleIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2117924c-7b81-4c85-a58d-237e5b83f45c?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bb88b95716340f620c7bd2559445698166833bd253f1da21ee213b7d865508c?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1", label: "Twitter", toggleIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/414c9c91-8be8-48c9-82b5-c6fde36ec516?placeholderIfAbsent=true&apiKey=d978254572924008ad3e9c2aaf8a1ff1" },
          ].map((account, index) => (
            <View key={index} style={styles.accountRow}>
              <Image
                data-layername="frame"
                resizeMode="contain"
                source={{ uri: account.icon }}
                style={styles.accountIcon}
              />
              <View data-layername="frame" style={styles.accountLabel}>
                <Text>{account.label}</Text>
              </View>
              <TouchableOpacity>
                <Image
                  data-layername="frame"
                  resizeMode="contain"
                  source={{ uri: account.toggleIcon }}
                  style={styles.toggleIcon}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.bottomBar} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    width: '100%',
  },
  headerImage: {
    width: '100%',
    aspectRatio: 9.71,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 23,
    marginLeft: 20,
    marginRight: 20,
  },
  backArrow: {
    width: 24,
    aspectRatio: 1,
  },
  editProfileText: {
    flex: 1,
    alignItems: 'center',
  },
  editProfileTitle: {
    fontFamily: 'Epilogue, sans-serif',
    fontSize: 20,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '400',
  },
  dividerImage: {
    width: '100%',
    aspectRatio: 333.33,
    marginTop: 12,
  },
  completionContainer: {
    marginTop: 23,
    paddingHorizontal: 19,
  },
  completionTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 28,
  },
  completionLabel: {
    color: 'rgba(23, 26, 31, 1)',
  },
  completionPercentage: {
    color: 'rgba(128, 35, 235, 1)',
  },
  sliderContainer: {
    marginTop: 15,
  },
  sliderFrame: {
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
  },
  sliderRectangle: {
    width: '45%',
    height: '100%',
    backgroundColor: 'rgba(128, 35, 235, 1)',
    borderRadius: 6,
  },
  photoSectionContainer: {
    marginTop: 24,
    paddingHorizontal: 19,
  },
  sectionTitle: {
    color: 'rgba(23, 26, 31, 1)',
    fontSize: 20,
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '400',
  },
  sectionDescription: {
    color: 'rgba(110, 119, 135, 1)',
    fontSize: 11,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 4,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  mainPhoto: {
    width: '62%',
    aspectRatio: 0.64,
    borderRadius: 4,
  },
  smallPhotoContainer: {
    width: '30%',
  },
  smallPhoto: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 12,
    borderRadius: 6,
  },
  widePhoto: {
    width: '100%',
    aspectRatio: 1.72,
    marginTop: 12,
    borderRadius: 4,
  },
  additionalPhoto: {
    width: '31%',
    aspectRatio: 0.64,
    marginTop: 12,
    borderRadius: 4,
  },
  aboutMeContainer: {
    marginTop: 48,
    paddingHorizontal: 19,
  },
  textareaContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 3,
    marginTop: 12,
    padding: 8,
  },
  placeholderText: {
    color: 'rgba(188, 193, 202, 1)',
    fontSize: 12,
    fontFamily: 'Inter, sans-serif',
    lineHeight: 20,
  },
  resizeHandle: {
    alignSelf: 'flex-end',
    width: 12,
    height: 12,
    marginTop: 8,
  },
  detailsContainer: {
    marginTop: 48,
    paddingHorizontal: 19,
  },
  detailsTable: {
    marginTop: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    overflow: 'hidden',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  detailIcon: {
    width: 33,
    aspectRatio: 0.75,
    marginLeft: 8,
  },
  detailLabel: {
    flex: 1,
    marginLeft: 8,
  },
  detailValue: {
    marginRight: 8,
  },
  detailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  detailButtonText: {
    color: 'rgba(144, 149, 160, 1)',
    marginRight: 5,
  },
  chevronIcon: {
    width: 16,
    height: 16,
  },
  emptyValueIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  additionalInfoContainer: {
    marginTop: 48,
    paddingHorizontal: 19,
  },
  infoTable: {
    marginTop: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  infoIcon: {
    width: 32,
    aspectRatio: 0.73,
    marginLeft: 8,
  },
  infoLabel: {
    flex: 1,
    marginLeft: 8,
  },
  infoValue: {
    marginRight: 8,
  },
  addButton: {
    width: 73,
    aspectRatio: 2.03,
  },
  interestsContainer: {
    marginTop: 48,
    paddingHorizontal: 19,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 12,
  },
  interestTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 13,
  },
  interestTag: {
    marginRight: 7,
    marginBottom: 7,
  },
  interestTagFrame: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  interestTagText: {
    color: 'rgba(50, 56, 66, 1)',
    fontSize: 12,
    fontFamily: 'Inter, sans-serif',
    marginRight: 4,
  },
  removeIcon: {
    width: 16,
    height: 16,
  },
  languagesContainer: {
    marginTop: 48,
    paddingHorizontal: 19,
  },
  languageSelection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  globeIcon: {
    width: 14,
    height: 14,
    marginRight: 6,
  },
  selectedLanguage: {
    color: 'rgba(23, 26, 31, 1)',
    fontSize: 14,
    fontFamily: 'Inter, sans-serif',
  },
  languageTag: {
    marginTop: 13,
  },
  languageTagFrame: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  languageTagText: {
    color: 'rgba(50, 56, 66, 1)',
    fontSize: 12,
    fontFamily: 'Inter, sans-serif',
    marginRight: 4,
  },
  linkedAccountsContainer: {
    marginTop: 48,
    paddingHorizontal: 19,
    marginBottom: 20,
  },
  accountsTable: {
    marginTop: 12,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  accountIcon: {
    width: 33,
    aspectRatio: 0.75,
    marginLeft: 8,
  },
  accountLabel: {
    flex: 1,
    marginLeft: 8,
  },
  toggleIcon: {
    width: 40,
    height: 24,
    marginRight: 8,
  },
  bottomBar: {
    width: 160,
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default EditProfileScreen;