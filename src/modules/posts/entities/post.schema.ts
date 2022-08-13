import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type PostDocument = Post & Document;

@Schema({ collection: 'posts' })
export class Post {
  @Prop({ type: 'number' })
  _id: number;

  @Prop()
  userId: number;

  @Prop()
  title: string;

  @Prop()
  body: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
