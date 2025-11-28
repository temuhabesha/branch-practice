import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View>
      <Text style={style.text}>
        what's up bezu
      </Text>
    </View>
  );
}
const style = StyleSheet.create(
  {
  text:{
    color:"white",
  }
}
)

