import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import envPath  from './config/enviroments';
import bodyParse from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(envPath.PORT, ()=> console.log(`http://localhost:${envPath.PORT}`));
}
bootstrap();
