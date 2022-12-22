import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrCodeService } from '../qr-code.service';
import { ReactiveFormsModule } from '@angular/forms';

import { QrCodeGeneratorComponent } from './qr-code-generator.component';
import { of } from 'rxjs';

describe('QrCodeGeneratorComponent', () => {
  let component: QrCodeGeneratorComponent;
  let fixture: ComponentFixture<QrCodeGeneratorComponent>;
  let qrCodeService: QrCodeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, 
        HttpClientModule],
      declarations: 
        [ QrCodeGeneratorComponent ],
      providers: 
        [QrCodeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = TestBed.inject(QrCodeGeneratorComponent);
    qrCodeService = TestBed.inject(QrCodeService);
  })

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a QR code for a given URL', () => {
    const url = 'https://www.elemelingua.com';
    const qrCodeUrl = 'data:image/png;base64,iVBORw0KGg...';
    spyOn(qrCodeService, 'generateQrCode').and.returnValue(of(qrCodeUrl));
    component.url = url;
    component.onSubmit();
    expect(component.qrCodeUrl).toBe(qrCodeUrl);
  });
});
