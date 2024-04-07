/* created a js file to remove code from head of HTML and place in script area of HTML body to help with load sequence*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
/*code modified into a function, from the google charts instructions https://developers.google.com/chart/interactive/docs/quick_start*/
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
        'width': '90%',
        'height': '300px',
        'backgroundColor': 'transparent'
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
