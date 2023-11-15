import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecaptchaProvider } from './src/context/recaptcha';
import { OrgProvider } from './src/context/org';
import { AuthProvider } from './src/context/auth';
import { ClientProvider } from './src/context/client';
import { PriceListProvider } from './src/context/priceList';
import { ProductProvider } from './src/context/product';
import { StatusBar } from 'react-native';
import { CartProvider } from './src/context/cart';
import { Provider } from 'react-native-paper';
import Rc from './src/components/ReCaptchar';
import MainNavigator from './src/navigation/MainNavigator';


function App() {
  return (
    <Provider>
      <RecaptchaProvider>
        <AuthProvider>
          <OrgProvider>
            <ClientProvider>
              <ProductProvider>
                <CartProvider>
                  <PriceListProvider>
                    <NavigationContainer>
                      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
                      <Rc />
                   <MainNavigator /> 
                    </NavigationContainer>
                  </PriceListProvider>
                </CartProvider>
              </ProductProvider>
            </ClientProvider>
          </OrgProvider>
        </AuthProvider>
      </RecaptchaProvider>
    </Provider>
  );
}

export default App