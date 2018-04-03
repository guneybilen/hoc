import React from 'react';
// import requireAuth from '../src/components/require_authentication';

export default () => (
  // export Resources = () => (
  <div>
    Super Special Secret Recipe
    <ul>
      <li>1 Cup Sugar</li>
      <li>1 Cup Pepper</li>
      <li>1 Cup Salt</li>
    </ul>
  </div>
);
// export default requireAuth(Resources);

  // If we wanted every instance of Resources used 
  // in the application to require authentication,
  // instead of the route path set up in the index.js,
  //  <Route path="resources" component={requireAuth(Resources)} />
  // we would have to both the commented out import 
  // and do the following:
  // export default requireAuth(Resources);
  // 
  // and replace export the default () => ( 
  // on top with export Resources = () => (
