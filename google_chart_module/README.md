How to use this module
=================

```javascript

    google_chart_module.addChart({
        'element': 'chart1',
        'columns': [
            {
                type: 'number',
                value: 'X'
            },
            {
                type: 'number',
                value: 'Dogs'
            }
        ],
        'options': {
            width: 500,
            height: 100,
            hAxis: {
                title: 'Time'
            },
            vAxis: {
                title: 'Popularity'
            }
        },
        'data': [
            [0, 0],   [1, 10],  [2, 23],
            [3, 17],  [4, 18],  [5, 9],
            [6, 11],  [7, 27],  [8, 33],
            [9, 40],  [10, 32], [11, 35],
            [12, 30], [13, 40], [14, 42],
            [15, 47], [16, 44], [17, 48],
            [18, 52], [19, 54], [20, 42],
            [21, 55], [22, 56], [23, 57],
            [24, 60], [25, 50], [26, 52],
        ]
    });

    google_chart_module.addChart({
        'element': 'chart2',
        'columns': [
            {
                type: 'number',
                value: 'X'
            },
            {
                type: 'number',
                value: 'Cats'
            }
        ],
        'options': {
            width: 500,
            height: 100,
            hAxis: {
                title: 'Time'
            },
            vAxis: {
                title: 'Popularity'
            }
        },
        'data': [
            [0, 0],   [1, 10],  [2, 23],
            [3, 17],  [4, 18],  [5, 9]
        ]
    });

    google_chart_module.init();

    setTimeout(function() { 
        google_chart_module.updateChart('chart1', [
            [0, 0],   [1, 10],  [2, 23]
        ]);
    }, 3000);

```