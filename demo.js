/**
 * JavaScript for charts and data visualization
 */

document.addEventListener('DOMContentLoaded', function() {
    // Chart for test case types
    const testTypeCtx = document.getElementById('testTypeChart');
    if (testTypeCtx) {
        // Get data from the data attributes
        const labels = JSON.parse(testTypeCtx.getAttribute('data-labels') || '[]');
        const data = JSON.parse(testTypeCtx.getAttribute('data-values') || '[]');
        const backgroundColor = [
            'rgba(54, 162, 235, 0.7)',   // Primary - Functional
            'rgba(75, 192, 192, 0.7)',   // Info - UI
            'rgba(255, 206, 86, 0.7)',   // Warning - Performance
            'rgba(255, 99, 132, 0.7)',   // Danger - Security
            'rgba(153, 102, 255, 0.7)'   // Other
        ];
        
        // Create the chart
        new Chart(testTypeCtx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColor,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: 'white'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Test Cases by Type',
                        color: 'white',
                        font: {
                            size: 16
                        }
                    }
                }
            }
        });
    }

    // Chart for test case priorities
    const priorityCtx = document.getElementById('priorityChart');
    if (priorityCtx) {
        // Get data from the data attributes
        const labels = JSON.parse(priorityCtx.getAttribute('data-labels') || '[]');
        const data = JSON.parse(priorityCtx.getAttribute('data-values') || '[]');
        const backgroundColor = [
            'rgba(255, 99, 132, 0.7)',   // High
            'rgba(255, 206, 86, 0.7)',   // Medium
            'rgba(75, 192, 192, 0.7)'    // Low
        ];
        
        // Create the chart
        new Chart(priorityCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Test Cases',
                    data: data,
                    backgroundColor: backgroundColor,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Test Cases by Priority',
                        color: 'white',
                        font: {
                            size: 16
                        }
                    }
                }
            }
        });
    }

    // Chart for automation status
    const automationCtx = document.getElementById('automationChart');
    if (automationCtx) {
        // Get data from the data attributes
        const labels = JSON.parse(automationCtx.getAttribute('data-labels') || '[]');
        const data = JSON.parse(automationCtx.getAttribute('data-values') || '[]');
        const backgroundColor = [
            'rgba(54, 162, 235, 0.7)',   // Automated
            'rgba(255, 159, 64, 0.7)'    // Manual
        ];
        
        // Create the chart
        new Chart(automationCtx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColor,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: 'white'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Automation Status',
                        color: 'white',
                        font: {
                            size: 16
                        }
                    }
                }
            }
        });
    }

    // Chart for test coverage over time
    const coverageCtx = document.getElementById('coverageChart');
    if (coverageCtx) {
        // Get data from the data attributes
        const labels = JSON.parse(coverageCtx.getAttribute('data-labels') || '[]');
        const data = JSON.parse(coverageCtx.getAttribute('data-values') || '[]');
        
        // Create the chart
        new Chart(coverageCtx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Test Coverage (%)',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Test Coverage Trend',
                        color: 'white',
                        font: {
                            size: 16
                        }
                    }
                }
            }
        });
    }
});