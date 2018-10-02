import { Component, OnInit } from '@angular/core';
 import Chart from 'chart.js';
@Component({
  selector: 'app-product',

  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 name='app';
 public successClass="text-success";
 public hasError="false";
  
  constructor() { }

  ngOnInit() {
  new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {  
      datasets: [
        {
           
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    
});
  }
  
    
}
 