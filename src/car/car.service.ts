import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {
    //
  }

  async findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async findOne(id: string): Promise<Car> {
    return this.carRepository.findOne({ where: { id } });
  }

  async create(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }

  async update(id: string, car: Car): Promise<Car> {
    const existingCar = await this.carRepository.findOne({ where: { id } });
    existingCar.make = car.make;
    existingCar.model = car.model;
    existingCar.year = car.year;
    existingCar.price = car.price;
    existingCar.imageUrl = car.imageUrl;
    existingCar.description = car.description;
    return this.carRepository.save(existingCar);
  }

  async delete(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }
}
