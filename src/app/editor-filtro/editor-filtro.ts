import { Component, signal, computed, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  //imports: [],
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltroComponent {
  brillo: WritableSignal<number> = signal(100);
  contraste: WritableSignal<number> = signal(100);
  blur: WritableSignal<number> = signal(0);
  filtroScss = computed(() => {
    return `brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px)`;
  })
actualizar (prop: string, evento: Event) {
  const valor = (evento.target as HTMLInputElement).value;

if (prop === 'brillo') this.brillo.set(+valor)
    if (prop === 'contraste') this.contraste.set(+valor)
    if (prop === 'blur') this.blur.set(+valor)
}
}
