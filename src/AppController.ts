import { Controller, Get } from "@nestjs/common";
import { Public } from "./login/login.controller";

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return 'Hello from Railway!';
  }
}