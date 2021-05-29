import React from 'react';
import {FlatList} from 'react-native';
import {ItemType} from '../../types/Item';
import {TableCell} from './components/TableCell';

export type TableType = {
  data: ItemType[];
};

export const Table = React.memo(({data}: TableType) => {
  return (
    <FlatList
      keyExtractor={item => String(item.index)}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({item}) => (
        <TableCell
          style={{marginTop: item.index === 0 ? 20 : 0}}
          item={item}
          index={item.index}
        />
      )}
    />
  );
});
