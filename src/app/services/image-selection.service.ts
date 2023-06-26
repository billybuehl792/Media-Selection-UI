import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ImageSelectionService {

  apiUrl = 'https://api.unsplash.com/photos/random';
  accessKey = 'yhlIDa_YF_C3mflNKK8I_4umJSSR1G5FWpNpdmU-38A';

  constructor(private http: HttpClient) {}

  // Return list of 5 random images from Unsplash API
  listImages() {
    
    // Specify HTTP Headers
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    // Specify HTTP Parameters
    let params = new HttpParams();
    params = params.append('client_id', this.accessKey);
    params = params.append('count', 5);

    // Return HTTP Request Observable
    return this.http.get(this.apiUrl, {headers, params});
  }

}
