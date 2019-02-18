import { Injectable } from '@angular/core';
import { Make } from '../model/Make';
import { Model } from '../model/Model';
import { Show } from '../model/Show';

@Injectable()
export class TransformService {

  constructor() { }

  transform= (obj : any) : Make[] => {
    const carMakeMap : Map<String, Make> = new Map();
    const carModelMap : Map<String, Model> = new Map();
    const carShowMap : Map<String, Show> = new Map();
    obj.forEach(show => {
      if(show.cars) {
        show.cars.forEach(car => {
          const makeKey = car.make;
          if (!carMakeMap.has(makeKey)){
            carMakeMap.set(makeKey, new Make(makeKey))
          }
          const modelMapKey = car.make + car.model;// cater for same model name by different makes
          if (!carModelMap.has(modelMapKey)) {
            carModelMap.set(modelMapKey, new Model(car.model));
            carMakeMap.get(car.make).models.push(carModelMap.get(modelMapKey))
          }
          if (!carShowMap.has(show)) {
            carShowMap.set(show, new Show(show.name));
          }
          carModelMap.get(modelMapKey).shows.push(carShowMap.get(show));
        })
      }
    });

    const carMakeList: Make[] = [];
    carMakeMap.forEach((value: Make, key: String) => {
      carMakeList.push(value);
    })
    console.log(carMakeList);
    return carMakeList;
  }

}
