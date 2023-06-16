import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: any = {
    title: '',
    description: '',
    image_url: '',
    author: ''
  };

  constructor(private dataService: DataService, private router: Router){}

  submitForm() {
    this.dataService.addBook(this.book).subscribe(
      (response: any) => {
        console.log('Książka została dodana:', response);
      },
      (error: any) => {
        console.error('Błąd podczas dodawania książki:', error);
      }
    );
    this.router.navigate(['/home'])
  }
}
