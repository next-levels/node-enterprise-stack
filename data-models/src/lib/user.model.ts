import {Field, Model} from "@next-levels/next-framework";

@Model({
  name: 'user',
  label: 'Benutzer',
  features: ['base', 'notification'],
  url: 'user',
})
export class User  {

  @Field({type: 'TEXT'})
  id?: number;

}
