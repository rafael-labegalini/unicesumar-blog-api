import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories/category.entity';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "unicesumar",
      password: "unicesumar",
      database: "blog",
      entities: [Category],
      synchronize: true
    }),
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
