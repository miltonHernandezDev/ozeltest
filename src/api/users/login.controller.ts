import {
    Body,
    Controller,
    HttpStatus,
    Post,
    Res,
  } from '@nestjs/common';
  import {  Response } from 'express';
  import { loginUserDto } from 'src/models/users-model/dto/UserDto';
  import { UsersService } from './users.service';
  
  @Controller('login')
  export class LoginController {
    constructor(private userService: UsersService) {}



    @Post('/login')
  public async loginUser(
    @Res() res: Response,
    @Body() payload: loginUserDto,
  ): Promise<any | Response> {
    return res
      .status(HttpStatus.OK)
      .json(await this.userService.loginUser(payload));
  }
}