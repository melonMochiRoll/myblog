import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  console.log(`BACKEND SERVER PORT : ${port}`);
  await app.listen(port);
}

bootstrap();