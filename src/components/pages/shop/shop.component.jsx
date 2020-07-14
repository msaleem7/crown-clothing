import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:routeName`} component={CollectionPage} />
  </div>
);

export default ShopPage;
