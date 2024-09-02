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
import { MessageProcessingLogRuns } from './MessageProcessingLogRuns';

/**
 * Request builder class for operations supported on the {@link MessageProcessingLogRuns} entity.
 */
export class MessageProcessingLogRunsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageProcessingLogRuns<T>, T> {
  /**
   * Returns a request builder for querying all `MessageProcessingLogRuns` entities.
   * @returns A request builder for creating requests to retrieve all `MessageProcessingLogRuns` entities.
   */
  getAll(): GetAllRequestBuilder<MessageProcessingLogRuns<T>, T> {
    return new GetAllRequestBuilder<MessageProcessingLogRuns<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MessageProcessingLogRuns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogRuns`.
   */
  create(
    entity: MessageProcessingLogRuns<T>
  ): CreateRequestBuilder<MessageProcessingLogRuns<T>, T> {
    return new CreateRequestBuilder<MessageProcessingLogRuns<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageProcessingLogRuns` entity based on its keys.
   * @param id Key property. See {@link MessageProcessingLogRuns.id}.
   * @returns A request builder for creating requests to retrieve one `MessageProcessingLogRuns` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageProcessingLogRuns<T>, T> {
    return new GetByKeyRequestBuilder<MessageProcessingLogRuns<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageProcessingLogRuns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogRuns`.
   */
  update(
    entity: MessageProcessingLogRuns<T>
  ): UpdateRequestBuilder<MessageProcessingLogRuns<T>, T> {
    return new UpdateRequestBuilder<MessageProcessingLogRuns<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogRuns`.
   * @param id Key property. See {@link MessageProcessingLogRuns.id}.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogRuns`.
   */
  delete(id: string): DeleteRequestBuilder<MessageProcessingLogRuns<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogRuns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogRuns` by taking the entity as a parameter.
   */
  delete(
    entity: MessageProcessingLogRuns<T>
  ): DeleteRequestBuilder<MessageProcessingLogRuns<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<MessageProcessingLogRuns<T>, T> {
    return new DeleteRequestBuilder<MessageProcessingLogRuns<T>, T>(
      this.entityApi,
      idOrEntity instanceof MessageProcessingLogRuns
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
