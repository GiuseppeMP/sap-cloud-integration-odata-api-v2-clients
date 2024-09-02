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
import { Keystores } from './Keystores';

/**
 * Request builder class for operations supported on the {@link Keystores} entity.
 */
export class KeystoresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Keystores<T>, T> {
  /**
   * Returns a request builder for querying all `Keystores` entities.
   * @returns A request builder for creating requests to retrieve all `Keystores` entities.
   */
  getAll(): GetAllRequestBuilder<Keystores<T>, T> {
    return new GetAllRequestBuilder<Keystores<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Keystores` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Keystores`.
   */
  create(entity: Keystores<T>): CreateRequestBuilder<Keystores<T>, T> {
    return new CreateRequestBuilder<Keystores<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Keystores` entity based on its keys.
   * @param name Key property. See {@link Keystores.name}.
   * @returns A request builder for creating requests to retrieve one `Keystores` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Keystores<T>, T> {
    return new GetByKeyRequestBuilder<Keystores<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Keystores`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Keystores`.
   */
  update(entity: Keystores<T>): UpdateRequestBuilder<Keystores<T>, T> {
    return new UpdateRequestBuilder<Keystores<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Keystores`.
   * @param name Key property. See {@link Keystores.name}.
   * @returns A request builder for creating requests that delete an entity of type `Keystores`.
   */
  delete(name: string): DeleteRequestBuilder<Keystores<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Keystores`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Keystores` by taking the entity as a parameter.
   */
  delete(entity: Keystores<T>): DeleteRequestBuilder<Keystores<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<Keystores<T>, T> {
    return new DeleteRequestBuilder<Keystores<T>, T>(
      this.entityApi,
      nameOrEntity instanceof Keystores ? nameOrEntity : { Name: nameOrEntity! }
    );
  }
}
