import { ReadProductUseCase } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { ProductViewModel } from '@/presentation/view-models/product'

export class ReadProductController implements Controller {
    constructor(private readonly readProduct: ReadProductUseCase) {}

    async handle(body: any): Promise<HttpResponse<ProductViewModel[]>> {
        try{
            let data
            if(body)
                data = await this.readProduct.getOne(body)
            else
                data = await this.readProduct.getMany()
            return ok(data)
        }catch(error) {
            return serverError(error)
        }
    }
}