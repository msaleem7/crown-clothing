import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStart } from '../../../redux/shop/shop.actions';
import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from '../../../redux/shop/shop.selectors';

import WithSpinner from '../../with-spinner/with-spinner.component';

import CollectionsOverview from '../../collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  fetchCollectionsStart,
  match,
  isCollectionsFetching,
  isCollectionsLoaded,
}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner
            isLoading={isCollectionsFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:routeName`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
