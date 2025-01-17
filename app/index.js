import { View, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
    const router = useRouter();


    return (
        <GestureHandlerRootView>
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
            options={{
                headerStyle:  {backgroundColor: COLORS.lightWhite },
                headerShadowVisble: false,
                headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>),
                headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>),
                headerTitle: ""
            }}
            />
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs /> 
                </View>
            </ScrollView>
        </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default Home;