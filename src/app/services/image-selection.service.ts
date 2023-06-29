import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ImageSelectionService {

  // API URL and API Key from environment variable
  apiUrl = 'https://api.unsplash.com/photos/random';
  accessKey = environment.unsplashApiKey;

  constructor(private http: HttpClient) {}

  // Return list of random images from Unsplash API
  listImages() {
    
    // Specify HTTP Headers
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Specify HTTP Parameters
    let params = new HttpParams();
    params = params.append('client_id', this.accessKey);
    params = params.append('count', 9);
    params = params.append('orientation', 'squarish');

    // Return HTTP Request Observable
    return this.http.get(this.apiUrl, {headers, params});
    
  }

}
