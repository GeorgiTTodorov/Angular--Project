import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
    user: string | null = ''

    constructor (public articleService: ArticleService, private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService, private elRef: ElementRef) {}

    get isOwner(): boolean {
      this.user = localStorage.getItem('user');

      if (this.user) {
          const {name, id} = JSON.parse(this.user);
          return this.elRef.nativeElement.querySelector('.article').id === id;
      }
      
      return false;
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
      
      setTimeout(() => {
        this.router.navigate(['/dashboard'])
      }, 600)
        
    }
}
