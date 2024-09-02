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
import { IdMapToIds } from './IdMapToIds';

/**
 * Request builder class for operations supported on the {@link IdMapToIds} entity.
 */
export class IdMapToIdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IdMapToIds<T>, T> {
  /**
   * Returns a request builder for querying all `IdMapToIds` entities.
   * @returns A request builder for creating requests to retrieve all `IdMapToIds` entities.
   */
  getAll(): GetAllRequestBuilder<IdMapToIds<T>, T> {
    return new GetAllRequestBuilder<IdMapToIds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IdMapToIds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IdMapToIds`.
   */
  create(entity: IdMapToIds<T>): CreateRequestBuilder<IdMapToIds<T>, T> {
    return new CreateRequestBuilder<IdMapToIds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `IdMapToIds` entity based on its keys.
   * @param toId Key property. See {@link IdMapToIds.toId}.
   * @returns A request builder for creating requests to retrieve one `IdMapToIds` entity based on its keys.
   */
  getByKey(
    toId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IdMapToIds<T>, T> {
    return new GetByKeyRequestBuilder<IdMapToIds<T>, T>(this.entityApi, {
      ToId: toId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `IdMapToIds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IdMapToIds`.
   */
  update(entity: IdMapToIds<T>): UpdateRequestBuilder<IdMapToIds<T>, T> {
    return new UpdateRequestBuilder<IdMapToIds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `IdMapToIds`.
   * @param toId Key property. See {@link IdMapToIds.toId}.
   * @returns A request builder for creating requests that delete an entity of type `IdMapToIds`.
   */
  delete(toId: string): DeleteRequestBuilder<IdMapToIds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IdMapToIds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IdMapToIds` by taking the entity as a parameter.
   */
  delete(entity: IdMapToIds<T>): DeleteRequestBuilder<IdMapToIds<T>, T>;
  delete(toIdOrEntity: any): DeleteRequestBuilder<IdMapToIds<T>, T> {
    return new DeleteRequestBuilder<IdMapToIds<T>, T>(
      this.entityApi,
      toIdOrEntity instanceof IdMapToIds
        ? toIdOrEntity
        : { ToId: toIdOrEntity! }
    );
  }
}
