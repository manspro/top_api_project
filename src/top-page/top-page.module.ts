import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [TopPageController],
  providers: [ConfigService],
})
export class TopPageModule {}
