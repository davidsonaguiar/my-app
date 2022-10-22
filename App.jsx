import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, View, ScrollView, StyleSheet, Text } from 'react-native';
import DATAS from './DATAS';
import ItemList from './ItemList';
import Title from './Title';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';
import Avatar from './Avatar'
import SoftSkill from './SoftSkill';

export default function App() {

  const skill = DATAS?.skills
  const listSoftSkill = DATAS?.soft_skill.map((skill, key) => <SoftSkill key={key} name={skill}/>)

  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <Title>{DATAS?.name}</Title>
        <Text style={styles.func}>{DATAS?.fun}</Text>
        <Avatar  src={DATAS?.avatar}/>
      </View>
      <View style={styles.containerInfo}>
        <Subtitle>Sobre</Subtitle>
        <Paragraph>{DATAS?.sobre}</Paragraph>
        <Subtitle>Soft Skills</Subtitle>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.containerSofSkill}>
          {listSoftSkill}
        </ScrollView>
        <Subtitle>Skills</Subtitle>
        <SafeAreaView style={{flex: 1, minHeight: 200}}>
          <FlatList 
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={skill}
            renderItem={({item}) => <ItemList name={item.name} nivel={item.nivel}/>}
            keyExtractor={item => item.id}/>
        </SafeAreaView>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  Top: {
    width: '100%',
    height: 'auto',
    paddingTop: 34,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  func: {
    paddingBottom: 8,
    fontSize: 14,
    color: '#d5d5d5',
  },
  containerInfo: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
  },
  containerSofSkill: {
    maxHeight: 40,
    marginBottom: 8,
    padding: 4,
    felx: 1,
  }
});
