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
import { UserCredentials } from './UserCredentials';

/**
 * Request builder class for operations supported on the {@link UserCredentials} entity.
 */
export class UserCredentialsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserCredentials<T>, T> {
  /**
   * Returns a request builder for querying all `UserCredentials` entities.
   * @returns A request builder for creating requests to retrieve all `UserCredentials` entities.
   */
  getAll(): GetAllRequestBuilder<UserCredentials<T>, T> {
    return new GetAllRequestBuilder<UserCredentials<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserCredentials` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserCredentials`.
   */
  create(
    entity: UserCredentials<T>
  ): CreateRequestBuilder<UserCredentials<T>, T> {
    return new CreateRequestBuilder<UserCredentials<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UserCredentials` entity based on its keys.
   * @param name Key property. See {@link UserCredentials.name}.
   * @returns A request builder for creating requests to retrieve one `UserCredentials` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UserCredentials<T>, T> {
    return new GetByKeyRequestBuilder<UserCredentials<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `UserCredentials`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserCredentials`.
   */
  update(
    entity: UserCredentials<T>
  ): UpdateRequestBuilder<UserCredentials<T>, T> {
    return new UpdateRequestBuilder<UserCredentials<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UserCredentials`.
   * @param name Key property. See {@link UserCredentials.name}.
   * @returns A request builder for creating requests that delete an entity of type `UserCredentials`.
   */
  delete(name: string): DeleteRequestBuilder<UserCredentials<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserCredentials`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserCredentials` by taking the entity as a parameter.
   */
  delete(
    entity: UserCredentials<T>
  ): DeleteRequestBuilder<UserCredentials<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<UserCredentials<T>, T> {
    return new DeleteRequestBuilder<UserCredentials<T>, T>(
      this.entityApi,
      nameOrEntity instanceof UserCredentials
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
