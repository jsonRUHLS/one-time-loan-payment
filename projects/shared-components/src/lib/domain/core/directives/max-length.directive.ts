import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2 } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Subject } from "rxjs";

@Directive({
    selector: 'input[sharedMaxLength]',
    standalone: true
})
export class SharedMaxLengthDirective implements OnInit, OnDestroy {
    @Input() sharedMaxLength!: number;
    private destroyed$ = new Subject<void>();

    constructor(
        private _elementRef: ElementRef,
        private renderer: Renderer2,
        @Optional() private ngModel: NgModel,
    ) { }

    @HostListener('input', ['$event']) onChange(event: Event): void {
        if (this.ngModel?.value.length > this.sharedMaxLength) {
            this.ngModel.control.setValue(this.ngModel.value.slice(0, this.sharedMaxLength));
        }
    }

    ngOnInit(): void {
        this.renderer.setAttribute(this._elementRef.nativeElement, 'maxlength', this.sharedMaxLength.toString());
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}