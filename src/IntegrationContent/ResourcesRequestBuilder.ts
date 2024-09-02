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
import { Resources } from './Resources';

/**
 * Request builder class for operations supported on the {@link Resources} entity.
 */
export class ResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Resources<T>, T> {
  /**
   * Returns a request builder for querying all `Resources` entities.
   * @returns A request builder for creating requests to retrieve all `Resources` entities.
   */
  getAll(): GetAllRequestBuilder<Resources<T>, T> {
    return new GetAllRequestBuilder<Resources<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Resources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Resources`.
   */
  create(entity: Resources<T>): CreateRequestBuilder<Resources<T>, T> {
    return new CreateRequestBuilder<Resources<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Resources` entity based on its keys.
   * @param name Key property. See {@link Resources.name}.
   * @param resourceType Key property. See {@link Resources.resourceType}.
   * @returns A request builder for creating requests to retrieve one `Resources` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    resourceType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Resources<T>, T> {
    return new GetByKeyRequestBuilder<Resources<T>, T>(this.entityApi, {
      Name: name,
      ResourceType: resourceType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Resources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Resources`.
   */
  update(entity: Resources<T>): UpdateRequestBuilder<Resources<T>, T> {
    return new UpdateRequestBuilder<Resources<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Resources`.
   * @param name Key property. See {@link Resources.name}.
   * @param resourceType Key property. See {@link Resources.resourceType}.
   * @returns A request builder for creating requests that delete an entity of type `Resources`.
   */
  delete(
    name: string,
    resourceType: string
  ): DeleteRequestBuilder<Resources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Resources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Resources` by taking the entity as a parameter.
   */
  delete(entity: Resources<T>): DeleteRequestBuilder<Resources<T>, T>;
  delete(
    nameOrEntity: any,
    resourceType?: string
  ): DeleteRequestBuilder<Resources<T>, T> {
    return new DeleteRequestBuilder<Resources<T>, T>(
      this.entityApi,
      nameOrEntity instanceof Resources
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            ResourceType: resourceType!
          }
    );
  }
}
