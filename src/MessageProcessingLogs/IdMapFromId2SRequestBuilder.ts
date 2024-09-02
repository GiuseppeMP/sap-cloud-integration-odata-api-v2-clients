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
import { IdMapFromId2S } from './IdMapFromId2S';

/**
 * Request builder class for operations supported on the {@link IdMapFromId2S} entity.
 */
export class IdMapFromId2SRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IdMapFromId2S<T>, T> {
  /**
   * Returns a request builder for querying all `IdMapFromId2S` entities.
   * @returns A request builder for creating requests to retrieve all `IdMapFromId2S` entities.
   */
  getAll(): GetAllRequestBuilder<IdMapFromId2S<T>, T> {
    return new GetAllRequestBuilder<IdMapFromId2S<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IdMapFromId2S` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IdMapFromId2S`.
   */
  create(entity: IdMapFromId2S<T>): CreateRequestBuilder<IdMapFromId2S<T>, T> {
    return new CreateRequestBuilder<IdMapFromId2S<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IdMapFromId2S` entity based on its keys.
   * @param fromId Key property. See {@link IdMapFromId2S.fromId}.
   * @returns A request builder for creating requests to retrieve one `IdMapFromId2S` entity based on its keys.
   */
  getByKey(
    fromId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IdMapFromId2S<T>, T> {
    return new GetByKeyRequestBuilder<IdMapFromId2S<T>, T>(this.entityApi, {
      FromId: fromId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `IdMapFromId2S`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IdMapFromId2S`.
   */
  update(entity: IdMapFromId2S<T>): UpdateRequestBuilder<IdMapFromId2S<T>, T> {
    return new UpdateRequestBuilder<IdMapFromId2S<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IdMapFromId2S`.
   * @param fromId Key property. See {@link IdMapFromId2S.fromId}.
   * @returns A request builder for creating requests that delete an entity of type `IdMapFromId2S`.
   */
  delete(fromId: string): DeleteRequestBuilder<IdMapFromId2S<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IdMapFromId2S`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IdMapFromId2S` by taking the entity as a parameter.
   */
  delete(entity: IdMapFromId2S<T>): DeleteRequestBuilder<IdMapFromId2S<T>, T>;
  delete(fromIdOrEntity: any): DeleteRequestBuilder<IdMapFromId2S<T>, T> {
    return new DeleteRequestBuilder<IdMapFromId2S<T>, T>(
      this.entityApi,
      fromIdOrEntity instanceof IdMapFromId2S
        ? fromIdOrEntity
        : { FromId: fromIdOrEntity! }
    );
  }
}
