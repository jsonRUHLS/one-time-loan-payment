import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: 'input[sharedNumberOnly]',
    standalone: true
})
export class SharedNumberOnlyDirective {
    @Input() sharedNumberOnly!: boolean;

    constructor(
        private _elementRef: ElementRef,
    ) { }

    @HostListener('input', ['$event.target.value']) onInputChange(value: string): void {
        const initialValue = this._elementRef.nativeElement.value;
        this._elementRef.nativeElement.value = initialValue.replace(/[^0-9]/g, '');
        if (initialValue !== this._elementRef.nativeElement.value) {
            event?.stopPropagation();
        }
    }

}
