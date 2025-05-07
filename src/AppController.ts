import { Controller } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello from Railway!';
  }
}