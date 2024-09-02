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
import { OAuth2ClientCredentials } from './OAuth2ClientCredentials';

/**
 * Request builder class for operations supported on the {@link OAuth2ClientCredentials} entity.
 */
export class OAuth2ClientCredentialsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OAuth2ClientCredentials<T>, T> {
  /**
   * Returns a request builder for querying all `OAuth2ClientCredentials` entities.
   * @returns A request builder for creating requests to retrieve all `OAuth2ClientCredentials` entities.
   */
  getAll(): GetAllRequestBuilder<OAuth2ClientCredentials<T>, T> {
    return new GetAllRequestBuilder<OAuth2ClientCredentials<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OAuth2ClientCredentials` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OAuth2ClientCredentials`.
   */
  create(
    entity: OAuth2ClientCredentials<T>
  ): CreateRequestBuilder<OAuth2ClientCredentials<T>, T> {
    return new CreateRequestBuilder<OAuth2ClientCredentials<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OAuth2ClientCredentials` entity based on its keys.
   * @param name Key property. See {@link OAuth2ClientCredentials.name}.
   * @returns A request builder for creating requests to retrieve one `OAuth2ClientCredentials` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OAuth2ClientCredentials<T>, T> {
    return new GetByKeyRequestBuilder<OAuth2ClientCredentials<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OAuth2ClientCredentials`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OAuth2ClientCredentials`.
   */
  update(
    entity: OAuth2ClientCredentials<T>
  ): UpdateRequestBuilder<OAuth2ClientCredentials<T>, T> {
    return new UpdateRequestBuilder<OAuth2ClientCredentials<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OAuth2ClientCredentials`.
   * @param name Key property. See {@link OAuth2ClientCredentials.name}.
   * @returns A request builder for creating requests that delete an entity of type `OAuth2ClientCredentials`.
   */
  delete(name: string): DeleteRequestBuilder<OAuth2ClientCredentials<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OAuth2ClientCredentials`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OAuth2ClientCredentials` by taking the entity as a parameter.
   */
  delete(
    entity: OAuth2ClientCredentials<T>
  ): DeleteRequestBuilder<OAuth2ClientCredentials<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<OAuth2ClientCredentials<T>, T> {
    return new DeleteRequestBuilder<OAuth2ClientCredentials<T>, T>(
      this.entityApi,
      nameOrEntity instanceof OAuth2ClientCredentials
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
