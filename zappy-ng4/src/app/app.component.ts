import { Component ,OnInit} from '@angular/core';
import { DataService } from './data.service';
// import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  posts: Array<any>;
  count :Number;


  constructor(
    private _dataService: DataService,
  //  private socket: Socket
  ) {


    }

ngOnInit(){

  this._dataService.getPosts().subscribe(res => {
    this.posts = res
    this.count=this.posts.length;
    // for (let index in this.posts){
    //   console.log((new Date(this.posts[index].tweeted_at)).getTime());
    // }
  });


}
}
