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
import { JmsBrokers } from './JmsBrokers';

/**
 * Request builder class for operations supported on the {@link JmsBrokers} entity.
 */
export class JmsBrokersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JmsBrokers<T>, T> {
  /**
   * Returns a request builder for querying all `JmsBrokers` entities.
   * @returns A request builder for creating requests to retrieve all `JmsBrokers` entities.
   */
  getAll(): GetAllRequestBuilder<JmsBrokers<T>, T> {
    return new GetAllRequestBuilder<JmsBrokers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JmsBrokers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JmsBrokers`.
   */
  create(entity: JmsBrokers<T>): CreateRequestBuilder<JmsBrokers<T>, T> {
    return new CreateRequestBuilder<JmsBrokers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `JmsBrokers` entity based on its keys.
   * @param key Key property. See {@link JmsBrokers.key}.
   * @returns A request builder for creating requests to retrieve one `JmsBrokers` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JmsBrokers<T>, T> {
    return new GetByKeyRequestBuilder<JmsBrokers<T>, T>(this.entityApi, {
      Key: key
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JmsBrokers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JmsBrokers`.
   */
  update(entity: JmsBrokers<T>): UpdateRequestBuilder<JmsBrokers<T>, T> {
    return new UpdateRequestBuilder<JmsBrokers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JmsBrokers`.
   * @param key Key property. See {@link JmsBrokers.key}.
   * @returns A request builder for creating requests that delete an entity of type `JmsBrokers`.
   */
  delete(key: string): DeleteRequestBuilder<JmsBrokers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JmsBrokers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JmsBrokers` by taking the entity as a parameter.
   */
  delete(entity: JmsBrokers<T>): DeleteRequestBuilder<JmsBrokers<T>, T>;
  delete(keyOrEntity: any): DeleteRequestBuilder<JmsBrokers<T>, T> {
    return new DeleteRequestBuilder<JmsBrokers<T>, T>(
      this.entityApi,
      keyOrEntity instanceof JmsBrokers ? keyOrEntity : { Key: keyOrEntity! }
    );
  }
}
