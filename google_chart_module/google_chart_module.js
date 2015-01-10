var google_chart_module = (function() {

    google.load('visualization', '1', { packages: ['corechart'] });

    var charts = [];
    var dataTables = [];
    var readyCharts = [];

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
            
            dataTables.push( data );
        }
        return dataTables;
    }

    /**
    * Set the data tables columns and fill them with the given data.
    *
    */
    function setDataTablesColumns(dataTables) {
        for (var chart in charts) {

            for (var columns in charts[chart].columns) {
                var type = charts[chart].columns[columns].type;
                var value = charts[chart].columns[columns].value;

                dataTables[chart].addColumn( type, value );

            }
        }
    }

    /**
    * Set the data tables rows and fill them with the given data.
    *
    */
    function setDataTablesRows(dataTables) {
        for (var i in dataTables) {
            var d = charts[i].data;

            dataTables[i].addRows(d);

        }
    }

    function initCharts(dataTables) {
        var initializedCharts = [];

        for (var i in dataTables) {
            var e = document.getElementById(charts[i].element);

            initializedCharts.push( new google.visualization.LineChart(e) );
            
        }
        return initializedCharts;

    }

    function drawCharts(charts) {
        for (var i in charts) {
            var o = charts[i].options;
            charts[i].draw(dataTables[i], o);
        }

    }

    return {

        init: function() {
            simpleChartsConfigCheck();

            dataTables = createDataTables();
            setDataTablesColumns(dataTables);
            setDataTablesRows(dataTables);

            readyCharts = initCharts(dataTables);

            drawCharts(readyCharts);
        },

        updateChart: function(element, data) {
            var options, index;

            for (var chart in charts) {
                if (charts[chart].element === element) {
                    options = charts[chart].options;
                    index = chart;
                }
            }

            if (!options) {
                console.error('No element found');
                return;
            }

            var rowsIndex = dataTables[index].getNumberOfRows();

            dataTables[index].removeRows(0, rowsIndex);
            dataTables[index].insertRows(0, data);

            // for (var i = 0; i < data.length; i++) {                      
            //  for (var j = 0; j < data[i].length; j++) {
            //      dataTables[index].setValue(i, j, data[i][j]);
            //      console.log( i + "," + j + "," + data[i][j] );
            //  }
            // }

            drawCharts(readyCharts);
        },

        addChart: function( chart ) {
            charts.push(chart);
        }
    }

})();