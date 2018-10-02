import { Component, OnInit } from '@angular/core';
 
 @Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

})
export class HeroesComponent implements OnInit {
     public data : any;
      public user: any;
   
 cardImage='assets/image/7013751-beautiful-forest.jpg';
 
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  stdTitle='Students';
students=['a','b','c','d','e','f'];
  constructor( ) { this.user={
 name: 'This is Member List',
 address:'Best Members',
 phone:['1234','5678','12345','12345678']
 };
   
 }


  
  ngOnInit() {
   
  this.data = [{'name':'Anil', 'anil.singh581@gmail.com' :'ssd', 'age' :'34', 'city':'Noida, UP, India' },
    {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Sunil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' }
   ]

    
  }
  
   
}
 
