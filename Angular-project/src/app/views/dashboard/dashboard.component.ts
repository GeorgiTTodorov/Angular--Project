import {  Component, OnInit} from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit{
    

    constructor (public articleService: ArticleService) {}

    ngOnInit(): void {
      setTimeout(() => {
        const userId: any = localStorage.getItem('user')
        const {name, id} = JSON.parse(userId);
        
        this.articleService.fetchArticles(id) 
      }, 500)
               
    }

    

}
