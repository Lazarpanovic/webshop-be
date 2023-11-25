import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API_PREFIX, SwaggerTags } from './constants';
import { setupAdminPanel } from './admin/adminjs.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await setupAdminPanel(app);

  app.enableCors();

  app.setGlobalPrefix(API_PREFIX);

  const config = new DocumentBuilder()
    .setTitle('web-shop')
    .setVersion('v0.0.1')
    .addTag(SwaggerTags.PRODUCTS)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(API_PREFIX, app, document);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);
}
bootstrap();
