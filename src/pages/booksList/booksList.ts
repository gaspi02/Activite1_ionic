import { Component } from '@angular/core';
import {MenuController, ModalController} from "ionic-angular";
import {BooksService} from "../../services/books.service";
import {Book} from "../../models/Book";
import {LendBookPage} from "./lend-book/lend-book";


@Component({
  selector: 'page-livres',
  templateUrl: 'booksList.html',
})
export class BookListPage {

  booksList: Book[];

  constructor(private modalCtrl: ModalController,
              private booksService: BooksService,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.booksList = this.booksService.booksList.slice();
  }


  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }
  onToggleMenu(){
    this.menuCtrl.open();
  }
}
