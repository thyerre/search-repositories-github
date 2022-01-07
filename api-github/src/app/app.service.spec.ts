import { Items, User } from 'src/app/app-interface';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AppService]
    });
    service = TestBed.inject(AppService);
  });

  it('#getInfoUserByUser should return value from observable',
    (done: DoneFn) => {
    service.getInfoUserByUser('thyerre').subscribe(({avatar_url, name, location, html_url, login}:User) => {

      const user: User = {
        avatar_url,
        name,
        location,
        html_url,
        login
      };

      expect(user).toEqual({
        avatar_url: "https://avatars.githubusercontent.com/u/38963922?v=4",
        name: "Thyerre Rangel Morais da Silva",
        location: "Acreúna-GO",
        html_url: "https://github.com/thyerre",
        login: "thyerre"

      });

      done();
    });
  });

  it('#getRepositoryOrStarred should return value from observable',
    (done: DoneFn) => {
    service.getRepositoryOrStarred('thyerre', 'repos').subscribe((values:Items[]) => {
      expect(Array.isArray(values)).toEqual(true);
      done();
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
