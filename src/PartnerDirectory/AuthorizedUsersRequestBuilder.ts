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
import { AuthorizedUsers } from './AuthorizedUsers';

/**
 * Request builder class for operations supported on the {@link AuthorizedUsers} entity.
 */
export class AuthorizedUsersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AuthorizedUsers<T>, T> {
  /**
   * Returns a request builder for querying all `AuthorizedUsers` entities.
   * @returns A request builder for creating requests to retrieve all `AuthorizedUsers` entities.
   */
  getAll(): GetAllRequestBuilder<AuthorizedUsers<T>, T> {
    return new GetAllRequestBuilder<AuthorizedUsers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AuthorizedUsers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AuthorizedUsers`.
   */
  create(
    entity: AuthorizedUsers<T>
  ): CreateRequestBuilder<AuthorizedUsers<T>, T> {
    return new CreateRequestBuilder<AuthorizedUsers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AuthorizedUsers` entity based on its keys.
   * @param user Key property. See {@link AuthorizedUsers.user}.
   * @returns A request builder for creating requests to retrieve one `AuthorizedUsers` entity based on its keys.
   */
  getByKey(
    user: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AuthorizedUsers<T>, T> {
    return new GetByKeyRequestBuilder<AuthorizedUsers<T>, T>(this.entityApi, {
      User: user
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AuthorizedUsers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AuthorizedUsers`.
   */
  update(
    entity: AuthorizedUsers<T>
  ): UpdateRequestBuilder<AuthorizedUsers<T>, T> {
    return new UpdateRequestBuilder<AuthorizedUsers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AuthorizedUsers`.
   * @param user Key property. See {@link AuthorizedUsers.user}.
   * @returns A request builder for creating requests that delete an entity of type `AuthorizedUsers`.
   */
  delete(user: string): DeleteRequestBuilder<AuthorizedUsers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AuthorizedUsers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AuthorizedUsers` by taking the entity as a parameter.
   */
  delete(
    entity: AuthorizedUsers<T>
  ): DeleteRequestBuilder<AuthorizedUsers<T>, T>;
  delete(userOrEntity: any): DeleteRequestBuilder<AuthorizedUsers<T>, T> {
    return new DeleteRequestBuilder<AuthorizedUsers<T>, T>(
      this.entityApi,
      userOrEntity instanceof AuthorizedUsers
        ? userOrEntity
        : { User: userOrEntity! }
    );
  }
}
