import pandas as pd
import matplotlib.pyplot as plt

#Read in data from csv file
data = pd.read_csv("bank_statement.csv")

#Create a dataframe of the data
df = pd.DataFrame(data)

#Calculate total deposits and withdrawals
total_deposits = df['Deposits'].sum()
total_withdrawals = df['Withdrawals'].sum()

#Calculate total balance
total_balance = total_deposits - total_withdrawals

#Calculate average deposits and withdrawals
avg_deposits = total_deposits / df.shape[0]
avg_withdrawals = total_withdrawals / df.shape[0]

#Calculate maximum and minimum deposits and withdrawals
max_deposit = df['Deposits'].max()
min_deposit = df['Deposits'].min()
max_withdrawal = df['Withdrawals'].max()
min_withdrawal = df['Withdrawals'].min()

#Calculate the number of transactions
num_transactions = df.shape[0]

#Print the results
print("Total Deposits: ", total_deposits)
print("Total Withdrawals: ", total_withdrawals)
print("Total Balance: ", total_balance)
print("Average Deposits: ", avg_deposits)
print("Average Withdrawals: ", avg_withdrawals)
print("Max Deposit: ", max_deposit)
print("Min Deposit: ", min_deposit)
print("Max Withdrawal: ", max_withdrawal)
print("Min Withdrawal: ", min_withdrawal)
print("Number of Transactions: ", num_transactions)

#Create a bar chart to visualize the data
plt.bar(['Deposits', 'Withdrawals'], [total_deposits, total_withdrawals])
plt.title('Total Deposits and Withdrawals')
plt.xlabel('Type')
plt.ylabel('Amount')
plt.show()
