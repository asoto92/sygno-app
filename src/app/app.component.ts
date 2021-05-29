import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss']
  //styles: ['.container { color: blue; }']
})
export class AppComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  hello = 'hello';
  //user  = 'Alfredo';
  user = {name: 'Alfredo', email: 'alfredo@hotmail.com'};
  title = 'sygno-app';
  today = new Date();
  value = 0;

  constructor(){
    console.log('constructor');
    console.log(document);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void{
    console.log('ngOnInit');
  }

  aumentar(): void {
    this.value += 10;
  }

  disminuir(): void {
    this.value -= 10;
  }

}

