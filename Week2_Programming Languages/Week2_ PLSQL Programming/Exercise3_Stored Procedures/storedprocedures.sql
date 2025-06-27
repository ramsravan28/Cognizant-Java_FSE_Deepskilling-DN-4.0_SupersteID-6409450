SET SERVEROUTPUT ON;

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Accounts';
  EXECUTE IMMEDIATE 'DROP TABLE Employee';
  EXECUTE IMMEDIATE 'DROP TABLE SavingsAccount';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- SCENARIO 1: Monthly Interest Procedure

-- Create table
CREATE TABLE SavingsAccount (
    AccountNo NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Balance NUMBER(10,2)
);

INSERT INTO SavingsAccount VALUES (101, 'Amit', 10000);
INSERT INTO SavingsAccount VALUES (102, 'Sita', 15000);
INSERT INTO SavingsAccount VALUES (103, 'Raj', 5000);
COMMIT;

-- stored procedure
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR rec IN (SELECT AccountNo, Balance FROM SavingsAccount) LOOP
    UPDATE SavingsAccount
    SET Balance = Balance + (rec.Balance * 0.01)
    WHERE AccountNo = rec.AccountNo;
  END LOOP;
  COMMIT;
END;
/

-- Run
BEGIN
  ProcessMonthlyInterest;
END;
/

-- Output after Scenario 1
BEGIN
  DBMS_OUTPUT.PUT_LINE(CHR(10) || 'After Scenario 1: SavingsAccount Table');
  FOR rec IN (SELECT * FROM SavingsAccount ORDER BY AccountNo) LOOP
    DBMS_OUTPUT.PUT_LINE(
      'AccountNo: ' || rec.AccountNo ||
      ', Name: ' || rec.CustomerName ||
      ', Balance: ' || rec.Balance
    );
  END LOOP;
END;
/

-- SCENARIO 2: Bonus for Employees

-- Create table
CREATE TABLE Employee (
    EmpID NUMBER PRIMARY KEY,
    EmpName VARCHAR2(50),
    Dept VARCHAR2(20),
    Salary NUMBER(10,2)
);


INSERT INTO Employee VALUES (1, 'Ravi', 'IT', 40000);
INSERT INTO Employee VALUES (2, 'Priya', 'HR', 35000);
INSERT INTO Employee VALUES (3, 'Manoj', 'IT', 45000);
INSERT INTO Employee VALUES (4, 'Anita', 'Finance', 30000);
COMMIT;

-- procedure to update bonus
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  p_dept IN VARCHAR2,
  p_bonus_percent IN NUMBER
) IS
BEGIN
  UPDATE Employee
  SET Salary = Salary + (Salary * p_bonus_percent / 100)
  WHERE Dept = p_dept;
  COMMIT;
END;
/

-- Run
BEGIN
  UpdateEmployeeBonus('IT', 10);  -- 10% bonus for IT dept
END;
/

-- Output after Scenario 2
BEGIN
  DBMS_OUTPUT.PUT_LINE(CHR(10) || 'After Scenario 2: Employee Table');
  FOR rec IN (SELECT * FROM Employee ORDER BY EmpID) LOOP
    DBMS_OUTPUT.PUT_LINE(
      'EmpID: ' || rec.EmpID || ', Name: ' || rec.EmpName ||
      ', Dept: ' || rec.Dept || ', Salary: ' || rec.Salary
    );
  END LOOP;
END;
/

-- SCENARIO 3: Transfer Funds

-- Create table
CREATE TABLE Accounts (
    AccountNo NUMBER PRIMARY KEY,
    HolderName VARCHAR2(50),
    Balance NUMBER(10,2)
);

INSERT INTO Accounts VALUES (201, 'Amit', 8000);
INSERT INTO Accounts VALUES (202, 'Raj', 4000);
COMMIT;

-- transfer procedure
CREATE OR REPLACE PROCEDURE TransferFunds (
  p_from_acct IN NUMBER,
  p_to_acct IN NUMBER,
  p_amount IN NUMBER
) IS
  v_balance NUMBER;
BEGIN
  SELECT Balance INTO v_balance FROM Accounts WHERE AccountNo = p_from_acct;

  IF v_balance < p_amount THEN
    DBMS_OUTPUT.PUT_LINE('Insufficient balance in source account.');
  ELSE
    UPDATE Accounts SET Balance = Balance - p_amount WHERE AccountNo = p_from_acct;
    UPDATE Accounts SET Balance = Balance + p_amount WHERE AccountNo = p_to_acct;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Transfer of ' || p_amount || ' successful from ' || p_from_acct || ' to ' || p_to_acct);
  END IF;

EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Account not found.');
END;
/

-- Run
BEGIN
  TransferFunds(201, 202, 2000);  -- Transfer ₹2000 from Amit to Raj
END;
/

-- Output after Scenario 3
BEGIN
  DBMS_OUTPUT.PUT_LINE(CHR(10) || 'After Scenario 3: Accounts Table');
  FOR rec IN (SELECT * FROM Accounts ORDER BY AccountNo) LOOP
    DBMS_OUTPUT.PUT_LINE(
      'AccountNo: ' || rec.AccountNo || ', Name: ' || rec.HolderName ||
      ', Balance: ' || rec.Balance
    );
  END LOOP;
END;
/
