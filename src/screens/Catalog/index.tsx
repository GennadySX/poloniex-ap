import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {_style} from './style';
import {inject, observer} from 'mobx-react';
import {toJS} from 'mobx';
import {Table} from '../../components/Table';
import {Notifier} from '../../components/Notifier';

export type CatalogScreenType = {
  store: CatalogScreenStoreType;
};

export type CatalogScreenStoreType = {
  data: any[];
  error: boolean;
  loading: boolean;
  startFetch: () => void;
  resetFetch: () => void;
};

const CatalogScreen = (props: any) => {
  const {data, error, loading, startFetch, resetFetch} = props.store;

  useEffect(() => {
    startFetch();
    const inter = setInterval(() => startFetch(), 5000);
    return () => {
      clearInterval(inter);
      resetFetch();
    };
  }, [resetFetch, startFetch]);

  return (
    <View style={_style.block}>
      <Notifier type={'danger'} active={error} />
      {!data.length && loading ? (
        <ActivityIndicator size={'large'} color={'#454147'} />
      ) : (
        <Table data={toJS(data)} />
      )}
    </View>
  );
};

export default inject('store')(observer(CatalogScreen));
