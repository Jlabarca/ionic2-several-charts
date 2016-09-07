# ionic2-several-charts

Comparison between Chart.js, Highcharts, echarts and c3.js on Ionic 2 framework
showing different ways to implement external javascript libraries.

## Installation
After clone you should install npm dependencies and restore the project state
```
npm install
```

```
ionic state restore
```

c3.js, highcharts and echarts were implemented using theirs typings like

```
typings install dt~highcharts --global --save
```
chart.js was implemented using https://github.com/zyramedia/ng2-chartjs2 module.


## Testing performance
You can use this repo for some kind of performance testing on android/ios devices.
I was looking for multiple lines charts, zoom/panning,  500+ data values.

1. highcharts was the best on frames/animated performance
2. C3.js 
3. chart.js(2.2) 
4. echarts
