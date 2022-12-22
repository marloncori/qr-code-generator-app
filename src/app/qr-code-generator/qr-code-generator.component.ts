
import { Component, OnInit } from '@angular/core';
import { QrCodeService } from '../qr-code.service';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css']
})
export class QrCodeGeneratorComponent implements OnInit {
  url: string = "";
  qrCodeUrl: string = "";

  constructor(private qrCodeService: QrCodeService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.qrCodeService.generateQrCode(this.url).subscribe((qrCodeUrl: string) => {
      this.qrCodeUrl = qrCodeUrl;
    });
  }

  download(): void {
    const link = document.createElement('a');
    link.download = 'qr-code.jpg';
    link.href = this.qrCodeUrl;
    link.click();
  }

}