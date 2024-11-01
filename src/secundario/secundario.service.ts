import { Injectable } from '@nestjs/common';

@Injectable()
export class SecundarioService {
  secundario(): string {
    return 'metodo secundario';
  }
}
