import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
class Usuario{
 
  user?:String;
  pass?:String;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios :  Usuario[]=[];
  model: any={};
  constructor(private route:Router){} 
  go(){

  this.route.navigate(['/a']); // navigate to other page
 
}
  value = '';
  value1 = '';
  
  ngOnInit(): void {
    this.usuarios=[{
      user:'Alvaro',
      pass:'Alva',
    },
    {
      user:'Dana',
      pass:'12345678',
    },
    {
      user:'David',
      pass:'123',
    }]
    
  }
  validar(){
    
    for (let i = 0; i < this.usuarios.length; i++) {
      
     if (this.usuarios[i].user == this.value && this.usuarios[i].pass == this.value1) {
       alert("Bienvenido:"+this.value);
      this.go();
       break;
     }else{
      console.log("No esta en la pocision: "+i)
      
     }
      
    }

  }
}
