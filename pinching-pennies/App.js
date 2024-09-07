import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // Ensure this path is correct
import AppNavigator from './navigation/AppNavigator';

// Configure AWS Amplify
Amplify.configure(awsconfig);

export default function App() {
  return <AppNavigator />;
}



