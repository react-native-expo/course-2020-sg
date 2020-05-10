import * as React from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

// export const isMountedRef = React.createRef<boolean>();

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any | undefined | null) {
  // navigationRef.current?.dispatch(
  //   StackActions.push(name, params)
  // );
  navigationRef.current?.navigate(name, params);
  // if (isMountedRef.current && navigationRef.current) {
  //   // Perform navigation if the app has mounted
  //   navigationRef.current?.navigate(name, params);
  // } else {
  //   // You can decide what to do if the app hasn't mounted
  //   // You can ignore this, or add these actions to a queue you can call later
  //   console.log('Navigation Container not mounted yet');
  // }
}

// export function push(args: { name: string, params?: object | undefined}) {
//     navigationRef.current?.dispatch(StackActions.push(...args));
// }