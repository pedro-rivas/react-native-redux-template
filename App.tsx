import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, } from 'react-native';

import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { Header, } from 'react-native/Libraries/NewAppScreen';
import Counter from 'components/counter';

 const App = () => {

   return (
    <Provider store={store}>
      <SafeAreaView >
        <StatusBar/>
        <ScrollView>
          <Header />
            {/* COUNTER */}
            <Counter/>
        </ScrollView>
      </SafeAreaView>
    </Provider>
   );
 };


 export default App;
