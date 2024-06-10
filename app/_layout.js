import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashCreen from 'expo-splash-screen';

SplashCreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async ()=> {
        if (fontsLoaded) {
            await SplashCreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;