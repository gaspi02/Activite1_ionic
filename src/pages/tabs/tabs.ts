import {Component} from "@angular/core";
import {BookListPage} from "../booksList/booksList";
import {SettingsPage} from "../settings/settings";
import {CdListPage} from "../cdsList/cdsList";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'})

export class TabsPage{
  bookListPage = BookListPage;
  cdListPage = CdListPage;
  settingsPage = SettingsPage;
}
