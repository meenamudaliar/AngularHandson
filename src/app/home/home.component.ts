import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { Employee } from '../employee';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employee=[];
 
  
  constructor(private http:HttpClient,private router:Router,private dataService:DataServiceService) { }

  ngOnInit(): void {
    //this.router.navigate(['/home']);
    this.start();
  }
  start(){
    this.employee=[];
    this.dataService.getData().subscribe((resp:any)=>{
     this.employee=resp.Employee;
     console.log(this.employee);
          
     }) ;
  }
  
  }
  