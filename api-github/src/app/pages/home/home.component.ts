import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items, User, ValueButton } from 'src/app/app-interface';
import { AppService } from 'src/app/app.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  title: string = "API Github";
  error: string = '';
  user: User = {} as User;
  items: Items[] = [];
  listName: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.getUserParamUrl();
  }

  getUserParamUrl(): void {
    const user = this.activatedRoute.snapshot.paramMap.get('user');
    if (user) {
      this.searchUser(user);
    }
  }

  searchUser(user: string): void {
    this.items = [];
    this.appService.getInfoUserByUser(user).subscribe({
      next: (user: User) => {
        this.user = user;
        this.search("repos");
        this.listName = "Repository";
        this.setMetaTagUser(user);
      },
      error: () => {
        this.setError(`Não foi possível encontrar o usuário ${user}!`);
        this.user = {} as User;
      }
    }
    );
  }

  search(type: string): void {
    if (this.user.login !== undefined) {
      this.appService.getRepositoryOrStarred(this.user.login, type).subscribe({
        next: (items: Items[]) => {
          if (items.length > 0) {
            this.clearError();
            this.items = items;
          } else {
            this.setError(`Não foi encontrado repositórios para esse usuário!`);
            this.items = [];
          }
        }
      }
      );
    }
  }

  reciverTextSearch(text: string): void {
    if (text) {
      this.clearError();
      this.searchUser(text);
    }
  }

  reciverButtonSearch({ url, name }: ValueButton): void {
    if (url) {
      this.search(url);
      this.listName = name;
    }
  }

  setMetaTagUser(user: User) {
    this.titleService.setTitle(`${this.title} | ${user.name}`);
    this.metaService.addTags([
      { name: 'description', content: `github user ${user.name}` },
    ]);
  }

  clearError() {
    this.error = "";
  }

  setError(text: string) {
    this.error = text;
  }

}
