import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class PrakiraanCuaca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
  + this.state.city +
  '&appid=aecc488ed157362b92a0a4948331ddb9&units=metric';
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
}
    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.head}>
          <Text style={styles.textHead} >
          Cuaca Now </Text>
        </View>
        <View style={styles.sider}>
          <View style={styles.inputan}>
            <TextInput
            style={styles.isian}
            placeholder="Masukkan Nama Kota"
            onChangeText={(city) => this.setState({ city })}
            />
            <Button

              onPress={() => this.getWeather()}
              title="PROSES"
              accessibilityLabel="Klik untuk menghitung"
            />
          </View>
          <View style={styles.hasil}>
            <Text style={{ padding: 10, fontSize: 15, color: 'white' }} >
            {this.state.city} {'\n'}
           Suhu{'\t'}{'\t'}{'\t'}: {this.state.forecast.temp} {'\n'}
           Cuaca{'\t'}{'\t'}: {this.state.forecast.main} {'\n'}
           Deskripsi{'\t'}: {this.state.forecast.description}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textFooter} >
          Fakultas Teknik dan Kejuruan</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  head: {
    flex: 0.4, //
    backgroundColor: '#0091EA',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',

  },
  sider: {
    backgroundColor: '#B2EBF2',
    flex: 5,
  },

  footer: {
    flex: 0.4, // lebar box lebih besar dari 2
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHead: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  textFooter: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputan: {
    backgroundColor: 'black',
    flex: 1.5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hasil: {
    backgroundColor: 'black',
    flex: 4,
    margin: 10,
  },
  isian: {
    backgroundColor: 'gray',
    width: 200,
    padding: 10,
    margin: 15,
  },
});
