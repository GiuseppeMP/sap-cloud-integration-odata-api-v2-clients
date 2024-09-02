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
import { KeyPairGenerationRequests } from './KeyPairGenerationRequests';

/**
 * Request builder class for operations supported on the {@link KeyPairGenerationRequests} entity.
 */
export class KeyPairGenerationRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KeyPairGenerationRequests<T>, T> {
  /**
   * Returns a request builder for querying all `KeyPairGenerationRequests` entities.
   * @returns A request builder for creating requests to retrieve all `KeyPairGenerationRequests` entities.
   */
  getAll(): GetAllRequestBuilder<KeyPairGenerationRequests<T>, T> {
    return new GetAllRequestBuilder<KeyPairGenerationRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `KeyPairGenerationRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KeyPairGenerationRequests`.
   */
  create(
    entity: KeyPairGenerationRequests<T>
  ): CreateRequestBuilder<KeyPairGenerationRequests<T>, T> {
    return new CreateRequestBuilder<KeyPairGenerationRequests<T>, T>(
      this.entityApi,
      entity
    );
  }
}
