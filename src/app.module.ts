import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecundarioModule } from './secundario/secundario.module';

@Module({
  imports: [SecundarioModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
