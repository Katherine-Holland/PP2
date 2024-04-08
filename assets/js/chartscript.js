/* created a js file to remove code from head of HTML and place in script area of HTML body to help with load sequence*/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
/*code modified into a function, from the google charts instructions https://developers.google.com/chart/interactive/docs/quick_start*/
/**
 * Chart imported from Google.
 * Pie chart can be modified as needed to allow for
 * different types of data.
 */
function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Beans', 3],
        ['Lupin', 1],
        ['Grass', 1],
        ['Herbs', 1],
        ['Daisy', 2]
    ]);

    var options = {
      'title': 'Plants Snails Ate In One Night',
      width: '100%',
      'backgroundColor': 'transparent'
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
