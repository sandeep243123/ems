package com.example.ems_backend.service.Impl;

import com.example.ems_backend.dto.EmployeeDto;
import com.example.ems_backend.entity.Employee;
import com.example.ems_backend.exception.ResourceNotFoundException;
import com.example.ems_backend.mapper.EmployeeMapper;
import com.example.ems_backend.repository.EmployeeRepository;
import com.example.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee =employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee emp=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee is not Exist with given id "+id));
        return EmployeeMapper.mapToEmployeeDto(emp);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee>li=employeeRepository.findAll();
        return li.stream()
                .map((e)->EmployeeMapper.mapToEmployeeDto(e))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto employee) {
        Employee emp=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not found"));
        emp.setFirstName(employee.getFirstName());
        emp.setLastName(employee.getLastName());
        emp.setEmail(employee.getEmail());
        Employee updatedEmp=employeeRepository.save(emp);
        return EmployeeMapper.mapToEmployeeDto(updatedEmp);
    }

    @Override
    public EmployeeDto deleteEmployee(Long id) {
        Employee emp=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee"));
        employeeRepository.deleteById(id);
        return EmployeeMapper.mapToEmployeeDto(emp);
    }
}
