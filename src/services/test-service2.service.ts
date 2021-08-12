import {injectable, /* inject, */ BindingScope, Provider} from '@loopback/core';

/*
 * Fix the service type. Possible options can be:
 * - import {TestService2} from 'your-module';
 * - export type TestService2 = string;
 * - export interface TestService2 {}
 */
export type TestService2 = any;

@injectable({scope: BindingScope.TRANSIENT})
export class TestService2Provider implements Provider<TestService2> {
  constructor(/* Add @inject to inject parameters */) {}

  value() {
    // Add your implementation here
    throw new Error('To be implemented');
  }

  hello(){
    return 'hello from service2'
  }
}

