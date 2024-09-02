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
import { IdMapFromIds } from './IdMapFromIds';

/**
 * Request builder class for operations supported on the {@link IdMapFromIds} entity.
 */
export class IdMapFromIdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IdMapFromIds<T>, T> {
  /**
   * Returns a request builder for querying all `IdMapFromIds` entities.
   * @returns A request builder for creating requests to retrieve all `IdMapFromIds` entities.
   */
  getAll(): GetAllRequestBuilder<IdMapFromIds<T>, T> {
    return new GetAllRequestBuilder<IdMapFromIds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IdMapFromIds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IdMapFromIds`.
   */
  create(entity: IdMapFromIds<T>): CreateRequestBuilder<IdMapFromIds<T>, T> {
    return new CreateRequestBuilder<IdMapFromIds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `IdMapFromIds` entity based on its keys.
   * @param fromId Key property. See {@link IdMapFromIds.fromId}.
   * @returns A request builder for creating requests to retrieve one `IdMapFromIds` entity based on its keys.
   */
  getByKey(
    fromId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IdMapFromIds<T>, T> {
    return new GetByKeyRequestBuilder<IdMapFromIds<T>, T>(this.entityApi, {
      FromId: fromId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `IdMapFromIds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IdMapFromIds`.
   */
  update(entity: IdMapFromIds<T>): UpdateRequestBuilder<IdMapFromIds<T>, T> {
    return new UpdateRequestBuilder<IdMapFromIds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `IdMapFromIds`.
   * @param fromId Key property. See {@link IdMapFromIds.fromId}.
   * @returns A request builder for creating requests that delete an entity of type `IdMapFromIds`.
   */
  delete(fromId: string): DeleteRequestBuilder<IdMapFromIds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IdMapFromIds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IdMapFromIds` by taking the entity as a parameter.
   */
  delete(entity: IdMapFromIds<T>): DeleteRequestBuilder<IdMapFromIds<T>, T>;
  delete(fromIdOrEntity: any): DeleteRequestBuilder<IdMapFromIds<T>, T> {
    return new DeleteRequestBuilder<IdMapFromIds<T>, T>(
      this.entityApi,
      fromIdOrEntity instanceof IdMapFromIds
        ? fromIdOrEntity
        : { FromId: fromIdOrEntity! }
    );
  }
}
