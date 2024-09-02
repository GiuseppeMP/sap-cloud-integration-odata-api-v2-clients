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
import { ApiDefinitions } from './ApiDefinitions';

/**
 * Request builder class for operations supported on the {@link ApiDefinitions} entity.
 */
export class ApiDefinitionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApiDefinitions<T>, T> {
  /**
   * Returns a request builder for querying all `ApiDefinitions` entities.
   * @returns A request builder for creating requests to retrieve all `ApiDefinitions` entities.
   */
  getAll(): GetAllRequestBuilder<ApiDefinitions<T>, T> {
    return new GetAllRequestBuilder<ApiDefinitions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApiDefinitions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApiDefinitions`.
   */
  create(
    entity: ApiDefinitions<T>
  ): CreateRequestBuilder<ApiDefinitions<T>, T> {
    return new CreateRequestBuilder<ApiDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApiDefinitions` entity based on its keys.
   * @param url Key property. See {@link ApiDefinitions.url}.
   * @returns A request builder for creating requests to retrieve one `ApiDefinitions` entity based on its keys.
   */
  getByKey(
    url: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApiDefinitions<T>, T> {
    return new GetByKeyRequestBuilder<ApiDefinitions<T>, T>(this.entityApi, {
      Url: url
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ApiDefinitions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApiDefinitions`.
   */
  update(
    entity: ApiDefinitions<T>
  ): UpdateRequestBuilder<ApiDefinitions<T>, T> {
    return new UpdateRequestBuilder<ApiDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApiDefinitions`.
   * @param url Key property. See {@link ApiDefinitions.url}.
   * @returns A request builder for creating requests that delete an entity of type `ApiDefinitions`.
   */
  delete(url: string): DeleteRequestBuilder<ApiDefinitions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiDefinitions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApiDefinitions` by taking the entity as a parameter.
   */
  delete(entity: ApiDefinitions<T>): DeleteRequestBuilder<ApiDefinitions<T>, T>;
  delete(urlOrEntity: any): DeleteRequestBuilder<ApiDefinitions<T>, T> {
    return new DeleteRequestBuilder<ApiDefinitions<T>, T>(
      this.entityApi,
      urlOrEntity instanceof ApiDefinitions
        ? urlOrEntity
        : { Url: urlOrEntity! }
    );
  }
}
