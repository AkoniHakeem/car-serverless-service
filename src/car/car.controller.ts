import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Car } from './car.entity';
import { CarService } from './car.service';

type NewType = Car;

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  async findAll(): Promise<NewType[]> {
    return this.carService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Car> {
    return this.carService.findOne(id);
  }

  @Post()
  async create(@Body() car: Car): Promise<Car> {
    return this.carService.create(car);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() car: Car): Promise<Car> {
    return this.carService.update(id, car);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.carService.delete(parseInt(id));
  }
}
