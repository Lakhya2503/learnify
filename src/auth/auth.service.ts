import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/registerUser.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  registerUser(registerUserDto: RegisterDto) {
    console.log('registerDto', registerUserDto);
    return this.userService.createUser();
  }
}
