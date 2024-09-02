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
import { IdempotentRepositoryEntries } from './IdempotentRepositoryEntries';

/**
 * Request builder class for operations supported on the {@link IdempotentRepositoryEntries} entity.
 */
export class IdempotentRepositoryEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IdempotentRepositoryEntries<T>, T> {
  /**
   * Returns a request builder for querying all `IdempotentRepositoryEntries` entities.
   * @returns A request builder for creating requests to retrieve all `IdempotentRepositoryEntries` entities.
   */
  getAll(): GetAllRequestBuilder<IdempotentRepositoryEntries<T>, T> {
    return new GetAllRequestBuilder<IdempotentRepositoryEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IdempotentRepositoryEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IdempotentRepositoryEntries`.
   */
  create(
    entity: IdempotentRepositoryEntries<T>
  ): CreateRequestBuilder<IdempotentRepositoryEntries<T>, T> {
    return new CreateRequestBuilder<IdempotentRepositoryEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IdempotentRepositoryEntries` entity based on its keys.
   * @param hexSource Key property. See {@link IdempotentRepositoryEntries.hexSource}.
   * @param hexEntry Key property. See {@link IdempotentRepositoryEntries.hexEntry}.
   * @returns A request builder for creating requests to retrieve one `IdempotentRepositoryEntries` entity based on its keys.
   */
  getByKey(
    hexSource: DeserializedType<T, 'Edm.String'>,
    hexEntry: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IdempotentRepositoryEntries<T>, T> {
    return new GetByKeyRequestBuilder<IdempotentRepositoryEntries<T>, T>(
      this.entityApi,
      {
        HexSource: hexSource,
        HexEntry: hexEntry
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IdempotentRepositoryEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IdempotentRepositoryEntries`.
   */
  update(
    entity: IdempotentRepositoryEntries<T>
  ): UpdateRequestBuilder<IdempotentRepositoryEntries<T>, T> {
    return new UpdateRequestBuilder<IdempotentRepositoryEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IdempotentRepositoryEntries`.
   * @param hexSource Key property. See {@link IdempotentRepositoryEntries.hexSource}.
   * @param hexEntry Key property. See {@link IdempotentRepositoryEntries.hexEntry}.
   * @returns A request builder for creating requests that delete an entity of type `IdempotentRepositoryEntries`.
   */
  delete(
    hexSource: string,
    hexEntry: string
  ): DeleteRequestBuilder<IdempotentRepositoryEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IdempotentRepositoryEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IdempotentRepositoryEntries` by taking the entity as a parameter.
   */
  delete(
    entity: IdempotentRepositoryEntries<T>
  ): DeleteRequestBuilder<IdempotentRepositoryEntries<T>, T>;
  delete(
    hexSourceOrEntity: any,
    hexEntry?: string
  ): DeleteRequestBuilder<IdempotentRepositoryEntries<T>, T> {
    return new DeleteRequestBuilder<IdempotentRepositoryEntries<T>, T>(
      this.entityApi,
      hexSourceOrEntity instanceof IdempotentRepositoryEntries
        ? hexSourceOrEntity
        : {
            HexSource: hexSourceOrEntity!,
            HexEntry: hexEntry!
          }
    );
  }
}
