import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Article } from '../interface/article';


@Injectable({
  providedIn: 'root'
})

export class ArticleService implements OnInit{

  url = 'https://articles-db-46e7b-default-rtdb.firebaseio.com/';
  articleData: Article[] = []; 
  article: Article[] = [];

  objId: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.article = [];
  }

  fetchArticles(id: string): any {   // for user dashboard
 
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

  fetchArticleById(id: string): void {
    this.article = [];
      
      this.http.get(this.url + `articles.json`).subscribe((res) => {

        if (res) {
          const articleData = Object.values(res).find((a) => {
            return a.id === id;
        })
        
        this.article.push(articleData)
      }
          
          
    })
        
  }

  fetchAllArticles(): void{  // for browse collection 

      
      this.http.get(this.url + 'articles.json').subscribe((articles) => {
       
        if (articles) {
          const userArticles = Object.values(articles)
        
          this.articleData = userArticles;
        }
        
          
      })
  }

  deleteArticle(id: string): void{
      

      this.http.get(this.url + 'articles.json').subscribe((res) => {
          const item = Object.entries(res).find((a) => {
              return a[1].id === id;
          }); 
          
          this.objId = item?.at(0);
      });
      
      setTimeout(() => {
        this.http.delete(this.url + `articles/${this.objId}.json`).subscribe();
      }, 500);
  }

  // editArticle(): void{

  // }
}
