import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';

const Homepage = () => {
  return (
    <View>
      <ScrollView>
        <Image source={require('../Asset/fishon.png')} style={styles.image} />
        <Text style={styles.title}>FishON</Text>
        <View style={styles.container}>
          <Text style={{textAlign: 'justify', color: '#000', margin: 20}}>
            Selamat datang di Pancing DIY, teman setia para pemancing di Daerah
            Istimewa Yogyakarta! Aplikasi ini dirancang khusus untuk memudahkan
            Anda menemukan lokasi pemancingan terbaik di sekitar DIY. Dengan
            Pancing DIY, pengalaman memancing Anda akan semakin seru dan penuh
            petualangan.
          </Text>
        </View>
        <View style={styles.container}>
            <Text style={{textAlign: 'center', color: '#000000', margin: 5, fontSize: 20}}>
                Fun Fact Memancing
            </Text>
        <View style={styles.container2}>
          <View style={styles.column1}>
            <Text style={{textAlign: 'left', color: '#000', margin: 10, fontSize: 13}}>
            Memancing dapat membantu mengurangi stres dan meningkatkan kesehatan mental. Suara air, keheningan sekitar, dan fokus pada kegiatan memancing dapat memberikan efek relaksasi.
            </Text>
          </View>
          <View style={styles.column2}>
            <Text style={{textAlign: 'left', color: '#000', margin: 10, fontSize: 13}}>Memancing adalah salah satu olahraga yang paling banyak diikuti di dunia. Selain menjadi kegiatan rekreasi, memancing juga menjadi olahraga kompetitif dengan banyak turnamen dan even internasional.
            </Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.column1}>
            <Text style={{textAlign: 'left', color: '#000', margin: 10, fontSize: 13}}>
            Rekor dunia untuk ikan terberat yang pernah ditangkap adalah ikan marlin biru seberat 1.376 pound (sekitar 624 kilogram). Ikan ini ditangkap di faroe islands pada tahun 2016.
            </Text>
          </View>
          <View style={styles.column2}>
            <Text style={{textAlign: 'left', color: '#000', margin: 10, fontSize: 13}}>
            Ada Hari Memancing Dunia (World Fishing Day) yang dirayakan setiap tahun pada tanggal 27 Juni. Hari ini diadakan untuk mempromosikan kesadaran akan keberlanjutan sumber daya perikanan dan memancing sebagai kegiatan yang menyenangkan.
            </Text>
          </View>
        </View>
        </View>
        <View style={styles.container}>
          <Text style={{textAlign: 'center', color: '#000', margin: 5, fontSize: 20}}> Stack:</Text>
          <Text style={styles.stack}> 1. React Native</Text>
          <Text style={styles.stack}> 2. HTML</Text>
          <Text style={styles.stack}> 3. LeafletJS</Text>
          <Text style={styles.stack}> 4. Google Sheets</Text>
          <Text style={styles.stack}> 5. App Script</Text>
          <Text style={styles.stack}> 6. FontAwesome5</Text>
          <Text style={styles.stack}> 7. Github</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Homepage;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#fff',
    color: 'white',
  },
  title: {
    paddingVertical: 10,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 75,
    height: 75,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container2: {
    flexDirection: 'row',
  },
  column1: {
    flex: 1,
  },
  column2: {
    flex: 1,
  },
  stack: {
    textAlign: 'justify', color: '#000', margin: 1
  }
});
