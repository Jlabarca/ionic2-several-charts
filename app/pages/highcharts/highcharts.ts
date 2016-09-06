import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as echarts from 'highcharts';


@Component({
  templateUrl: 'build/pages/highcharts/highcharts.html',
})
export class HighchartsPage {
  chart;
  constructor(private navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.chart = echarts.chart('container', {
                chart: {
                          zoomType: 'x'
                      },
                      title: {
                          text: 'Highcharts'
                      },
               plotOptions: {
                        line: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                credits: {
                      enabled: false
                  },
                xAxis: {
                    categories:  ['1', '2', '3', '4', '5',
                     '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
                      '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35','36']
                },

                series: [{
                    name: '5th',
                    data:[ 34.22, 35.62, 36.96, 38.16, 39.13, 39.90, 40.47, 40.92, 41.29, 41.60, 41.86, 42.10, 42.30, 42.49, 42.65, 42.80, 42.94, 43.06, 43.17, 43.28, 43.38, 43.47, 43.57, 43.68, 43.79, 43.90, 43.99, 44.08, 44.16, 44.23, 44.30, 44.37, 44.44, 44.50, 44.56, 44.62],
                },{
                    name: '10th',
                    data:[ 34.61, 36.03, 37.38, 38.60, 39.58, 40.35, 40.94, 41.39, 41.76, 42.08, 42.35, 42.58, 42.79, 42.98, 43.14, 43.29, 43.43, 43.56, 43.67, 43.78, 43.88, 43.97, 44.07, 44.18, 44.29, 44.40, 44.50, 44.59, 44.67, 44.74, 44.81, 44.88, 44.95, 45.01, 45.07, 45.13],
                },{   
                    name: '25th',
                    data:[35.24, 36.68, 38.06, 39.30, 40.30, 41.09, 41.68, 42.14, 42.52, 42.84, 43.11, 43.35, 43.57, 43.76, 43.93, 44.08, 44.22, 44.34, 44.46, 44.57, 44.67, 44.77, 44.87, 44.98, 45.09, 45.21, 45.31, 45.40, 45.48, 45.55, 45.63, 45.70, 45.76, 45.83, 45.89, 45.95],
               },{   
                    name: '50th',
                    data:[35.90, 37.37, 38.78, 40.04, 41.06, 41.86, 42.47, 42.93, 43.32, 43.64, 43.92, 44.17, 44.39, 44.58, 44.75, 44.91, 45.05, 45.18, 45.30, 45.41, 45.51, 45.61, 45.72, 45.83, 45.94, 46.06, 46.16, 46.25, 46.33, 46.41, 46.48, 46.55, 46.62, 46.69, 46.75, 46.81],
               },{   
                    name: '75th',
                    data:[36.53, 38.03, 39.46, 40.74, 41.78, 42.59, 43.21, 43.69, 44.08, 44.41, 44.69, 44.94, 45.16, 45.36, 45.54, 45.69, 45.84, 45.97, 46.09, 46.20, 46.31, 46.41, 46.52, 46.63, 46.75, 46.86, 46.97, 47.06, 47.14, 47.22, 47.30, 47.37, 47.44, 47.51, 47.57, 47.63],
               },{   
                    name: '75th',  
                    data:[37.07, 38.59, 40.04, 41.34, 42.40, 43.22, 43.85, 44.33, 44.73, 45.07, 45.35, 45.61, 45.83, 46.03, 46.21, 46.37, 46.52, 46.65, 46.77, 46.89, 46.99, 47.10, 47.20, 47.32, 47.44, 47.56, 47.66, 47.76, 47.84, 47.92, 48.00, 48.07, 48.14, 48.21, 48.28, 48.34],
               },{   
                    name: '95th',  
                    data:[37.39, 38.92, 40.38, 41.69, 42.76, 43.59, 44.22, 44.71, 45.11, 45.45, 45.74, 45.99, 46.22, 46.42, 46.60, 46.76, 46.91, 47.05, 47.17, 47.29, 47.39, 47.50, 47.60, 47.72, 47.84, 47.96, 48.07, 48.16, 48.25, 48.33, 48.40, 48.48, 48.55, 48.62, 48.69, 48.75],
               },{   
                    name: 'Juanito',  
                    data:[35.20, 37.17, 38.18, 40.04, 41.06, 41.86, 42.47, 43.93, 44.32, 43.64, 44.92, 45.17, 44.39, 44.58, 45.75, 45.91, 45.05, 45.18, 45.80, 45.41, 45.81, 45.61, 45.82, 45.83, 45.94, 46.86, 46.16, 46.85, 46.33, 46.41, 46.88, 46.55, 46.62, 48.69, 48.75, 48.81]
                }]
            });


  }



}
