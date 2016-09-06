import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {C3Page} from '../c-3/c-3';
import {ChartjsPage} from '../chartjs/chartjs';
import {HighchartsPage} from '../highcharts/highcharts';
import {EchartsPage} from '../echarts/echarts';



@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  charts;
  constructor(public navCtrl: NavController) {
      this.charts = [
        {
          Page: C3Page,
          Title: "c3.js"
        },
        {
          Page: ChartjsPage,
          Title: "chart.js"
        },
        {
          Page: HighchartsPage,
          Title: "highcharts.js"
        },
         {
          Page: EchartsPage,
          Title: "echart.js"
        }
      ];
  }

  openPage(Page){
    this.navCtrl.push(Page);
  }


}


