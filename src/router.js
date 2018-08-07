import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene
              key="login"
              component={LoginForm}
              title="Please Log In"
              initial
            />
          </Scene>
          <Scene key="main">
            <Scene
              key="employeeList"
              rightTitle="Add"
              onRight={() => Actions.employeeCreate()}
              component={EmployeeList}
              title="Employees"
              initial
            />
            <Scene
              key="employeeCreate"
              component={EmployeeCreate}
              title="Create Employee"
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
