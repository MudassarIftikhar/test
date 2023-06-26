import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/EvilIcons';
import BookDetail from './bookDetail';

const items = [
  {
    id: 1,
    title: 'Title',
    discount: '10%',
    price: '57,600원',
  },
  {
    id: 2,
    title: 'Title',
    discount: '10%',
    price: '57,600원',
  },
  {
    id: 3,
    title: 'Title',
    discount: '10%',
    price: '57,600원',
  },
  {
    id: 4,
    title: 'Title',
    discount: '10%',
    price: '57,600원',
  },
  {
    id: 5,
    title: 'Title',
    discount: '10%',
    price: '57,600원',
  },
  {
    id: 6,
    title: 'Title',
    discount: '10%',
    price: '57,600원',
  },
  {
    id: 7,
    title: 'Title',
    discount: '10%',
    price: '57,600원',
  },
  {
    id: 8,
    title: 'Title',
    discount: '10%',
    price: '57,600원',
  },
];
const BookList = ({navigation}) => {
  return (
    <SafeAreaView style={{paddingBottom: 60}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>BookList</Text>
      </View>
      {/*  */}
      <ScrollView style={{backgroundColor: '#fff'}}>
        <FlatList
          numColumns={2}
          data={items}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{width: '50%', marginEnd: 4}}
              onPress={() => navigation.navigate('BookDetail')}>
              <View style={styles.itemContainer}>
                <Icons name="image" size={60} color="#808080" />
              </View>
              <Text style={styles.textTilte}>Title</Text>
              <View style={styles.itemInnerContainer}>
                <Text style={styles.textdiscount}>10%</Text>
                <Text style={styles.textPrice}>57,600원</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  itemContainer: {
    width: '100%',
    height: 220,
    backgroundColor: '#edeef3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemInnerContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    paddingEnd: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTilte: {
    marginStart: 13,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
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
  },
});
export default BookList;
