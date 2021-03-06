import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import Colors from '../../constants/color'
import DurationBadge from '../UI/DurationBadge'

const CardListItem = ({ item }: any) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <View style={styles.cardBody}>
        <View>
          <Text style={styles.cardName}>{item.name}</Text>
          <Text style={styles.cardAddress}>{item.address}</Text>
        </View>
        <DurationBadge value={item.duration} />
      </View>
      <Text style={styles.cardPrice}>{item.price}</Text>
    </View>
  )
}
export default CardListItem

const styles = StyleSheet.create({
  card: {
    marginVertical: 16
  },
  image: {
    width: Dimensions.get('window').width / 1.5,
    aspectRatio: 4 / 3,
    borderRadius: 8,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  cardName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardAddress: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4
  },
  cardPrice: {
    color: Colors.primaryColor,
    fontWeight: '600',
    fontSize: 12,
    marginTop: 10
  },
})
