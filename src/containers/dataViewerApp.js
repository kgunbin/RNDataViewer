import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as appActions from '../actions/activitiesActions';
import Activities from '../components/activities';

class DataViewerApp extends Component {
  render() {
    return (
      <Activities
        {...this.props}
      />
    );
  }
}

export default connect(
  (state) => ({
    activities: state.activities.data,
    selection: state.selection
  }),
  (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
  })
)(DataViewerApp)
