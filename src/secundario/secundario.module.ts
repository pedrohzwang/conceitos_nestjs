import { Module } from '@nestjs/common';
import { SecundarioController } from './secundario.controller';
import { SecundarioService } from './secundario.service';

@Module({
  controllers: [SecundarioController],
  providers: [SecundarioService]
})
export class SecundarioModule {}
