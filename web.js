
const Sales = document.getElementById('salesChart');

new Chart(Sales, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug'],
    datasets: [{
      label: '# of Sales',
      data: [12, 10, 3, 15, 2, 16,20,15],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// chart for employee performance

const Employee = document.getElementById('employeeChart');

new Chart(Employee, {
  type: 'line',
  data: {
    labels: ['vamshi', 'krishna', 'guru', 'hari', 'nirajan', 'abhinav','Ram','rohit'],
    datasets: [{
      label: '# of Employee',
      data: [5, 8, 11, 18, 16, 15,20,15],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
