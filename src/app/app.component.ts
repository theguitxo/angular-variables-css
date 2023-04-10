import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sizeExample') sizeExample!: ElementRef;

  size!: number;
  color: 'black' | 'red' | 'green' | 'blue' = 'black';

  constructor(
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.getCurrentSize(), 0);
  }

  getCurrentSize(): void {
    this.size = parseInt(getComputedStyle(this.sizeExample.nativeElement).fontSize);
  }

  modifySize(value: number): void {
    if (this.size > 4) {
      this.size += value;

      this.sizeExample.nativeElement.style.setProperty(`--size`, `${this.size}px`);
    }
  }

  colorChange(event: any): void {
    this.color = event.target.value;
  }
}