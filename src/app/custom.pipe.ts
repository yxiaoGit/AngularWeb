import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'censor',
   standalone: true
})
export class censorPipe implements PipeTransform{

  transform(input: string, replacement: string) : string {  
  
     var cWords = ["bad", "terrible"];
     var out = input;
     for (var i = 0; i< cWords.length; i++) {
        out = out.replace(cWords[i], replacement);
     }
     return out;
  }
}