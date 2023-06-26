import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Icons from 'react-native-vector-icons/EvilIcons';
import Heart from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SubComment from './subComment';

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree', // Network image
];
const items = [
  {
    id: 1,
    image: '',
    text: 'dsfgh',
  },
  {
    id: 2,
    image: '',
    text: 'dsfgh',
  },
];

const items2 = [
  {
    id: 1,
    image: '',
    text: 'dsfgh',
  },
  {
    id: 2,
    image: '',
    text: 'dsfgh',
  },
];
// // 어머 제가 있던 테이블이 제일 반응이 좋았나보네요 우짤래미님도
// 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
// 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
// 올라온다고 하니 꼭 봐주세용~!
const BookDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.haderContainer}>
        <TouchableOpacity
          style={{flex: 1, marginStart: 10}}
          onPress={() => navigation.goBack()}>
          <IonIcons name="chevron-back" color="#000" size={20} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Book Title</Text>
      </View>
      <ScrollView style={{marginBottom: 2}}>
        <SliderBox style={styles.itemContainer} images={images} />
        {/* <View style={styles.itemContainer}>
          <Icons name="image" size={60} color="#808080" />
        </View> */}
        <Text style={styles.textTilte}>Book Tiltle</Text>
        <Text style={styles.textDiscription}>Discription of the book...</Text>
        <Text style={styles.textDiscription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <View style={styles.itemInnerContainer}>
          <Text style={styles.textdiscount}>10%</Text>
          <Text style={styles.textPrice}>57,600원</Text>
        </View>
        <FlatList
          data={items}
          renderItem={item => (
            <View style={{marginBottom: 10}}>
              <View style={styles.imageTextContainer}>
                <Image
                  style={styles.image}
                  source={require('./assets/images/man.png')}
                />
                <Text style={styles.imageText}>레이블라우스</Text>
                <IonIcons
                  style={styles.imageTick}
                  name="checkmark-circle-sharp"
                  size={20}
                  color="#01b99f"
                />
                <Text style={styles.subTitle}>라우스</Text>
                <Entypo
                  style={styles.imageThreeDot}
                  name="dots-three-horizontal"
                  color="#c8cfda"
                  size={20}
                />
              </View>
              <Text style={styles.commentText}>
                어머 제가 있던 테이블이 제일 반응이 좋았나보네요 우짤래미님도
                아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런
                제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브
                리뷰 올라온다고 하니 꼭 봐주세용~!
              </Text>
              <View
                style={{flexDirection: 'row', marginTop: 10, marginStart: 65}}>
                <Heart name="hearto" size={20} />
                <Text style={{marginStart: 5}}>5</Text>
                <Heart style={{marginStart: 15}} name="message1" size={20} />
                <Text style={{marginStart: 5}}>5</Text>
              </View>
              <FlatList data={items2} renderItem={item => <SubComment />} />
            </View>
          )}
        />
      </ScrollView>
      <View style={styles.TextInputContainer}>
        <Icons name="image" size={30} color="#808080" />
        <TextInput style={styles.txtInput} placeholder="레이블라우스" />
        <Text style={styles.btnSend}>하니</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  haderContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    color: '#000',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1.4,
  },
  itemContainer: {
    width: '100%',
    height: 500,
    backgroundColor: '#edeef3',
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTilte: {
    marginTop: 10,
    marginStart: 13,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  textDiscription: {
    marginStart: 13,
    color: '#000',
    lineHeight: 20,
  },
  itemInnerContainer: {
    textAlign: 'right',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    borderBottomColor: '#edeef3',
    borderBottomWidth: 1,
    paddingBottom: 7,
  },
  textdiscount: {
    color: 'red',
    fontSize: 15,
    fontWeight: '600',
    marginStart: 15,
  },
  textPrice: {
    fontWeight: '700',
    alignSelf: 'flex-end',
    color: '#000',
    fontSize: 18,
    marginRight: 15,
  },
  imageTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginStart: 20,
    justifyContent: 'space-between',
  },
  image: {
    height: 40,
    width: 40,
  },
  imageText: {
    marginStart: 5,
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#000',
  },
  commentText: {
    marginStart: 65,
    marginEnd: 20,
    textAlign: 'left',
  },
  subTitle: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginStart: 5,
    flex: 1,
  },
  imageTick: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginStart: 5,
  },
  imageThreeDot: {
    flex: 0.2,
    alignSelf: 'center',
  },
  TextInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingStart: 10,
    position: 'relative',
    bottom: 0,
  },
  txtInput: {
    flex: 1,
    marginTop: 5,
  },
  btnSend: {
    marginRight: 15,
    marginTop: 5,
  },
});
export default BookDetail;
