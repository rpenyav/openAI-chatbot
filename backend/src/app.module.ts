import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GptModule } from './gpt/gpt.module';
import { GptController } from './gpt/gpt.controller';
import { GptService } from './gpt/gpt.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), GptModule],
  controllers: [AppController, GptController],
  providers: [AppService, GptService],
})
export class AppModule {}
