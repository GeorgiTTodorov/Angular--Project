import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{


    constructor (public articleService: ArticleService, private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {}

    get isLoggedIn(): boolean {
      return this.userService.isLoggedIn
  }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id']
        this.articleService.fetchArticleById(id) 
         
    }

    back(): void {
      window.history.back()
    }

    deletePost(id: string): void {
     
      this.articleService.deleteArticle(id)
      this.router.navigate(['/dashboard'])
        
    }
}
