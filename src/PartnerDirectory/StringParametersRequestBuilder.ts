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
import { StringParameters } from './StringParameters';

/**
 * Request builder class for operations supported on the {@link StringParameters} entity.
 */
export class StringParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StringParameters<T>, T> {
  /**
   * Returns a request builder for querying all `StringParameters` entities.
   * @returns A request builder for creating requests to retrieve all `StringParameters` entities.
   */
  getAll(): GetAllRequestBuilder<StringParameters<T>, T> {
    return new GetAllRequestBuilder<StringParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StringParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StringParameters`.
   */
  create(
    entity: StringParameters<T>
  ): CreateRequestBuilder<StringParameters<T>, T> {
    return new CreateRequestBuilder<StringParameters<T>, T>(
      this.entityApi,
      entity
    );
  }
}
