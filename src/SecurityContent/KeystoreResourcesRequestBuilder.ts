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
import { KeystoreResources } from './KeystoreResources';

/**
 * Request builder class for operations supported on the {@link KeystoreResources} entity.
 */
export class KeystoreResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KeystoreResources<T>, T> {
  /**
   * Returns a request builder for querying all `KeystoreResources` entities.
   * @returns A request builder for creating requests to retrieve all `KeystoreResources` entities.
   */
  getAll(): GetAllRequestBuilder<KeystoreResources<T>, T> {
    return new GetAllRequestBuilder<KeystoreResources<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KeystoreResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KeystoreResources`.
   */
  create(
    entity: KeystoreResources<T>
  ): CreateRequestBuilder<KeystoreResources<T>, T> {
    return new CreateRequestBuilder<KeystoreResources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `KeystoreResources` entity based on its keys.
   * @param name Key property. See {@link KeystoreResources.name}.
   * @returns A request builder for creating requests to retrieve one `KeystoreResources` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<KeystoreResources<T>, T> {
    return new GetByKeyRequestBuilder<KeystoreResources<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `KeystoreResources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KeystoreResources`.
   */
  update(
    entity: KeystoreResources<T>
  ): UpdateRequestBuilder<KeystoreResources<T>, T> {
    return new UpdateRequestBuilder<KeystoreResources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KeystoreResources`.
   * @param name Key property. See {@link KeystoreResources.name}.
   * @returns A request builder for creating requests that delete an entity of type `KeystoreResources`.
   */
  delete(name: string): DeleteRequestBuilder<KeystoreResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KeystoreResources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KeystoreResources` by taking the entity as a parameter.
   */
  delete(
    entity: KeystoreResources<T>
  ): DeleteRequestBuilder<KeystoreResources<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<KeystoreResources<T>, T> {
    return new DeleteRequestBuilder<KeystoreResources<T>, T>(
      this.entityApi,
      nameOrEntity instanceof KeystoreResources
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
