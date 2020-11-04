import { Context, inject, controller, get, provide } from '@ali/midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @get('/')
  async index() {
    this.ctx.body = `Welcome to midwayjs!`;
  }
}
