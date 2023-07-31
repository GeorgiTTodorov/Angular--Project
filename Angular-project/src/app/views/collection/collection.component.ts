import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

    constructor (public articleService: ArticleService ) {

    }
  
    ngOnInit(): void {
        setTimeout(() => {

          this.articleService.fetchAllArticles();
        }, 500)
    }
}
