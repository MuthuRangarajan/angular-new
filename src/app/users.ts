export class User{
name: string;
qty: string;
constructor(values:Object={}){
  Object.assign(this,values);
}
}