import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interface/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService{

  url = 'https://articles-db-46e7b-default-rtdb.firebaseio.com/';
  articleData: Article[] = []; 

  constructor(private http: HttpClient) { }

  fetchArticles(id: string): any {
 
    this.http.get(this.url + 'articles.json').subscribe((data) => {

        if (data) {
          const userArticles = Object.values(data).filter((a) => {
            return a.createdBy === id;
        })
        
       
        this.articleData = userArticles;
        }
    })

    return this.articleData;    
}

  createArticle(article: Article): void{
      this.http.post(this.url + 'articles.json', article).subscribe((res) => {
            
      });
  }

  fetchArticleById(id: string): any {
      let article: Article[] = [];
      this.http.get(this.url + `articles.json`).subscribe((res) => {
          const articleData = Object.values(res).find((a) => {
              return a.id === id;
          })
          
          article.push(articleData)
          
      })

      return article
          
  }

  fetchAllArticles(): void{

      
      this.http.get(this.url + 'articles.json').subscribe((articles) => {
        debugger;
        if (articles) {
          const userArticles = Object.values(articles)
        
          this.articleData = userArticles;
        }
          
      })
  }

  deleteArticle(): void{

  }

  editArticle(): void{

  }
}
