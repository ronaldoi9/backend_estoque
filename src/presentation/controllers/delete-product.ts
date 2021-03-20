import { DeleteProductUseCase } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { ProductViewModel } from '@/presentation/view-models/product'

export class DeleteProductController implements Controller {
    constructor(private readonly deleteProduct: DeleteProductUseCase) {}

    async handle(body: any): Promise<HttpResponse<ProductViewModel[]>> {
        try{
            const data = await this.deleteProduct.delete(body)
            return ok(data)
        }catch(error) {
            return serverError(error)
        }
    }
}