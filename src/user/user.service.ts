import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../auth/dto/registerUser.dto';

@Injectable()
export class UserService {
  createUser(registerUserDto: RegisterDto) {
    
    return {
      message: 'user created successfully.....',
    };
  }
}
