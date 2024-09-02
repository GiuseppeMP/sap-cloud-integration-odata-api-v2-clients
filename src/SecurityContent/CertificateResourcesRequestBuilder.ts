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
import { CertificateResources } from './CertificateResources';

/**
 * Request builder class for operations supported on the {@link CertificateResources} entity.
 */
export class CertificateResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CertificateResources<T>, T> {
  /**
   * Returns a request builder for querying all `CertificateResources` entities.
   * @returns A request builder for creating requests to retrieve all `CertificateResources` entities.
   */
  getAll(): GetAllRequestBuilder<CertificateResources<T>, T> {
    return new GetAllRequestBuilder<CertificateResources<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CertificateResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificateResources`.
   */
  create(
    entity: CertificateResources<T>
  ): CreateRequestBuilder<CertificateResources<T>, T> {
    return new CreateRequestBuilder<CertificateResources<T>, T>(
      this.entityApi,
      entity
    );
  }
}
