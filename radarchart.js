
var skills = ['Level', 'JavaScript', 'Bootstarp', 'PHP', 'Tailwind', 'CSS', 'SQL', 'OOP', 'PHP Unit Testing', 'HTML', 'Git', 'UML', 'Scrum', 'Laravel','Twig'];
var levels = [0, 6, 7, 8, 10, 7, 8, 2.7, 8.1, 5.4, 7.3, 4.4, 2.6, 1, 8];


var data = {
    labels: skills,
    datasets: [{
        label: 'Programming Skills',
        data: levels,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

var options = {
    scale: {
        ticks: {
            beginAtZero: true,
            max: 10
        }
    },
    responsive: true,
    maintainAspectRatio: false
};

var ctx = document.getElementById('radar-chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});


