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
import { CertificateSigningRequests } from './CertificateSigningRequests';

/**
 * Request builder class for operations supported on the {@link CertificateSigningRequests} entity.
 */
export class CertificateSigningRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CertificateSigningRequests<T>, T> {
  /**
   * Returns a request builder for querying all `CertificateSigningRequests` entities.
   * @returns A request builder for creating requests to retrieve all `CertificateSigningRequests` entities.
   */
  getAll(): GetAllRequestBuilder<CertificateSigningRequests<T>, T> {
    return new GetAllRequestBuilder<CertificateSigningRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CertificateSigningRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificateSigningRequests`.
   */
  create(
    entity: CertificateSigningRequests<T>
  ): CreateRequestBuilder<CertificateSigningRequests<T>, T> {
    return new CreateRequestBuilder<CertificateSigningRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CertificateSigningRequests` entity based on its keys.
   * @param hexalias Key property. See {@link CertificateSigningRequests.hexalias}.
   * @returns A request builder for creating requests to retrieve one `CertificateSigningRequests` entity based on its keys.
   */
  getByKey(
    hexalias: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CertificateSigningRequests<T>, T> {
    return new GetByKeyRequestBuilder<CertificateSigningRequests<T>, T>(
      this.entityApi,
      { Hexalias: hexalias }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CertificateSigningRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CertificateSigningRequests`.
   */
  update(
    entity: CertificateSigningRequests<T>
  ): UpdateRequestBuilder<CertificateSigningRequests<T>, T> {
    return new UpdateRequestBuilder<CertificateSigningRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CertificateSigningRequests`.
   * @param hexalias Key property. See {@link CertificateSigningRequests.hexalias}.
   * @returns A request builder for creating requests that delete an entity of type `CertificateSigningRequests`.
   */
  delete(
    hexalias: string
  ): DeleteRequestBuilder<CertificateSigningRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CertificateSigningRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CertificateSigningRequests` by taking the entity as a parameter.
   */
  delete(
    entity: CertificateSigningRequests<T>
  ): DeleteRequestBuilder<CertificateSigningRequests<T>, T>;
  delete(
    hexaliasOrEntity: any
  ): DeleteRequestBuilder<CertificateSigningRequests<T>, T> {
    return new DeleteRequestBuilder<CertificateSigningRequests<T>, T>(
      this.entityApi,
      hexaliasOrEntity instanceof CertificateSigningRequests
        ? hexaliasOrEntity
        : { Hexalias: hexaliasOrEntity! }
    );
  }
}
