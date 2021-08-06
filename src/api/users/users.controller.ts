import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { loginUserDto, registerUser } from 'src/models/users-model/dto/UserDto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  public async createNewUser(
    @Res() res: Response,
    @Body() payload: registerUser,
  ): Promise<any | Response> {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.create(payload));
  }

  @Get('/:id')
  public async getUserById(
    @Res() res: Response,
    @Param('id') _id: string,
  ): Promise<any | Response> {
    return res.status(HttpStatus.OK).json(await this.userService.getById(_id));
  }

  @Get('/')
  public async getAll(@Res() res: Response): Promise<any | Response> {
    return res.status(HttpStatus.OK).json(await this.userService.getAll());
  }

  @Patch('/:id')
  public async updateOneUser(
    @Res() res: Response,
    @Param('id') _id: string,
    @Body() payload: registerUser,
  ): Promise<any | Response> {
    return res
      .status(HttpStatus.OK)
      .json(await this.userService.updateOne(_id, payload));
  }

  @Delete('/:id')
  public async deleteOneUser(
    @Res() res: Response,
    @Param('id') _id: string,
  ): Promise<any | Response> {
    return res
      .status(HttpStatus.OK)
      .json(await this.userService.deleteOne(_id));
  }

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
