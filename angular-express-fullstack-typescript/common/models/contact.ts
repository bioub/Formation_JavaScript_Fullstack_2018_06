import { Company } from "./company";

export class Contact {
  public _id?: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public telephone: string;
  public company: Company;
  public updated: Date;
}
