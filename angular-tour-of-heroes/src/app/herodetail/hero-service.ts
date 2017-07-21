import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
     /**The @Injectable() decorator tells TypeScript to emit metadata about the service. 
The metadata specifies that Angular may need to inject other dependencies into this service. */
getHeroes(): void {} // stub
}