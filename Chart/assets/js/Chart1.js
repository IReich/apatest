function renderChart(data, labels, var_type, id_chart) {
    var ctx = document.getElementById(id_chart).getContext('2d');
    var myChart = new Chart(ctx, {
        type: var_type,
        data: {
            labels: labels,
            datasets: [{
                label: 'Diese Woche',
                data: data,
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'],
            }]
        },
    });
}


$(document).ready(function () {

    data_1 = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    labels_1 = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Sammstag"];
    var_type_1 = "bar";
    var_id_chart_1 = "Chart1";
    renderChart(data_1, labels_1, var_type_1, var_id_chart_1);

    data_2 = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    labels_2 = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    var_type_2 = 'line';
    var_id_chart_2 = "Chart2";
    renderChart(data_2, labels_2, var_type_2, var_id_chart_2);

    var_type_3 = 'pie';
    var_id_chart_3 = "Chart3";
    renderChart(data_2, labels_2, var_type_3, var_id_chart_3);
    var_type_4 = 'pie';
    var_id_chart_4 = "Chart4";
    renderChart(data_2, labels_2, var_type_4, var_id_chart_4);
    var_type_5 = 'bubble';
    var_id_chart_5 = "Chart5";
    renderChart(data_2, labels_2, var_type_5, var_id_chart_5);
    console.log("document loaded");
});

$("#renderBtn").click(
    function () {
        console.log("button is clicked");
    }
);
