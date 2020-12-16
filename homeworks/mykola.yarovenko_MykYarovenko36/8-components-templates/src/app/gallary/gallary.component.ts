import { Component, OnInit } from '@angular/core';
import { dataItems } from '../dataItems';
import { data } from '../data';

@Component({
    selector: 'app-gallary',
    templateUrl: './gallary.component.html',
    styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
    cards: dataItems[];
    currentIndex: number = 0;
    currentSlide: dataItems;
    btnPrevIsDisabled: boolean;
    btnNextIsDisabled: boolean;
    sliderIsHidden: boolean;
    itemIsActive: boolean;
    constructor () {
        this.cards = data.map((item): dataItems => {
            return {
                'id': item.id,
                'urls': item.urls,
            };
        });
        this.currentSlide = this.cards[this.currentIndex];
        this.btnPrevIsDisabled = false;
        this.btnNextIsDisabled = false;
        this.sliderIsHidden = false;
        this.itemIsActive = false;
    }
    ngOnInit(): void {
    }
    toggleSlide(item: string): void {
        if (item === 'prev') {
            this.currentIndex--;
            this.currentSlide = this.cards[this.currentIndex];
            this.btnDisable()
        }
        if (item === 'next') {
            this.currentIndex++;
            this.currentSlide = this.cards[this.currentIndex];
            this.btnDisable()
        }
    }

    btnDisable(): void {
        this.btnNextIsDisabled = this.currentIndex === this.cards.length -1;
        this.btnPrevIsDisabled = this.currentIndex === 0;
    }

    setSlide(id: string): void {
        this.cards.find((item, index):void => {
            if (item.id === id) {
              this.currentSlide = item;
              this.currentIndex = index;
              this.btnDisable();
              this.sliderIsHidden = true;
              this.itemIsActive = true;
            }
        });
   }
}
