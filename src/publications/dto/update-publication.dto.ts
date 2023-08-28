import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePublicationDto {
  @IsNumber()
  @IsNotEmpty()
  mediaId: number;

  @IsNumber()
  @IsNotEmpty()
  postId: number;

  @IsString()
  @IsNotEmpty()
  date: Date;
}
