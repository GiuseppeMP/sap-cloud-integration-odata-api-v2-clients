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
import { RsaKeyGenerationRequests } from './RsaKeyGenerationRequests';

/**
 * Request builder class for operations supported on the {@link RsaKeyGenerationRequests} entity.
 */
export class RsaKeyGenerationRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RsaKeyGenerationRequests<T>, T> {
  /**
   * Returns a request builder for querying all `RsaKeyGenerationRequests` entities.
   * @returns A request builder for creating requests to retrieve all `RsaKeyGenerationRequests` entities.
   */
  getAll(): GetAllRequestBuilder<RsaKeyGenerationRequests<T>, T> {
    return new GetAllRequestBuilder<RsaKeyGenerationRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RsaKeyGenerationRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RsaKeyGenerationRequests`.
   */
  create(
    entity: RsaKeyGenerationRequests<T>
  ): CreateRequestBuilder<RsaKeyGenerationRequests<T>, T> {
    return new CreateRequestBuilder<RsaKeyGenerationRequests<T>, T>(
      this.entityApi,
      entity
    );
  }
}
