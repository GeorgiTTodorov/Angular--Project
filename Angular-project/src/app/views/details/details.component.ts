import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interface/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

    article: Article[] = [];

    constructor (private articleService: ArticleService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id']
        const articleData = this.articleService.fetchArticleById(id)
        this.article = articleData;
        
    }
}
