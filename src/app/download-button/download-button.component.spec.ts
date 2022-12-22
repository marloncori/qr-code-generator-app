import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadButtonComponent } from './download-button.component';
import { QrCodeService } from '../qr-code.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('DownloadButtonComponent', () => {
  let component: DownloadButtonComponent;
  let fixture: ComponentFixture<DownloadButtonComponent>;
  let qrCodeService: QrCodeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        DownloadButtonComponent
      ],
      providers: [
        QrCodeService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = TestBed.inject(DownloadButtonComponent);
    qrCodeService = TestBed.inject(QrCodeService);
  })

  it('should create the component.', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a QR code for a given image URL', () => {
    const imageUrl = 'https://www.example.com/image.jpg';
    const qrCodeUrl = 'data:image/png;base64,iVBORw0KGg...';
    spyOn(qrCodeService, 'generateQrCode').and.returnValue(of(qrCodeUrl));
    component.imageUrl = imageUrl;
    component.onClick();
    expect(component.download.emit).toHaveBeenCalledWith();
  });
 
});
