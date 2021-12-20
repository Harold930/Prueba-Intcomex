/*PRIMER CONSULTA*/

select e.first_name as nombre , s.salary from employees e join salaries s on e.emp_= s.emp_no
where s.salary = Max(s.salary);

/*SEGUNDA CONSULTA*/

select d.dept_name as departamento, SUM(s.salary) as suma from departments d join dept_emp de on 
d.dept_no = de.dept_no join employees e on de.emp_no = e.emp_no join salaries s on s.emp_no=e.emp_no
group by d.dept_name
