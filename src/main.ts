import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const GLOBALPREFIX = 'api';

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(GLOBALPREFIX);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Mesha Clinic Documentation')
    .setDescription("Mesha Clinic's API")
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
  });

  SwaggerModule.setup(`${GLOBALPREFIX}/swagger`, app, document);

  await app.listen(PORT, () => {
    console.log(`Server's running on: http://localhost:${PORT}/${GLOBALPREFIX}`);
    console.log(`Swagger documentation is running on: http://localhost:${PORT}/${GLOBALPREFIX}/swagger`);
  });

}

bootstrap();
