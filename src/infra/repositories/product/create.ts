import { CreateProductRepository } from '@/data'
import { CreateApi } from '@/infra/repositories/contracts'

export class CreateProductRepositoryImpl implements CreateProductRepository {
  constructor(
    private readonly createApi: CreateApi
  ) { }

  async create(object: any): Promise<any> {
    return await this.createApi.create(object)
  }
}
