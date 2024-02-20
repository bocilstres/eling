import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const Scroll = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10; // Jumlah item per halaman

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    // Simulasi pengambilan data dari sumber eksternal (misalnya, API)
    setTimeout(() => {
      const newData = Array.from({ length: limit }, (_, index) => ({
        id: page * limit + index,
        text: `Item ${page * limit + index + 1}`,
      }));
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
      setPage((prevPage) => prevPage + 1);
    }, 1000); // Waktu simulasi pengambilan data
  };

  const renderFooter = () => {
    return isLoading ? (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default Scroll;
