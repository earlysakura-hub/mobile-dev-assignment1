import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Alert,
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const stories: { title: string; image: ImageSourcePropType }[] = [
  { title: '👑👑👑', image: require('../../assets/images/story_1.jpg') },
  { title: '#ShareWith...', image: require('../../assets/images/story_2.jpg') },
  { title: 'SBS 🖤', image: require('../../assets/images/story_3.jpg') },
  { title: 'Made Us ✨', image: require('../../assets/images/story_4.jpg') },
  { title: 'Climate', image: require('../../assets/images/story_5.jpg') },
];

const posts: ImageSourcePropType[] = [
  require('../../assets/images/post_1.jpg'),
  require('../../assets/images/post_2.jpg'),
  require('../../assets/images/post_3.jpg'),
  require('../../assets/images/post_4.jpg'),
  require('../../assets/images/post_5.jpg'),
  require('../../assets/images/post_6.jpg'),
];

function Stat({ number, caption }: { number: string; caption: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statCaption}>{caption}</Text>
    </View>
  );
}

export default function InstagramProfile() {
  const { width } = useWindowDimensions();
  const postSize = Math.floor((width - 12) / 3); 

  function showAssignmentAlert() {
    Alert.alert('Alert Button pressed');
  }

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <StatusBar style="dark" />

      
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={26} color="#161616" accessibilityLabel="Back" />
        <View style={styles.headerTitleGroup}>
          <Text style={styles.headerTitle}>instagram</Text>
          <Ionicons name="checkmark-circle" size={16} color="#3897F0" />
        </View>
        <View style={styles.headerRight}>
          <Ionicons name="notifications-outline" size={23} color="#161616" />
          <Ionicons name="ellipsis-horizontal" size={24} color="#161616" />
        </View>
      </View>

      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        
        <View style={styles.profileRow}>
          <Image
            source={require('../../assets/images/instagram_logo.png')}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <View style={styles.statsRow}>
            <Stat number="7,041" caption="投稿" />
            <Stat number="4.6億" caption="フォロワー" />
            <Stat number="99" caption="フォロー中" />
          </View>
        </View>

        
        <View style={styles.biography}>
          <Text style={styles.profileName}>Instagram</Text>
          <Text style={styles.profileHashtag}>#YoursToMake</Text>
          <Text style={styles.profileLink}>help.instagram.com</Text>
        </View>

        
        <View style={styles.profileActions}>
          <View style={[styles.profileAction, styles.followAction]}>
            <Text style={styles.profileActionText}>フォロー中⌄</Text>
          </View>
          <View style={[styles.profileAction, styles.messageAction]}>
            <Text style={styles.profileActionText}>メッセージ</Text>
          </View>
          <View style={[styles.profileAction, styles.moreAction]}>
            <Ionicons name="chevron-down" size={18} color="#222" />
          </View>
        </View>

        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContent}
          style={styles.stories}
        >
          {stories.map((story, index) => (
            <View key={index} style={styles.story}>
              <View style={styles.storyRing}>
                <Image source={story.image} style={styles.storyImage} resizeMode="cover" />
              </View>
              <Text style={styles.storyCaption} numberOfLines={1}>{story.title}</Text>
            </View>
          ))}
        </ScrollView>

        
        <View style={styles.profileTabs}>
          <View style={[styles.profileTab, styles.selectedTab]}>
            <Ionicons name="grid-outline" size={23} color="#171717" />
          </View>
          <View style={styles.profileTab}>
            <Ionicons name="film-outline" size={23} color="#777" />
          </View>
          <View style={styles.profileTab}>
            <Ionicons name="play-outline" size={25} color="#777" />
          </View>
          <View style={styles.profileTab}>
            <Ionicons name="book-outline" size={23} color="#777" />
          </View>
          <View style={styles.profileTab}>
            <Ionicons name="sparkles-outline" size={23} color="#777" />
          </View>
          <View style={styles.profileTab}>
            <Ionicons name="person-circle-outline" size={23} color="#777" />
          </View>
        </View>

        
        <View style={styles.postsGrid}>
          {posts.map((source, index) => (
            <Image
              key={index}
              source={source}
              style={{ width: postSize, height: postSize }}
              resizeMode="cover"
              accessibilityLabel={`Instagram photo ${index + 1}`}
            />
          ))}
        </View>
      </ScrollView>

      
      <View style={styles.bottomNavigation}>
        <Ionicons name="home" size={25} color="#111" />
        <Ionicons name="search-outline" size={27} color="#111" />
        <Ionicons name="play-circle-outline" size={27} color="#111" />
        <Ionicons name="bag-handle-outline" size={25} color="#111" />
        <Ionicons name="person-circle-outline" size={27} color="#d5487a" />
      </View>

      
      <View style={styles.assignmentFooter}>
        <Pressable
          onPress={showAssignmentAlert}
          style={({ pressed }) => [styles.alertButton, pressed && styles.alertButtonPressed]}
          accessibilityRole="button"
          accessibilityLabel="Alert"
        >
          <Text style={styles.alertButtonText}>Alert</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  header: {
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f1f1f1',
  },
  headerTitleGroup: {
    position: 'absolute', left: 0, right: 0, alignItems: 'center',
    justifyContent: 'center', flexDirection: 'row', pointerEvents: 'none',
  },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#161616', marginRight: 5 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 20 },
  scrollArea: { flex: 1 },
  profileRow: {
    paddingHorizontal: 15, paddingTop: 16, paddingBottom: 8,
    flexDirection: 'row', alignItems: 'center',
  },
  profileImage: { height: 74, width: 74, marginRight: 15 },
  statsRow: { flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  stat: { alignItems: 'center', minWidth: 68 },
  statNumber: { fontSize: 17, color: '#181818', fontWeight: '700' },
  statCaption: { fontSize: 12, fontWeight: '500', color: '#353535', marginTop: 2 },
  biography: { paddingHorizontal: 15, marginTop: 2, marginBottom: 10 },
  profileName: { fontSize: 13, fontWeight: '700', color: '#171717', lineHeight: 18 },
  profileHashtag: { fontSize: 13, color: '#42678b', fontWeight: '500', lineHeight: 18 },
  profileLink: { fontSize: 13, color: '#42678b', fontWeight: '500', lineHeight: 18 },
  profileActions: {
    flexDirection: 'row', gap: 6, marginHorizontal: 13, marginBottom: 13,
  },
  profileAction: {
    height: 34, borderRadius: 5, borderColor: '#dedede', borderWidth: 1,
    alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',
  },
  followAction: { flex: 1 },
  messageAction: { flex: 1 },
  moreAction: { width: 36 },
  profileActionText: { fontSize: 12, color: '#1c1c1c', fontWeight: '700' },
  stories: { marginBottom: 8 },
  storiesContent: { paddingHorizontal: 10, gap: 8 },
  story: { width: 72, alignItems: 'center' },
  storyRing: {
    width: 63, height: 63, borderWidth: 2, borderColor: '#c84993',
    borderRadius: 34, padding: 2, alignItems: 'center', justifyContent: 'center',
  },
  storyImage: { width: 55, height: 55, borderRadius: 28 },
  storyCaption: { color: '#222', textAlign: 'center', marginTop: 4, fontSize: 10.5, width: 72 },
  profileTabs: {
    flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between',
    height: 43, borderBottomColor: '#ddd', borderBottomWidth: StyleSheet.hairlineWidth,
  },
  profileTab: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  selectedTab: { borderBottomColor: '#232323', borderBottomWidth: 1.5 },
  postsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-start' },
  bottomNavigation: {
    height: 49, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',
    backgroundColor: '#fff', borderTopColor: '#e9e9e9', borderTopWidth: StyleSheet.hairlineWidth,
  },
  assignmentFooter: { paddingHorizontal: 13, paddingTop: 7, paddingBottom: 5, backgroundColor: '#fff' },
  alertButton: {
    height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0095f6',
    borderRadius: 8,
  },
  alertButtonPressed: { backgroundColor: '#0069b6' },
  alertButtonText: { fontSize: 15, fontWeight: '700', color: '#fff' },
});
