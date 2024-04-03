google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Lettuce', 3],
        ['Lupin', 1],
        ['Helebore', 1],
        ['Herbs', 1],
        ['Delphinium', 2]
    ]);

    var options = {
        'title': 'Plants Snails Ate In One Night',
        'width': 456,
        'height': 342,
        'backgroundColor': 'transparent'
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
