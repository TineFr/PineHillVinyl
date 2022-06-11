import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export class Address {

  country: string;
  street: string;
  number: string;
  city: string;
  zip: string;
  isMainAddress: boolean;
}
export const AddressSchema = SchemaFactory.createForClass(Address);