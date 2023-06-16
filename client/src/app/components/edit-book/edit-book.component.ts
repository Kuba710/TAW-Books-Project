import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  book: any = {
    id: '',
    title: '',
    description: '',
    author: ''
  };

  constructor(private dataService: DataService, private router: Router){}

  ngOnInit(): void {
    const bookData = history.state.book;
    this.book.title = bookData.title;
    this.book.description = bookData.description;
    this.book.author = bookData.author;
    this.book.id = bookData.id;
  }

  submitForm() {
    this.dataService.editBook(this.book).subscribe(
      (response: any) => {
        console.log('Książka została zedytowane:', response);
      },
      (error: any) => {
        console.error('Błąd podczas edycji książki:', error);
      }
    );
    this.router.navigate(['/books'])
  }
}
