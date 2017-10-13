import { Component, OnInit } from '@angular/core';
import { SupplyApiService } from '../../services/supply-api.service';
import { HttpClient } from '@angular/common/http';
import { SupplyInfo } from '../../interfaces/supply-info';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-supply-page',
  templateUrl: './supply-page.component.html',
  styleUrls: ['./supply-page.component.css']
})
export class SupplyPageComponent implements OnInit {

  myUploader =
  new FileUploader(
    {
      method: 'POST',
      url: environment.apiUrl + '/api/supplies',
      itemAlias: 'supplyImage'
    }
  )

  imageDomain = environment.apiUrl;


  supplies: any[] = [];

  errorMessage: string;

  newSupply: SupplyInfo = {
    productName: '',
    productDescription: '',
    productValue: '',
    supplyImage: ''
  }

  constructor(
    private supplyThang: SupplyApiService,
    private httpThang: HttpClient
  ) { }

  ngOnInit() {
    this.supplyThang.getSupplies()
      .subscribe(
        (suppliesFromApi: any[]) => {
          this.supplies = suppliesFromApi;
        }
      );//CLOSE this.postThang.getSupplies()
    }//CLOSE ngOnInit()

    submitSupply(){
      if (this.myUploader.getNotUploadedItems().length > 0) {
          this.saveSupplyWithImage();
      }

      else {
          this.saveSupplyNoImage();
      }
    }

    saveSupplyWithImage() {
    this.myUploader.onBuildItemForm = (item, form) => {
        form.append('productName', this.newSupply.productName);
        form.append('productDescription', this.newSupply.productDescription);
        form.append('productValue', this.newSupply.productValue);
    };

    this.myUploader.onSuccessItem = (item, response) => {
        const fullPostDetails = JSON.parse(response);
        console.log('New post success', fullPostDetails);
        this.supplies.unshift(fullPostDetails);
        this.errorMessage = '';
        this.newSupply = {
          productName: '',
          productDescription: '',
          productValue: '',
          supplyImage: ''
        };
    };

    this.myUploader.onErrorItem = (item, response) => {
        console.log('New post error', response);

        this.errorMessage = 'Unknown error. Try again later.'
    };

    this.myUploader.uploadAll();
}

saveSupplyNoImage() {
    this.supplyThang.submitSupply(this.newSupply)
      .subscribe(
        (fullPostDetails) => {
            console.log('New post success', fullPostDetails);
             this.supplies.unshift(fullPostDetails);


            this.errorMessage = '';
            this.newSupply = {
              productName: '',
              productDescription: '',
              productValue: '',
              supplyImage: ''
            };
        },

        (errorInfo) => {
            console.log('New post error', errorInfo);

            if (errorInfo.status === 400) {
                this.errorMessage = 'Validation error.';
            }
            else {
                this.errorMessage = 'Unknown error. Try again later.'
            }
        }
      );
}

    // submitSupply() { //should probably make this not "receiveCow() :D"
    //   //call service
    //   this.supplyThang.submitSupply(this.newSupply)
    //     .subscribe(
    //       (fullSupplyDetails) => {
    //         console.log('New supply success', fullSupplyDetails);
    //         this.supplies.unshift(fullSupplyDetails);
    //         this.newSupply = {
    //           productName: '',
    //           productDescription: '',
    //           productValue: '',
    //         };
    //       },
    //
    //       (errorInfo) => {
    //         if(errorInfo.status === 400) {
    //           this.errorMessage = 'Validation error'
    //         }
    //
    //         else {
    //           this.errorMessage = 'Unknown error. Try again later'
    //         }
    //         console.log('New Supply Error', errorInfo)
    //       }
    //     )
    // }//CLOSE receiveCow()


}//CLOSE class SupplyPageComponent
