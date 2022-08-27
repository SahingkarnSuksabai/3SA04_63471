import React from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Suratthani', code: '84140' },
    { place: 'Samutprakan', code: '10540' },
    { place: 'Chaingmai', code: '50220' },
    { place: 'Khonkaen', code: '40150' },
    { place: 'Ranong', code: '85000' },
    { place: 'Yala', code: '95000' },
    { place: 'Pattani', code: '94230' },
    { place: 'Naratiwat', code: '96000' },
    { place: 'Loey', code: '42000' },
    { place: 'Sukothai', code: '64000' },
    { place: 'Saraburi', code: '18000' },
    { place: 'Roi Et', code: '45000' },
    { place: 'Surin', code: '32000' },
    { place: 'Satun', code: '91000' },
    { place: 'Kabi', code: '81000' },
    { place: 'Chumphon', code: '86000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate("Weather", {zipCode: code})
    }}>
        <View style= {style.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>

)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
            data = {availableZipItems}
            key = {_keyExtractor}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        <StatusBar styte="auto" />
        </View>  
    )
}

const style = StyleSheet.create(
    {
      zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      zipPlace: {
        flex: 1,
      },
      zipCode: {
        flex: 1,
      }
    }
  ) 