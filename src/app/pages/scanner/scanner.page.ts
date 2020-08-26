import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }


  ngOnInit() {
  }

  Scann() {
    this.barcodeScanner.scan().then(barcodeData => {
      if (!(barcodeData.text === '' || barcodeData.text === undefined)) {
        alert(barcodeData.text);
        alert(barcodeData.format);
        alert(barcodeData.cancelled);
      }
   }).catch(err => {
       alert('Error al escanear');
   });
  }

}
