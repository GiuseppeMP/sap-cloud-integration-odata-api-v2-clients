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
import { BinaryParameters } from './BinaryParameters';

/**
 * Request builder class for operations supported on the {@link BinaryParameters} entity.
 */
export class BinaryParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BinaryParameters<T>, T> {
  /**
   * Returns a request builder for querying all `BinaryParameters` entities.
   * @returns A request builder for creating requests to retrieve all `BinaryParameters` entities.
   */
  getAll(): GetAllRequestBuilder<BinaryParameters<T>, T> {
    return new GetAllRequestBuilder<BinaryParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BinaryParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BinaryParameters`.
   */
  create(
    entity: BinaryParameters<T>
  ): CreateRequestBuilder<BinaryParameters<T>, T> {
    return new CreateRequestBuilder<BinaryParameters<T>, T>(
      this.entityApi,
      entity
    );
  }
}
