import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent{


  form = this.fb.group({
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      content: ['', Validators.required],
  })

    constructor (private fb: FormBuilder, private articleService: ArticleService, private router: Router) {}

    createArticle(): void {
        if (this.form.invalid) {
            return;
        }

        const title: any = this.form.value.title;
        const imageUrl: any = this.form.value.imageUrl;
        const content: any = this.form.value.content;
        const user = localStorage.getItem('user');
        const uniqueId = new Date().getTime().toString() + Math.random().toString(36).substring(2)
        const {name, id} = JSON.parse(user!)
        
        this.articleService.createArticle({title, imageUrl, content, createdBy: id, id: uniqueId});
        this.router.navigate(['/dashboard'], );
        
    }
}
