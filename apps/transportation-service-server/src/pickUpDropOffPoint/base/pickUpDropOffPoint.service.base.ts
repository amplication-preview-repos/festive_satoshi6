/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PickUpDropOffPoint as PrismaPickUpDropOffPoint,
  Route as PrismaRoute,
} from "@prisma/client";

export class PickUpDropOffPointServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PickUpDropOffPointCountArgs, "select">
  ): Promise<number> {
    return this.prisma.pickUpDropOffPoint.count(args);
  }

  async pickUpDropOffPoints<T extends Prisma.PickUpDropOffPointFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PickUpDropOffPointFindManyArgs>
  ): Promise<PrismaPickUpDropOffPoint[]> {
    return this.prisma.pickUpDropOffPoint.findMany<Prisma.PickUpDropOffPointFindManyArgs>(
      args
    );
  }
  async pickUpDropOffPoint<T extends Prisma.PickUpDropOffPointFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PickUpDropOffPointFindUniqueArgs>
  ): Promise<PrismaPickUpDropOffPoint | null> {
    return this.prisma.pickUpDropOffPoint.findUnique(args);
  }
  async createPickUpDropOffPoint<T extends Prisma.PickUpDropOffPointCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PickUpDropOffPointCreateArgs>
  ): Promise<PrismaPickUpDropOffPoint> {
    return this.prisma.pickUpDropOffPoint.create<T>(args);
  }
  async updatePickUpDropOffPoint<T extends Prisma.PickUpDropOffPointUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PickUpDropOffPointUpdateArgs>
  ): Promise<PrismaPickUpDropOffPoint> {
    return this.prisma.pickUpDropOffPoint.update<T>(args);
  }
  async deletePickUpDropOffPoint<T extends Prisma.PickUpDropOffPointDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PickUpDropOffPointDeleteArgs>
  ): Promise<PrismaPickUpDropOffPoint> {
    return this.prisma.pickUpDropOffPoint.delete(args);
  }

  async getRoute(parentId: string): Promise<PrismaRoute | null> {
    return this.prisma.pickUpDropOffPoint
      .findUnique({
        where: { id: parentId },
      })
      .route();
  }
}
