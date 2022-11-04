import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RequestContextModule } from 'nestjs-request-context';

@Module({
  imports: [EventEmitterModule.forRoot(), RequestContextModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
