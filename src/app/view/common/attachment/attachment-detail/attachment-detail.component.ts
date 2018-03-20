import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attachment-detail',
  templateUrl: './attachment-detail.component.html',
  styleUrls: ['./attachment-detail.component.css']
})
export class AttachmentDetailComponent implements OnInit {
  uploadFile;
  uploadImage;
  uploadType;

  attachments = [
    {
      title: 'Photo Id',
      type: 'ID',
      url: 'https://www.zamzar.com/images/filetypes/pdf.png',
      uploadedDate: '29/07/2017 4:28 PM',
      createdBy: 'Operation'
    },
    {
      title: 'Photo Id',
      type: 'Bank Statement',
      url: 'https://s14.favim.com/mini/170430/bg-cute-iphone-moomin-Favim.com-5167794.jpeg',
      uploadedDate: '29/07/2017 4:28 PM',
      createdBy: 'Operation'
    },
  ];

  types = ['ID', 'POA', 'Bank Statement', 'Divers License', 'Company Registration Certification'];

  uploadDocument(file) {
    this.uploadFile = file.target.files[0];
    if (this.uploadFile) {
      console.log(this.uploadFile);
      if (this.uploadFile.type === 'image/jpeg') {
        const fr = new FileReader();
        fr.onload = function () {
          document.getElementById('uploadDocument').getElementsByTagName('img')[0].src = fr.result;
        };
        fr.readAsDataURL(this.uploadFile);
      }
    }
  }

  cancelUpload() {
    this.uploadFile = null;
  }



  constructor() { }

  ngOnInit() {
  }

}
