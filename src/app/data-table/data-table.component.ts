import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public Heading: String;
  public DataList: Array<Object>;
  public Headers: Array<String>;

  constructor() { }

  ngOnInit() {
    this.Heading = 'DT Example';
    this.Headers = ['Name', 'Age', 'Salary'];
    this.DataList = [
      {Name: 'John Smith', Age: '20', Salary: '$4000' },
      {Name: 'Johnny', Age: '22', Salary: '$3000'},
      {Name: 'Sara', Age: '24', Salary: '$3500'},
      {Name: 'Aliza', Age: '21', Salary: '$3800'},
      {Name: 'Stuart', Age: '45', Salary: '$37000'},
      {Name: 'Alex', Age: '32', Salary: '$35000'},
      {Name: 'Brayan', Age: '42', Salary: '$8700'},
      {Name: 'Alexa', Age: '19', Salary: '$240'},
    ];
  }
}
