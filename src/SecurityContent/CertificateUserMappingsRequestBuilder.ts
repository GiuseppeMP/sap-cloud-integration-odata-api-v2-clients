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
import { CertificateUserMappings } from './CertificateUserMappings';

/**
 * Request builder class for operations supported on the {@link CertificateUserMappings} entity.
 */
export class CertificateUserMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CertificateUserMappings<T>, T> {
  /**
   * Returns a request builder for querying all `CertificateUserMappings` entities.
   * @returns A request builder for creating requests to retrieve all `CertificateUserMappings` entities.
   */
  getAll(): GetAllRequestBuilder<CertificateUserMappings<T>, T> {
    return new GetAllRequestBuilder<CertificateUserMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CertificateUserMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificateUserMappings`.
   */
  create(
    entity: CertificateUserMappings<T>
  ): CreateRequestBuilder<CertificateUserMappings<T>, T> {
    return new CreateRequestBuilder<CertificateUserMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CertificateUserMappings` entity based on its keys.
   * @param id Key property. See {@link CertificateUserMappings.id}.
   * @returns A request builder for creating requests to retrieve one `CertificateUserMappings` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CertificateUserMappings<T>, T> {
    return new GetByKeyRequestBuilder<CertificateUserMappings<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CertificateUserMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CertificateUserMappings`.
   */
  update(
    entity: CertificateUserMappings<T>
  ): UpdateRequestBuilder<CertificateUserMappings<T>, T> {
    return new UpdateRequestBuilder<CertificateUserMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CertificateUserMappings`.
   * @param id Key property. See {@link CertificateUserMappings.id}.
   * @returns A request builder for creating requests that delete an entity of type `CertificateUserMappings`.
   */
  delete(id: string): DeleteRequestBuilder<CertificateUserMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CertificateUserMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CertificateUserMappings` by taking the entity as a parameter.
   */
  delete(
    entity: CertificateUserMappings<T>
  ): DeleteRequestBuilder<CertificateUserMappings<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<CertificateUserMappings<T>, T> {
    return new DeleteRequestBuilder<CertificateUserMappings<T>, T>(
      this.entityApi,
      idOrEntity instanceof CertificateUserMappings
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
