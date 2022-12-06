import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signUp')
  signUp(@Body() payload: AuthDto) {
    return this.authService.signUp(payload);
  }
  @Post('signIn')
  signIn(@Body() payload: AuthDto) {
    return this.authService.signIn(payload);
  }
}
