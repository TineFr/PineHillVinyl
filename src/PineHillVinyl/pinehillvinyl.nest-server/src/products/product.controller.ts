import { Controller, Get, Param, Post } from '@nestjs/common';
import { ResponseProductDto } from './dtos/product.dto';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly _service: ProductService) {}

  @Get('')
   async findAll(): Promise<Product[]> {
    let result =  await this._service.getAll();
    return result;
  }

//   @Get(':id')
//   findOne(@Param('id') id:string): Album {
//     // return this.appService.getHello();
//     return this.appService.findOne(Number(id));
//   }
// @ApiResponse({status: 201, description: 'Record was created'})
//   @Post()
//   async create(@Body() createAlbumDto: CreateAlbumDto){
//     return this.appService.createNew(createAlbumDto);
//   }


}
