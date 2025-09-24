import { expenseAPI, directApi } from '@/services/api';

class ExpenseService {
  // Function to add a new expense
  static async addExpense(expenseData) {
    try {
      try {
        const response = await expenseAPI.create(expenseData);
        return response.data;
      } catch (proxyError) {
        const response = await directApi.post('/expenses', expenseData);
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        throw new Error(error.response.data.message || 'Failed to add expense');
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error; // Re-throw the error for components to handle further
    }
  }

  // Function to fetch all expenses
  static async getAllExpenses() {
    try {
      try {
        const response = await expenseAPI.getAll();
        return response.data;
      } catch (proxyError) {
        const response = await directApi.get('/expenses');
        return response.data;
      }
    } catch (error) {
      console.error('Error fetching expenses:', error.message);
      throw error;
    }
  }

  // Function to update an expense by ID
  static async updateExpense(id, expenseData) {
    try {
      try {
        const response = await expenseAPI.update(id, expenseData);
        return response.data;
      } catch (proxyError) {
        const response = await directApi.put(`/expenses/${id}`, expenseData);
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        throw new Error(error.response.data.message || 'Failed to update expense');
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
  }

  // Function to delete an expense by ID
  static async deleteExpense(id) {
    try {
      try {
        const response = await expenseAPI.delete(id);
        return response.data;
      } catch (proxyError) {
        const response = await directApi.delete(`/expenses/${id}`);
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        throw new Error(error.response.data.message || 'Failed to delete expense');
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
  }
}

export default ExpenseService;
