import { Component } from '@angular/core';
import {ChartComponent,Chart} from 'ng2-chartjs2';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/chartjs/chartjs.html',
  directives: [ChartComponent]

})

export class ChartjsPage {
 
    labels: string[] = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
    data: Chart.Dataset[] = [
      {
        label: '# of Votes',
        data: [90, 19, 3, 5, 2, 3]
      },
        {
        label: '# of Votes2',
        data: [50, 4, 3, 5, 20, 3]
      }
    ];


}