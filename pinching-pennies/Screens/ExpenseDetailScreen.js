import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { API } from 'aws-amplify';

const ExpenseDetailScreen = ({ route }) => {
  const { expenseId } = route.params;
  const [expense, setExpense] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        const response = await API.get('apiName', `/expenses/${expenseId}`);
        setExpense(response);
      } catch (error) {
        setError('Error fetching expense details');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenseData();
  }, [expenseId]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      {expense ? (
        <>
          <Text style={styles.title}>{expense.title}</Text>
          <Text style={styles.amount}>Amount: ${expense.amount}</Text>
          <Text style={styles.description}>Description: {expense.description}</Text>
        </>
      ) : (
        <Text>Expense not found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  amount: { fontSize: 18, marginBottom: 8 },
  description: { fontSize: 16 }
});

export default ExpenseDetailScreen;
