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
import { SecureParameters } from './SecureParameters';

/**
 * Request builder class for operations supported on the {@link SecureParameters} entity.
 */
export class SecureParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecureParameters<T>, T> {
  /**
   * Returns a request builder for querying all `SecureParameters` entities.
   * @returns A request builder for creating requests to retrieve all `SecureParameters` entities.
   */
  getAll(): GetAllRequestBuilder<SecureParameters<T>, T> {
    return new GetAllRequestBuilder<SecureParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecureParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecureParameters`.
   */
  create(
    entity: SecureParameters<T>
  ): CreateRequestBuilder<SecureParameters<T>, T> {
    return new CreateRequestBuilder<SecureParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecureParameters` entity based on its keys.
   * @param name Key property. See {@link SecureParameters.name}.
   * @returns A request builder for creating requests to retrieve one `SecureParameters` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecureParameters<T>, T> {
    return new GetByKeyRequestBuilder<SecureParameters<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SecureParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecureParameters`.
   */
  update(
    entity: SecureParameters<T>
  ): UpdateRequestBuilder<SecureParameters<T>, T> {
    return new UpdateRequestBuilder<SecureParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecureParameters`.
   * @param name Key property. See {@link SecureParameters.name}.
   * @returns A request builder for creating requests that delete an entity of type `SecureParameters`.
   */
  delete(name: string): DeleteRequestBuilder<SecureParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecureParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecureParameters` by taking the entity as a parameter.
   */
  delete(
    entity: SecureParameters<T>
  ): DeleteRequestBuilder<SecureParameters<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<SecureParameters<T>, T> {
    return new DeleteRequestBuilder<SecureParameters<T>, T>(
      this.entityApi,
      nameOrEntity instanceof SecureParameters
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
