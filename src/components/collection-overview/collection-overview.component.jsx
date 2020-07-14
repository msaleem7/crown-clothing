import React from 'react';

import './collection-overview.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({ match, collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview
        key={id}
        match={match}
        {...otherCollectionProps}
      ></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
