# Write your MySQL query statement below
SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE (
    SELECT COUNT(DISTINCT salary)
    FROM Employee
    WHERE salary > e.salary AND departmentId = e.departmentId
) < 3
ORDER BY d.name, e.salary DESC;