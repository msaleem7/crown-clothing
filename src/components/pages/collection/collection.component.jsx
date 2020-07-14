import React from 'react';

import './collection.style.scss';

import { connect } from 'react-redux';

import { selectCollection } from '../../../redux/shop/shop.selectors';

import CollectionItem from '../../collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.routeName)(state),
});

export default connect(mapStateToProps)(CollectionPage);
