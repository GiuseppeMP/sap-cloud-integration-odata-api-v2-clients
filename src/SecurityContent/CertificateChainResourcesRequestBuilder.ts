/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { CertificateChainResources } from './CertificateChainResources';

/**
 * Request builder class for operations supported on the {@link CertificateChainResources} entity.
 */
export class CertificateChainResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CertificateChainResources<T>, T> {
  /**
   * Returns a request builder for querying all `CertificateChainResources` entities.
   * @returns A request builder for creating requests to retrieve all `CertificateChainResources` entities.
   */
  getAll(): GetAllRequestBuilder<CertificateChainResources<T>, T> {
    return new GetAllRequestBuilder<CertificateChainResources<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CertificateChainResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificateChainResources`.
   */
  create(
    entity: CertificateChainResources<T>
  ): CreateRequestBuilder<CertificateChainResources<T>, T> {
    return new CreateRequestBuilder<CertificateChainResources<T>, T>(
      this.entityApi,
      entity
    );
  }
}
