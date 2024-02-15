import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Scroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    // Simulasi pengambilan data dari sumber eksternal (misalnya, API)
    setTimeout(() => {
      const newData = Array.from({ length: 10 }, (_, index) => ({
        id: page * 10 + index,
        text: `Item ${page * 10 + index + 1}`,
      }));
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 1000); // Waktu simulasi pengambilan data
  };

  const renderFooter = () => {
    return isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={fetchData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});

export default Scroll;
