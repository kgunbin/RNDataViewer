import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class Activities extends Component {
  render() {
    var activity = {id: 10, attributes: {title: "Title"}};

    return (
      <View style={styles.container}>
        <Text>{activity.id}</Text>
        <Text>{activity.attributes.title}</Text>
      </View > );
  }
}
