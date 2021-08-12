import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SampleDataSourceDataSource} from '../datasources';
import {Feedback, FeedbackRelations} from '../models';

export class FeedbackRepository extends DefaultCrudRepository<
  Feedback,
  typeof Feedback.prototype.id,
  FeedbackRelations
> {
  constructor(
    @inject('datasources.SampleDataSource') dataSource: SampleDataSourceDataSource,
  ) {
    super(Feedback, dataSource);
  }
}
