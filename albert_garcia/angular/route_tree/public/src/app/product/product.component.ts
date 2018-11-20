import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {};

  ngOnInit() {
  }

}

// let observable = this._authorService.getAuthors();
// observable.subscribe(data => {
//   console.log("Got our authors", data);
//   this.authors = data['authors'];
// })
// this._route.params.subscribe((params: Params) => {
//   console.log(params['id'])
//   this.id = params['id'];
//   let observable = this._authorService.getOne(this.id);
//   observable.subscribe(data => {
//     if(data['err']){
//       this._router.navigateByUrl('/notfound');
//     }
//     else {
//       console.log("Deleted this author", data);
//       this.author = data['author'];
//       console.log(this.author);
//     };
//   });
// });
