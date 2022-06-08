import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Address {
  @Prop()
  country: string;
  @Prop()
  street: string;
  @Prop()
  number: string;
  @Prop()
  city: string;
  @Prop()
  zip: string;
  @Prop()
  isMainAddress: boolean;
}
export const AddressSchema = SchemaFactory.createForClass(Address);