import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items, User, ValueButton } from 'src/app/app-interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  title: string = "API Github";
  user: User = {} as User;
  items: Items[] = [];
  listName: string = "";

	constructor(
		private activatedRoute: ActivatedRoute,
    private appService: AppService,
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
    this.appService.getInfoUserByUser(user).subscribe((user: User) => {
      this.user = user;
      this.search("repos");
      this.listName = "Repository";
    });
	}

	search(type: string): void {
    this.appService.getRepositoryOrStarred(this.user.login, type).subscribe((items: Items[]) => {
      this.items = items;
    });
	}

  reciverTextSearch(text: string): void {
    if (text) {
      this.searchUser(text);
    }
  }

  reciverButtonSearch({url, name}: ValueButton): void {
    if (url) {
      this.search(url);
      this.listName = name;
    }
  }

}
