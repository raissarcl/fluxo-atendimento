import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const PREFIX = 'api';

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(PREFIX);

  await app.listen(PORT, () => {
    console.log(`Server's running on: http://localhost:${PORT}`);

  });

}

bootstrap();
