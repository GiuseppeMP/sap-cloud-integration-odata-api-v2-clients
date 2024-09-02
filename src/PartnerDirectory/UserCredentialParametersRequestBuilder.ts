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
import { UserCredentialParameters } from './UserCredentialParameters';

/**
 * Request builder class for operations supported on the {@link UserCredentialParameters} entity.
 */
export class UserCredentialParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserCredentialParameters<T>, T> {
  /**
   * Returns a request builder for querying all `UserCredentialParameters` entities.
   * @returns A request builder for creating requests to retrieve all `UserCredentialParameters` entities.
   */
  getAll(): GetAllRequestBuilder<UserCredentialParameters<T>, T> {
    return new GetAllRequestBuilder<UserCredentialParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UserCredentialParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserCredentialParameters`.
   */
  create(
    entity: UserCredentialParameters<T>
  ): CreateRequestBuilder<UserCredentialParameters<T>, T> {
    return new CreateRequestBuilder<UserCredentialParameters<T>, T>(
      this.entityApi,
      entity
    );
  }
}
