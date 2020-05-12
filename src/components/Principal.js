import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


import Conversas from './Conversas';
import Contatos from './Contatos';
import TabBarMenu from './TabBarMenu';

// const initialLayout = { width: Dimensions.get('window').width };

export default function Principal() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'Conversas' },
    { key: '2', title: 'Contatos' },
  ]);

  const renderTabBar = props => (
    <TabBarMenu
      {...props}
      // indicatorStyle={{ backgroundColor: 'white' }}
      // style={{ backgroundColor: 'pink' }}
    />
  )
  
  const renderScene = SceneMap({
    1: Conversas,
    2: Contatos,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      // initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});