import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interface/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService{

  url = 'https://articles-db-46e7b-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }


  createArticle(article: Article): void{
      this.http.post(this.url + 'articles.json', article).subscribe((res) => {
          console.log(res);   
      });
  }

  fetchArticles(): void{

  }

  fetchAllArticles(): void{
      this.http.get(this.url + 'articles').subscribe((articles) => {
          console.log(articles);
          
      })
  }

  deleteArticle(): void{

  }

  editArticle(): void{

  }
}
