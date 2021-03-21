import { ReadApi } from '@/infra/repositories/contracts'

export class ReadApiImpl implements ReadApi {
  constructor(private readonly sequelizeModel: any) { }

  async get(body: any): Promise<any> | undefined {
    return this.sequelizeModel.findOne({ where: { id: body.id } })
  }

  async getMany(): Promise<any> {
      const objects: any[] = await this.sequelizeModel.findAll()
      return {
        items: objects.map(object => object.toJSON())
      }
    }
}
