import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  InsuranceData:Insurance[]=[
    {'name':'E-Card',
      'body':'Get e-card for you & your family members',
        // 'photo': 'src="https://www.medibuddy.in/assets/services/insurance/ecard.svg"'
  }, 

        {'name':'Claims',
        'body':'Track your claim in real time',
         
          
  
    },
    {'name':'Plan Hospitalization',
        'body':'Plan & intimate hosptalization at trusted hospitals',
         
          
  
    },
    {'name':'Network Hospital',
    'body':'Search for the nearest network hospital to go cashless',
     
      

}
  
]

  constructor() { }

  ngOnInit(): void {
  }

}
export class Insurance{
  name!:string;
  body!:string;
  // photo!:string;
}
