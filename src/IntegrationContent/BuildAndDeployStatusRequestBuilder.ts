/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { BuildAndDeployStatus } from './BuildAndDeployStatus';

/**
 * Request builder class for operations supported on the {@link BuildAndDeployStatus} entity.
 */
export class BuildAndDeployStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BuildAndDeployStatus<T>, T> {
  /**
   * Returns a request builder for querying all `BuildAndDeployStatus` entities.
   * @returns A request builder for creating requests to retrieve all `BuildAndDeployStatus` entities.
   */
  getAll(): GetAllRequestBuilder<BuildAndDeployStatus<T>, T> {
    return new GetAllRequestBuilder<BuildAndDeployStatus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BuildAndDeployStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BuildAndDeployStatus`.
   */
  create(
    entity: BuildAndDeployStatus<T>
  ): CreateRequestBuilder<BuildAndDeployStatus<T>, T> {
    return new CreateRequestBuilder<BuildAndDeployStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BuildAndDeployStatus` entity based on its keys.
   * @param taskId Key property. See {@link BuildAndDeployStatus.taskId}.
   * @returns A request builder for creating requests to retrieve one `BuildAndDeployStatus` entity based on its keys.
   */
  getByKey(
    taskId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BuildAndDeployStatus<T>, T> {
    return new GetByKeyRequestBuilder<BuildAndDeployStatus<T>, T>(
      this.entityApi,
      { TaskId: taskId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BuildAndDeployStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BuildAndDeployStatus`.
   */
  update(
    entity: BuildAndDeployStatus<T>
  ): UpdateRequestBuilder<BuildAndDeployStatus<T>, T> {
    return new UpdateRequestBuilder<BuildAndDeployStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BuildAndDeployStatus`.
   * @param taskId Key property. See {@link BuildAndDeployStatus.taskId}.
   * @returns A request builder for creating requests that delete an entity of type `BuildAndDeployStatus`.
   */
  delete(taskId: string): DeleteRequestBuilder<BuildAndDeployStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BuildAndDeployStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BuildAndDeployStatus` by taking the entity as a parameter.
   */
  delete(
    entity: BuildAndDeployStatus<T>
  ): DeleteRequestBuilder<BuildAndDeployStatus<T>, T>;
  delete(
    taskIdOrEntity: any
  ): DeleteRequestBuilder<BuildAndDeployStatus<T>, T> {
    return new DeleteRequestBuilder<BuildAndDeployStatus<T>, T>(
      this.entityApi,
      taskIdOrEntity instanceof BuildAndDeployStatus
        ? taskIdOrEntity
        : { TaskId: taskIdOrEntity! }
    );
  }
}
