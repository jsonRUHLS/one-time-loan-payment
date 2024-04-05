import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient: HttpClient;

  constructor(@Inject(HttpClient) httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getApi() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  postApi() {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    });
  }

}
