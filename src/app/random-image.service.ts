import {Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class RandomImageService {

    imageChangedObsvble: Observable<any>;

    private images = [
        { url: '../assets/images/flower.jpeg',
          title: "Flower"},

         { url: '../assets/images/arch.jpeg',
          title: "arch"},
        

    ];

    constructor() {
        this.imageChangedObsvble = new Observable<any> (observer => this.changeLoop(observer));
    }

    private changeLoop(observer: any) {
        setTimeout( () => {
            let imgIndex = this.getRandom(0,this.images.length);
            let image = this.images[imgIndex];
            observer.next(
                {
                    url : image.url,
                    title: image.title,
                    width: this.getRandom(200,400)
                }
            );
            this.changeLoop(observer);
        }, this.getRandom(100,1000));

    
    }

    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max-min) + min);
    }

    public getRandomImage() : Observable<any> {
        return this.imageChangedObsvble;
    }


}