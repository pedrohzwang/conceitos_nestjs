import { Controller, Get } from '@nestjs/common';
import { SecundarioService } from './secundario.service';

@Controller('secundario')
export class SecundarioController {
  constructor(private readonly service: SecundarioService) {}

  @Get()
  secundarioUrl(): string {
    return this.service.secundario();
  }
}
