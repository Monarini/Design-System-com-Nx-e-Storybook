import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Variante = 'primary' | 'secondary' | 'tertiary'
type Theme = 'blue' | 'violet'

@Component({
  selector: 'ab-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  /**
   * Texto do botão
   */
  @Input() text: string = ''
  @Input() variant: Variante = 'primary'
  @Input() disabled: boolean = false
  @Input() theme: Theme = 'blue'

  getClasses(): string{
    return `${this.variant} ${this.theme}`
  }
}
