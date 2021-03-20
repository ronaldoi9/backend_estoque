import { UpdateProductRepository } from '@/data'
import { ReadApi, UpdateApi } from '@/infra/repositories/contracts'

export class UpdateProductRepositoryImpl implements UpdateProductRepository {
  constructor(
    private readonly updateApi: UpdateApi,
    private readonly readApi: ReadApi
  ) { }

  async update(object: any): Promise<any> {
    return await this.updateApi.update(object)
  }

  async get(object: any): Promise<any> {
    return await this.readApi.get(object.id)
  }
}