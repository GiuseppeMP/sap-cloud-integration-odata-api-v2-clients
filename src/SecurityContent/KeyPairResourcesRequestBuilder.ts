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
import { KeyPairResources } from './KeyPairResources';

/**
 * Request builder class for operations supported on the {@link KeyPairResources} entity.
 */
export class KeyPairResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KeyPairResources<T>, T> {
  /**
   * Returns a request builder for querying all `KeyPairResources` entities.
   * @returns A request builder for creating requests to retrieve all `KeyPairResources` entities.
   */
  getAll(): GetAllRequestBuilder<KeyPairResources<T>, T> {
    return new GetAllRequestBuilder<KeyPairResources<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KeyPairResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KeyPairResources`.
   */
  create(
    entity: KeyPairResources<T>
  ): CreateRequestBuilder<KeyPairResources<T>, T> {
    return new CreateRequestBuilder<KeyPairResources<T>, T>(
      this.entityApi,
      entity
    );
  }
}
