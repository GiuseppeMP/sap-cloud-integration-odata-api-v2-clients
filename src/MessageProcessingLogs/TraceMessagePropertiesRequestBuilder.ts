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
import { TraceMessageProperties } from './TraceMessageProperties';

/**
 * Request builder class for operations supported on the {@link TraceMessageProperties} entity.
 */
export class TraceMessagePropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TraceMessageProperties<T>, T> {
  /**
   * Returns a request builder for querying all `TraceMessageProperties` entities.
   * @returns A request builder for creating requests to retrieve all `TraceMessageProperties` entities.
   */
  getAll(): GetAllRequestBuilder<TraceMessageProperties<T>, T> {
    return new GetAllRequestBuilder<TraceMessageProperties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TraceMessageProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TraceMessageProperties`.
   */
  create(
    entity: TraceMessageProperties<T>
  ): CreateRequestBuilder<TraceMessageProperties<T>, T> {
    return new CreateRequestBuilder<TraceMessageProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TraceMessageProperties` entity based on its keys.
   * @param traceId Key property. See {@link TraceMessageProperties.traceId}.
   * @param name Key property. See {@link TraceMessageProperties.name}.
   * @returns A request builder for creating requests to retrieve one `TraceMessageProperties` entity based on its keys.
   */
  getByKey(
    traceId: DeserializedType<T, 'Edm.Int64'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TraceMessageProperties<T>, T> {
    return new GetByKeyRequestBuilder<TraceMessageProperties<T>, T>(
      this.entityApi,
      {
        TraceId: traceId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TraceMessageProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TraceMessageProperties`.
   */
  update(
    entity: TraceMessageProperties<T>
  ): UpdateRequestBuilder<TraceMessageProperties<T>, T> {
    return new UpdateRequestBuilder<TraceMessageProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TraceMessageProperties`.
   * @param traceId Key property. See {@link TraceMessageProperties.traceId}.
   * @param name Key property. See {@link TraceMessageProperties.name}.
   * @returns A request builder for creating requests that delete an entity of type `TraceMessageProperties`.
   */
  delete(
    traceId: BigNumber,
    name: string
  ): DeleteRequestBuilder<TraceMessageProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TraceMessageProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TraceMessageProperties` by taking the entity as a parameter.
   */
  delete(
    entity: TraceMessageProperties<T>
  ): DeleteRequestBuilder<TraceMessageProperties<T>, T>;
  delete(
    traceIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<TraceMessageProperties<T>, T> {
    return new DeleteRequestBuilder<TraceMessageProperties<T>, T>(
      this.entityApi,
      traceIdOrEntity instanceof TraceMessageProperties
        ? traceIdOrEntity
        : {
            TraceId: traceIdOrEntity!,
            Name: name!
          }
    );
  }
}
