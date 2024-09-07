import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { API } from 'aws-amplify';

const ExpenseListScreen = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        // Replace 'apiName' with your API name configured in Amplify
        const response = await API.get('apiName', '/expenses');
        setExpenses(response);
      } catch (error) {
        setError('Error fetching expenses');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>{item.title} - ${item.amount}</Text>
            <Button
              title="Details"
              onPress={() => navigation.navigate('ExpenseDetail', { expenseId: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  expenseItem: { padding: 16, borderBottomWidth: 1 }
});

export default ExpenseListScreen;

