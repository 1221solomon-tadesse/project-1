import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use environment PORT or fallback to 3000
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  await app.listen(port);

  console.log(`🚀 HTTP Server running on port ${port}`);
}

bootstrap();
