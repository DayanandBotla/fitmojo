import { Component } from '@angular/core';
import { Chart, registerables, Colors } from 'chart.js';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';


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
  summaryType = 'DAILY';
  constructor(
    private apiService:ApiService,
    private userService:UserService
  ) {
    Chart.register(...registerables);
}

  createChart(summaryType,stepsSummary){

    Chart.defaults.backgroundColor = '#9c88ff';
    Chart.defaults.color = '#fff';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

    let labels = [];
    let stepsData = [];
      Object.keys(stepsSummary).forEach(time =>{
        labels.push(Number(time) + (summaryType === "DAILY" ? 1 : 0));
        stepsData.push(stepsSummary[time])
      })

    if(this.chart){
      this.chart.destroy();
    }
 
    this.chart = new Chart("userChartCanvas", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: labels, 
	       datasets: [
          {
            label: "Steps",
            data: stepsData,
            backgroundColor: Chart.defaults.backgroundColor,
          } 
        ]
      },
      options: {
        // aspectRatio:2.5,
        responsive: true,
        devicePixelRatio: 4,
      }
    });
  }

  ngOnInit(){
    this.getUserStepsSummary("DAILY")
  }
 
  getUserStepsSummary(summaryType){
    const userId = this.userService.userId;
    this.summaryType = summaryType;
    this.apiService.getUserStepsSummary({userId,summaryType}).subscribe(
      stepsSummary =>{
        this.createChart(summaryType,stepsSummary)
        
      }
    )
  }

}
