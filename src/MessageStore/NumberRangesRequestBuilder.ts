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
import { NumberRanges } from './NumberRanges';

/**
 * Request builder class for operations supported on the {@link NumberRanges} entity.
 */
export class NumberRangesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NumberRanges<T>, T> {
  /**
   * Returns a request builder for querying all `NumberRanges` entities.
   * @returns A request builder for creating requests to retrieve all `NumberRanges` entities.
   */
  getAll(): GetAllRequestBuilder<NumberRanges<T>, T> {
    return new GetAllRequestBuilder<NumberRanges<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NumberRanges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NumberRanges`.
   */
  create(entity: NumberRanges<T>): CreateRequestBuilder<NumberRanges<T>, T> {
    return new CreateRequestBuilder<NumberRanges<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `NumberRanges` entity based on its keys.
   * @param name Key property. See {@link NumberRanges.name}.
   * @returns A request builder for creating requests to retrieve one `NumberRanges` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NumberRanges<T>, T> {
    return new GetByKeyRequestBuilder<NumberRanges<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `NumberRanges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NumberRanges`.
   */
  update(entity: NumberRanges<T>): UpdateRequestBuilder<NumberRanges<T>, T> {
    return new UpdateRequestBuilder<NumberRanges<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NumberRanges`.
   * @param name Key property. See {@link NumberRanges.name}.
   * @returns A request builder for creating requests that delete an entity of type `NumberRanges`.
   */
  delete(name: string): DeleteRequestBuilder<NumberRanges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NumberRanges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NumberRanges` by taking the entity as a parameter.
   */
  delete(entity: NumberRanges<T>): DeleteRequestBuilder<NumberRanges<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<NumberRanges<T>, T> {
    return new DeleteRequestBuilder<NumberRanges<T>, T>(
      this.entityApi,
      nameOrEntity instanceof NumberRanges
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
