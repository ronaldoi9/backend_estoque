import { ReadProductUseCase } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { ProductViewModel } from '@/presentation/view-models/product'

export class ReadProductController implements Controller {
    constructor(private readonly readProduct: ReadProductUseCase) {}

    async handle(): Promise<HttpResponse<ProductViewModel[]>> {
        try{
            const data = await this.readProduct.getMany()
            return ok(data)
        }catch(error) {
            return serverError(error)
        }
    }
}