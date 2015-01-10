var google_chart_module = (function() {

    google.load('visualization', '1', { packages: ['corechart'] });
    // google.setOnLoadCallback(drawCharts);

    var charts = [];

    function drawCharts() {
        simpleChartsConfigCheck();

        var dataTables = createDataTables();
        setDataTablesRows(dataTables);

    }

    /**
    * Very basic check for passed configuration options
    *
    */
    function simpleChartsConfigCheck() {
        for (var chart in charts) {
            assert(charts[chart].element);
            assert(charts[chart].columns);
            assert(charts[chart].options);
            assert(charts[chart].data);
        }
    }

    function assert(condition, message) {
        if (!condition) {
            message = message || "Assertion failed";
            if (typeof Error !== "undefined") {
                throw new Error(message);
            }
            throw message; // Fallback
        }
    }

    /**
    * Creates an array containing the needed data tables and set it´s
    * columns
    *
    */
    function createDataTables(dataTables) {
        simpleChartsConfigCheck();    // We check if the charts configs are OK

        var dataTables = [];

        for (var chart in charts) {
            var data = new google.visualization.DataTable();

            for (var columns in charts[chart].columns) {
                var type = charts[chart].columns[columns].type;
                var value = charts[chart].columns[columns].value;

                data.addColumn( type, value );

            }
            dataTables.push( data );
        }
        return dataTables;
    }

    /**
    * Set the data tables rows and fill them with the given data.
    *
    */
    function setDataTablesRows(dataTables) {
        for (var i in dataTables) {
            var e = document.getElementById(charts[i].element);
            var d = charts[i].data;
            var o = charts[i].options;

            dataTables[i].addRows(d);
            var chart = new google.visualization.LineChart(e);
            chart.draw(dataTables[i], o);

        }
    }

    return {

        init: function() {
            drawCharts();
        },

        addChart: function( chart ) {
            charts.push(chart);
        }
    }

})();