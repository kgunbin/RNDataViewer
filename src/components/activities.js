import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  },
  selected: {
    backgroundColor: 'blue'
  }
});

var dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, });

export default class Activities extends Component {
  constructor(props) {
    super(props);
  }

  _selectRow = (id) => {
    this.props.actions.select(id);
  };

  renderActivity = (activity, section, id) => {
    return (
      <TouchableHighlight onPress={() => this._selectRow(id)}>
        <View style={[styles.container, this.props.selection.indexOf(id) > -1 && styles.selected]}>
          <Text>{activity.id}</Text>
          <Text>{activity.attributes.title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    data = dataSource.cloneWithRows(this.props.activities);

    return (
      <ListView
        dataSource={data}
        renderRow={this.renderActivity}
        style={styles.listView}
      />
    )
  }
}
