var google_chart_module = (function() {

    google.load('visualization', '1', { packages: ['corechart'] });

    var charts = [];

    var defaultOptions = {
        width: 500,
        height: 300,
        animation:{
            duration: 500,
            easing: 'linear',
        },
        hAxis: {
            title: 'Time'
        },
        vAxis: {
            title: 'Popularity'
        }
    };

    /**
    * Very basic check for passed configuration options
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
    * Creates an array containing the needed data tables and set it´s columns
    */
    function createDataTables() {
        for (var chart in charts) {
            var data = new google.visualization.DataTable();

            charts[chart].dataTable = data;
        }
    }

    /**
    * Set the data tables columns and fill them with the given data.
    */
    function setDataTablesColumns(dataTables) {
        for (var chart in charts) {
            for (var columns in charts[chart].columns) {
                var type = charts[chart].columns[columns].type;
                var value = charts[chart].columns[columns].value;

                charts[chart].dataTable.addColumn( type, value );
            }
        }
    }

    /**
    * Set the data tables rows and fill them with the given data.
    */
    function setDataTablesRows(dataTables) {
        for (var chart in charts) {
            var data = charts[chart].data;

            charts[chart].dataTable.addRows(data);
        }
    }

    /**
    * Sets the charts instances.
    */
    function initCharts(dataTables) {
        for (var chart in charts) {
            var element = document.getElementById(charts[chart].element);

            charts[chart].instance = new google.visualization.LineChart(element);
        }
    }

    /**
    * Executes the draw function from all the charts.
    */
    function drawCharts() {
        for (var chart in charts) {
            var options = charts[chart].options;
            var dataTable = charts[chart].dataTable;

            charts[chart].instance.draw(dataTable, options);
        }
    }

    return {

        addChart: function( chart ) {
            charts.push(chart);
            if ( !chart.options ){
                chart.options = defaultOptions;
            }

        },

        init: function() {
            simpleChartsConfigCheck();

            createDataTables();
            setDataTablesColumns();
            setDataTablesRows();

            initCharts();

            drawCharts();
        },

        updateChart: function(element, data, updateOptions) {
            var index;

            for (var chart in charts) {
                if (charts[chart].element === element) {
                    index = chart;
                }
            }

            if (!index) {
                console.error('No element found');
                return;
            }

            if (updateOptions){
                charts[index].options = updateOptions;
            }

            var rowsIndex = charts[index].dataTable.getNumberOfRows();

            charts[index].dataTable.removeRows(0, rowsIndex);
            charts[index].dataTable.insertRows(0, data);

            drawCharts();
        }
        
    };

})();