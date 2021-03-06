import React from 'react'
import { Keyboard, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../constants/color'

const LayoutView = ({ children }: any) => {

  const handleUnhandledTouches = () => {
    Keyboard.dismiss()
    return false
  }

  return (
    <SafeAreaView
      onStartShouldSetResponder={handleUnhandledTouches}
      edges={['right', 'left', 'top']}
      style={styles.container}
    >
      {children}
    </SafeAreaView>
  )
}

export default LayoutView

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
    flex: 1
  },
})
