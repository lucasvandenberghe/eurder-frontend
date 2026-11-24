import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-character-counter',
  styleUrl: './character-counter.css',
  templateUrl: './character-counter.html',
})
export class CharacterCounter {
  readonly characterCount = input.required<number>();
  readonly maxCharCount = input.required<number>();
  protected readonly normalizedCharacterCount = computed<number>(() => {
    return this.characterCount() > this.maxCharCount()
      ? 0
      : this.maxCharCount() - this.characterCount();
  });
}
