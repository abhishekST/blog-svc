import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // here whitelist true means mark that user will not send extra property
      // if it is then remove from request body
    }),
  );
  await app.listen(3000);
}
bootstrap();
