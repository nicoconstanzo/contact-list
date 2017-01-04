// Model for a contact. The only required field is email, rest of attributes are optional as indicated by the ?
export class Contact {
  constructor(
    public id         : number,
    public email      : string,
    public firstName? : string,
    public lastName?  : string,
    public address?   : string,
    public phone?     : string
    ) { }
}
