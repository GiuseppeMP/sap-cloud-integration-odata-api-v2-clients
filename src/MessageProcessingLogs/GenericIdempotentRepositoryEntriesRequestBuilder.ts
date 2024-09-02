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
import { GenericIdempotentRepositoryEntries } from './GenericIdempotentRepositoryEntries';

/**
 * Request builder class for operations supported on the {@link GenericIdempotentRepositoryEntries} entity.
 */
export class GenericIdempotentRepositoryEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GenericIdempotentRepositoryEntries<T>, T> {
  /**
   * Returns a request builder for querying all `GenericIdempotentRepositoryEntries` entities.
   * @returns A request builder for creating requests to retrieve all `GenericIdempotentRepositoryEntries` entities.
   */
  getAll(): GetAllRequestBuilder<GenericIdempotentRepositoryEntries<T>, T> {
    return new GetAllRequestBuilder<GenericIdempotentRepositoryEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GenericIdempotentRepositoryEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GenericIdempotentRepositoryEntries`.
   */
  create(
    entity: GenericIdempotentRepositoryEntries<T>
  ): CreateRequestBuilder<GenericIdempotentRepositoryEntries<T>, T> {
    return new CreateRequestBuilder<GenericIdempotentRepositoryEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GenericIdempotentRepositoryEntries` entity based on its keys.
   * @param hexVendor Key property. See {@link GenericIdempotentRepositoryEntries.hexVendor}.
   * @param hexSource Key property. See {@link GenericIdempotentRepositoryEntries.hexSource}.
   * @param hexEntry Key property. See {@link GenericIdempotentRepositoryEntries.hexEntry}.
   * @param hexComponent Key property. See {@link GenericIdempotentRepositoryEntries.hexComponent}.
   * @returns A request builder for creating requests to retrieve one `GenericIdempotentRepositoryEntries` entity based on its keys.
   */
  getByKey(
    hexVendor: DeserializedType<T, 'Edm.String'>,
    hexSource: DeserializedType<T, 'Edm.String'>,
    hexEntry: DeserializedType<T, 'Edm.String'>,
    hexComponent: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GenericIdempotentRepositoryEntries<T>, T> {
    return new GetByKeyRequestBuilder<GenericIdempotentRepositoryEntries<T>, T>(
      this.entityApi,
      {
        HexVendor: hexVendor,
        HexSource: hexSource,
        HexEntry: hexEntry,
        HexComponent: hexComponent
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GenericIdempotentRepositoryEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GenericIdempotentRepositoryEntries`.
   */
  update(
    entity: GenericIdempotentRepositoryEntries<T>
  ): UpdateRequestBuilder<GenericIdempotentRepositoryEntries<T>, T> {
    return new UpdateRequestBuilder<GenericIdempotentRepositoryEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GenericIdempotentRepositoryEntries`.
   * @param hexVendor Key property. See {@link GenericIdempotentRepositoryEntries.hexVendor}.
   * @param hexSource Key property. See {@link GenericIdempotentRepositoryEntries.hexSource}.
   * @param hexEntry Key property. See {@link GenericIdempotentRepositoryEntries.hexEntry}.
   * @param hexComponent Key property. See {@link GenericIdempotentRepositoryEntries.hexComponent}.
   * @returns A request builder for creating requests that delete an entity of type `GenericIdempotentRepositoryEntries`.
   */
  delete(
    hexVendor: string,
    hexSource: string,
    hexEntry: string,
    hexComponent: string
  ): DeleteRequestBuilder<GenericIdempotentRepositoryEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GenericIdempotentRepositoryEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GenericIdempotentRepositoryEntries` by taking the entity as a parameter.
   */
  delete(
    entity: GenericIdempotentRepositoryEntries<T>
  ): DeleteRequestBuilder<GenericIdempotentRepositoryEntries<T>, T>;
  delete(
    hexVendorOrEntity: any,
    hexSource?: string,
    hexEntry?: string,
    hexComponent?: string
  ): DeleteRequestBuilder<GenericIdempotentRepositoryEntries<T>, T> {
    return new DeleteRequestBuilder<GenericIdempotentRepositoryEntries<T>, T>(
      this.entityApi,
      hexVendorOrEntity instanceof GenericIdempotentRepositoryEntries
        ? hexVendorOrEntity
        : {
            HexVendor: hexVendorOrEntity!,
            HexSource: hexSource!,
            HexEntry: hexEntry!,
            HexComponent: hexComponent!
          }
    );
  }
}
