import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.page.html',
  styleUrls: ['./document-viewer.page.scss'],
})
export class DocumentViewerPage implements OnInit {

  constructor(private document: DocumentViewer) { }

  ngOnInit() {
  }

  options: DocumentViewerOptions = {
    title: 'My PDF'
  }
  
  onShow(){
    alert('document shown');
  }
  onPossible(){
    alert('document can be shown');
    //e.g. track document usage
  }
  
  onClose(){
    alert('document shown');
  }

  onMissingApp(appId, installer)
  {
    alert("misig app")
    if(confirm("Do you want to install the free PDF Viewer App "
            + appId + " for Android?"))
    {
        installer();
    }
  } 
  onImpossible(){
    alert('document cannot be shown');
    //e.g. track document usage
  }

onError(error){
  alert("Sorry! Cannot view document.");
}


viewDoc() {
  alert('Hola quw tal');
  this.document.viewDocument('assets/img/Propuesta Cambios SySO RENACE 2.pdf', 'application/pdf', this.options);
  
  alert('Hola quw tal 1');
}

canView() {
  this.document.canViewDocument('assets/Aceite de engranajes ISO 150 Enduratex EP.pdf', 'application/pdf', this.options, this.onPossible, this.onMissingApp, this.onImpossible, this.onError)
}


viewDoc1() {
  alert('Hola s');
  this.document.viewDocument('assets/Aceite de engranajes ISO 150 Enduratex EP.pdf', 'application/pdf', this.options, this.onPossible, this.onMissingApp, this.onImpossible, this.onError);
  alert('Hola quw taldsafdsfasdfsda');
}

}

