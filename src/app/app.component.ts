import { Component, OnDestroy, OnInit } from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'Imagegalary';
  mediaSub:Subscription;
  deviceXs:boolean;
  urls = [];
  constructor(public mediaObserver:MediaObserver){}
  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
console.log(result.mqAlias);
this.deviceXs =result.mqAlias === 'xs' ? true : false;
    });
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.splice(0,0,event.target.result); 
                }

                reader.readAsDataURL(event.target.files[i]);
        }
      }
    }
  }