export class User{

    constructor(
    public id: number,
    public name: string,
    public age?: string,
    public password?: string
  ) {  }
 
}

let message ;
message=1;
let temp1 = (<string>message).charAt(0);
let temp2=(<number> message).toLocaleString;