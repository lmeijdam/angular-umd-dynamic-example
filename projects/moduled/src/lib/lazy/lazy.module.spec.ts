import { LazyModule } from './lazy.module';

describe('LazyModule', () => {
  let lazyModule: LazyModule;

  beforeEach(() => {
    lazyModule = new LazyModule();
  });

  it('should create an instance', () => {
    expect(lazyModule).toBeTruthy();
  });
});
