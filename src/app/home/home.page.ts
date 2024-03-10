import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PostService } from '../service/post/post.service';
import { finalize, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  private postService = inject(PostService);
  private hasLoaded = false;
  constructor() {
      this.loadPost();
  }



  loadPost(){
    this.postService.getPosts().subscribe((result)=>{
       console.log(result);
    })
    // .pipe(
    //   finalize(() => {
    //     this.hasLoaded= true;
    //   }),
    //   map(result=>{

    //   })

    // )
    // .subscribe
    // ( {
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (error) => {
    //     //console.log(error);
    //   },
    //   complete: () => {
    //     console.log('completes');
    //   }
    // })
  }


}

