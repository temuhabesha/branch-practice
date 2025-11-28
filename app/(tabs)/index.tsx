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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, facere corporis officiis iusto iure qui itaque adipisci. Nihil cumque id voluptatem unde nisi, repudiandae distinctio sit, quos et, corrupti quidem!
        Sed quaerat modi vel assumenda architecto ex rerum totam enim! Cupiditate veniam in repellat similique magnam. Omnis illo harum, explicabo fugiat optio similique magni, dolor provident eaque vero sed nobis.
        Ab sequi amet nisi? Assumenda nulla quibusdam doloremque praesentium. Cumque doloremque corporis provident ipsa laudantium quo beatae incidunt quod voluptatibus tempora debitis architecto quidem eligendi quae, porro itaque error atque!
        Necessitatibus minus consequuntur quos repellendus explicabo. Soluta cum facere veritatis, quis harum consectetur corporis, labore modi molestiae ipsum libero aliquid aspernatur quaerat optio vel quidem quo reprehenderit quas nobis excepturi?
        Hic optio necessitatibus ut, impedit voluptatum assumenda quidem sed nobis similique quibusdam quo sunt recusandae repellat eius, laboriosam sequi iure tempora laborum modi sint corrupti non alias, praesentium delectus! Veritatis.
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

