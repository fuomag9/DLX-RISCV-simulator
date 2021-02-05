import {Injector} from '@angular/core';
import {CodeService} from 'src/app/services/code.service';
import {Device} from './device';

export class Eprom extends Device {
  private codeService: CodeService;

  public get min_address(): number {
    return 0;
  }

  public set min_address(v: number) {
  }

  // tslint:disable-next-line:variable-name
  constructor(min_address: number, max_address: number, injector: Injector) {
    super('EPROM', min_address, max_address);
    this.codeService = injector.get(CodeService);
  }

  public load(address: number): number {
    return this.codeService.encode(address);
  }

  public store(address: number, word: number): void {
  }
}
