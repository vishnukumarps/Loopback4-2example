import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {FeedbackRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class TestService1Service {
  constructor(
    @repository(FeedbackRepository)
    public feedbackRepository : FeedbackRepository,/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  hello(){

    return  this.feedbackRepository.find()
  }
}
