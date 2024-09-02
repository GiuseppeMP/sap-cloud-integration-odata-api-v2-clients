/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { TraceMessages } from './TraceMessages';

/**
 * Request builder class for operations supported on the {@link TraceMessages} entity.
 */
export class TraceMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TraceMessages<T>, T> {
  /**
   * Returns a request builder for querying all `TraceMessages` entities.
   * @returns A request builder for creating requests to retrieve all `TraceMessages` entities.
   */
  getAll(): GetAllRequestBuilder<TraceMessages<T>, T> {
    return new GetAllRequestBuilder<TraceMessages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TraceMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TraceMessages`.
   */
  create(entity: TraceMessages<T>): CreateRequestBuilder<TraceMessages<T>, T> {
    return new CreateRequestBuilder<TraceMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TraceMessages` entity based on its keys.
   * @param traceId Key property. See {@link TraceMessages.traceId}.
   * @returns A request builder for creating requests to retrieve one `TraceMessages` entity based on its keys.
   */
  getByKey(
    traceId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TraceMessages<T>, T> {
    return new GetByKeyRequestBuilder<TraceMessages<T>, T>(this.entityApi, {
      TraceId: traceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TraceMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TraceMessages`.
   */
  update(entity: TraceMessages<T>): UpdateRequestBuilder<TraceMessages<T>, T> {
    return new UpdateRequestBuilder<TraceMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TraceMessages`.
   * @param traceId Key property. See {@link TraceMessages.traceId}.
   * @returns A request builder for creating requests that delete an entity of type `TraceMessages`.
   */
  delete(traceId: BigNumber): DeleteRequestBuilder<TraceMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TraceMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TraceMessages` by taking the entity as a parameter.
   */
  delete(entity: TraceMessages<T>): DeleteRequestBuilder<TraceMessages<T>, T>;
  delete(traceIdOrEntity: any): DeleteRequestBuilder<TraceMessages<T>, T> {
    return new DeleteRequestBuilder<TraceMessages<T>, T>(
      this.entityApi,
      traceIdOrEntity instanceof TraceMessages
        ? traceIdOrEntity
        : { TraceId: traceIdOrEntity! }
    );
  }
}
