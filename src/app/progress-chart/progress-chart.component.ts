import { Component } from '@angular/core';
import { Chart, registerables, Colors } from 'chart.js';


@Component({
  selector: 'app-progress-chart',
  templateUrl: './progress-chart.component.html',
  styleUrls: ['./progress-chart.component.scss']
})
export class ProgressChartComponent {
  public chart: any;
  width:any; 
  height:any;  
  gradient:any; 

  constructor() {
    Chart.register(...registerables);
}

  createChart(){
    
    

    Chart.defaults.backgroundColor = '#99CC33';
    Chart.defaults.color = '#fff';
    Chart.defaults.borderColor = 'rgba(0, 0, 0, 0.1)';
 
    this.chart = new Chart("userChartCanvas", {
      
      type: 'bar', //this denotes tha type of chart

      
      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: Chart.defaults.backgroundColor,
            
          } 
        ]
      },
      options: {
        aspectRatio:2.5,
        responsive: true,
        devicePixelRatio: 4,


      }
      
    });
  }
 


  ngAfterViewInit() {
    this.createChart();
  }

}
