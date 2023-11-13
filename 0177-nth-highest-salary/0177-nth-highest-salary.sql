CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      SELECT DISTINCT salary
      FROM (
          SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk
          FROM Employee
      ) tmp
      WHERE rnk = N
  );
END