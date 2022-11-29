import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  user:any
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getDetailes().subscribe((result:any)=>{
      console.log(result.users);
      this.user=result.users
    })
  }

}
