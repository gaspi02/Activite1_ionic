import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BookListPage} from "../pages/booksList/booksList";
import {LendBookPage} from "../pages/booksList/lend-book/lend-book";
import {CdListPage} from "../pages/cdsList/cdsList";
import {LendCdPage} from "../pages/cdsList/lend-cd/lend-cd";
import {TabsPage} from "../pages/tabs/tabs";
import {OptionsPage} from "../pages/options/options";
import {SettingsPage} from "../pages/settings/settings";
import {CdsService} from "../services/cds.service";
import {BooksService} from "../services/books.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    TabsPage,
    OptionsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    TabsPage,
    OptionsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CdsService,
    BooksService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
