SET SERVEROUTPUT ON;

-- Drop and recreate tables
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Loans';
  EXECUTE IMMEDIATE 'DROP TABLE Customers';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- Create Customers table
CREATE TABLE Customers (
  CustomerID NUMBER PRIMARY KEY,
  CustomerName VARCHAR2(50),
  Age NUMBER,
  Balance NUMBER(10, 2),
  IsVIP VARCHAR2(5) DEFAULT 'FALSE'
);

-- Create Loans table
CREATE TABLE Loans (
  LoanID NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  InterestRate NUMBER(5, 2),
  DueDate DATE,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Insert sample data
INSERT INTO Customers VALUES (1, 'Amit', 65, 12000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Raj', 45, 8000, 'FALSE');
INSERT INTO Customers VALUES (3, 'Sita', 70, 20000, 'FALSE');
INSERT INTO Customers VALUES (4, 'Vijay', 30, 5000, 'FALSE');

INSERT INTO Loans VALUES (101, 1, 8.5, SYSDATE + 10);
INSERT INTO Loans VALUES (102, 2, 9.0, SYSDATE + 40);
INSERT INTO Loans VALUES (103, 3, 7.5, SYSDATE + 25);
INSERT INTO Loans VALUES (104, 4, 10.0, SYSDATE - 5);

COMMIT;

-- SCENARIO 1: Apply discount for age > 60
BEGIN
  FOR rec IN (
    SELECT l.LoanID, l.InterestRate
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE c.Age > 60
  )
  LOOP
    UPDATE Loans
    SET InterestRate = rec.InterestRate - 1
    WHERE LoanID = rec.LoanID;
  END LOOP;
  COMMIT;
END;
/

--Output after Scenario 1
BEGIN
  DBMS_OUTPUT.PUT_LINE('After Scenario 1: Loans Table');
  FOR rec IN (SELECT * FROM Loans ORDER BY LoanID) LOOP
    DBMS_OUTPUT.PUT_LINE('LoanID: ' || rec.LoanID || ', InterestRate: ' || rec.InterestRate);
  END LOOP;
END;
/

-- SCENARIO 2: Mark VIP for balance > 10000
BEGIN
  FOR rec IN (
    SELECT CustomerID FROM Customers WHERE Balance > 10000
  )
  LOOP
    UPDATE Customers
    SET IsVIP = 'TRUE'
    WHERE CustomerID = rec.CustomerID;
  END LOOP;
  COMMIT;
END;
/

-- Output after Scenario 2
BEGIN
  DBMS_OUTPUT.PUT_LINE('After Scenario 2: Customers Table');
  FOR rec IN (SELECT * FROM Customers ORDER BY CustomerID) LOOP
    DBMS_OUTPUT.PUT_LINE('ID: ' || rec.CustomerID || ', Name: ' || rec.CustomerName || ', IsVIP: ' || rec.IsVIP);
  END LOOP;
END;
/

-- SCENARIO 3: Loan due reminders
BEGIN
  DBMS_OUTPUT.PUT_LINE('Scenario 3: Loan Reminders');
  FOR rec IN (
    SELECT l.LoanID, c.CustomerName, l.DueDate
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
  )
  LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.LoanID || 
                         ' for customer ' || rec.CustomerName || 
                         ' is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/
