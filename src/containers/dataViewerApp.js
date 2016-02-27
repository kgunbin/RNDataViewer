import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as appActions from '../actions/activitiesActions';
import Activities from '../components/activities';

class DataViewerApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {state, actions} = this.props;
    return (
      <Activities

        {...this.props.actions}
      />
    );
  }
}

export default connect(
  (state) => ({
      state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
  })
)(DataViewerApp)
