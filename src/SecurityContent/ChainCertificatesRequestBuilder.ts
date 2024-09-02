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
import { ChainCertificates } from './ChainCertificates';

/**
 * Request builder class for operations supported on the {@link ChainCertificates} entity.
 */
export class ChainCertificatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChainCertificates<T>, T> {
  /**
   * Returns a request builder for querying all `ChainCertificates` entities.
   * @returns A request builder for creating requests to retrieve all `ChainCertificates` entities.
   */
  getAll(): GetAllRequestBuilder<ChainCertificates<T>, T> {
    return new GetAllRequestBuilder<ChainCertificates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ChainCertificates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChainCertificates`.
   */
  create(
    entity: ChainCertificates<T>
  ): CreateRequestBuilder<ChainCertificates<T>, T> {
    return new CreateRequestBuilder<ChainCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ChainCertificates` entity based on its keys.
   * @param hexalias Key property. See {@link ChainCertificates.hexalias}.
   * @param index Key property. See {@link ChainCertificates.index}.
   * @returns A request builder for creating requests to retrieve one `ChainCertificates` entity based on its keys.
   */
  getByKey(
    hexalias: DeserializedType<T, 'Edm.String'>,
    index: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ChainCertificates<T>, T> {
    return new GetByKeyRequestBuilder<ChainCertificates<T>, T>(this.entityApi, {
      Hexalias: hexalias,
      Index: index
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ChainCertificates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChainCertificates`.
   */
  update(
    entity: ChainCertificates<T>
  ): UpdateRequestBuilder<ChainCertificates<T>, T> {
    return new UpdateRequestBuilder<ChainCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ChainCertificates`.
   * @param hexalias Key property. See {@link ChainCertificates.hexalias}.
   * @param index Key property. See {@link ChainCertificates.index}.
   * @returns A request builder for creating requests that delete an entity of type `ChainCertificates`.
   */
  delete(
    hexalias: string,
    index: number
  ): DeleteRequestBuilder<ChainCertificates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChainCertificates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChainCertificates` by taking the entity as a parameter.
   */
  delete(
    entity: ChainCertificates<T>
  ): DeleteRequestBuilder<ChainCertificates<T>, T>;
  delete(
    hexaliasOrEntity: any,
    index?: number
  ): DeleteRequestBuilder<ChainCertificates<T>, T> {
    return new DeleteRequestBuilder<ChainCertificates<T>, T>(
      this.entityApi,
      hexaliasOrEntity instanceof ChainCertificates
        ? hexaliasOrEntity
        : {
            Hexalias: hexaliasOrEntity!,
            Index: index!
          }
    );
  }
}
