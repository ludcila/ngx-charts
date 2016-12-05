import { EventEmitter, ElementRef, SimpleChanges, OnChanges, ChangeDetectorRef, NgZone } from '@angular/core';
export declare class CardComponent implements OnChanges {
    private cd;
    private zone;
    color: any;
    x: any;
    y: any;
    width: any;
    height: any;
    label: any;
    data: any;
    clickHandler: EventEmitter<{}>;
    textEl: ElementRef;
    element: HTMLElement;
    transform: string;
    trimmedLabel: string;
    value: string;
    cardWidth: number;
    cardHeight: number;
    textWidth: number;
    resizeScale: number;
    textFontSize: number;
    textTransform: string;
    initialized: boolean;
    originalWidth: number;
    originalHeight: number;
    originalWidthRatio: number;
    originalHeightRatio: number;
    constructor(element: ElementRef, cd: ChangeDetectorRef, zone: NgZone);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getTextColor(color: any): string;
    countUp(current: any, max: any, step: any): void;
    scaleText(): void;
    onClick(): void;
}