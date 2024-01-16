import 'react-native';
import React from 'react';
import App from '../App';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import {persistor} from '../store';

const waitForReduxPersist = async () => {
  await new Promise(resolve => {
    persistor.subscribe(resolve);
    persistor.persist();
  });
};

afterAll(async () => {
  await waitForReduxPersist(); 
},10000);

it('renders correctly', () => {
  renderer.create(<App />);
});
