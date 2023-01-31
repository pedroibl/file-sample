import pandas as pd

# read the bank statement
bank_stmt = pd.read_excel('bank_statement.xlsx')

# calculate total income
total_income = bank_stmt['Income'].sum()

# calculate total expenses
total_expenses = bank_stmt['Expenses'].sum()

# calculate total net profit
net_profit = total_income - total_expenses

# calculate average monthly income
avg_monthly_income = total_income / len(bank_stmt)

# calculate average monthly expenses
avg_monthly_expenses = total_expenses / len(bank_stmt)

# calculate average monthly net profit
avg_monthly_net_profit = net_profit / len(bank_stmt)

# print the results
print('Total income:', total_income)
print('Total expenses:', total_expenses)
print('Net profit:', net_profit)
print('Average monthly income:', avg_monthly_income)
print('Average monthly expenses:', avg_monthly_expenses)
print('Average monthly net profit:', avg_monthly_net_profit)
