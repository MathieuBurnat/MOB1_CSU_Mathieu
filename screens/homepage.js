import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Homepage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Hello there !</Text>

        <Button
          title="More info here"
          onPress={() =>
            this.props.navigation.navigate('info')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Homepage;